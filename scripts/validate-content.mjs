import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import YAML from "yaml";

const rootDir = process.cwd();
const contentRoots = [
  path.join(rootDir, "world", "public"),
  path.join(rootDir, "world", "private"),
];
const requiredFields = [
  "id",
  "title",
  "entity_type",
  "status",
  "visibility",
  "slug",
  "region",
  "geographic_position",
  "relations",
  "updated_at",
];
const validStatuses = new Set(["canonical", "review", "archived"]);
const validVisibility = new Set(["public", "gm"]);
const validRegions = new Set(["north", "central", "south", "seas-and-islands"]);
const validRelationTypes = new Set([
  "inside",
  "belongs_to",
  "politically_linked_to",
]);
const allowedRelationFields = new Set(["target", "type", "basis"]);
const allowedProvenanceFields = new Set(["source_paths", "decision_paths"]);
const ignoredFileNames = new Set(["README.md"]);

const errors = [];
const ids = new Map();
const slugs = new Map();
const entities = new Map();
let legacyRelationFileCount = 0;

async function collectMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function collectCanonicalMarkdownFiles() {
  const files = [];

  for (const directory of contentRoots) {
    files.push(...(await collectMarkdownFiles(directory)));
  }

  return files;
}

function relative(filePath) {
  return path.relative(rootDir, filePath).replaceAll(path.sep, "/");
}

function isIgnoredContentFile(filePath) {
  return ignoredFileNames.has(path.basename(filePath));
}

function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseFrontmatter(source, filePath) {
  if (!source.startsWith("---\n")) {
    errors.push(`${relative(filePath)}: frontmatter YAML ausente.`);
    return null;
  }

  const endIndex = source.indexOf("\n---", 4);

  if (endIndex === -1) {
    errors.push(`${relative(filePath)}: frontmatter YAML sem fechamento.`);
    return null;
  }

  const rawYaml = source.slice(4, endIndex);

  try {
    return YAML.parse(rawYaml) ?? {};
  } catch (error) {
    errors.push(`${relative(filePath)}: YAML inválido (${error.message}).`);
    return null;
  }
}

function expectString(frontmatter, field, filePath) {
  if (
    typeof frontmatter[field] !== "string" ||
    frontmatter[field].trim() === ""
  ) {
    errors.push(
      `${relative(filePath)}: campo "${field}" deve ser texto não vazio.`,
    );
  }
}

function validateFrontmatter(frontmatter, filePath) {
  for (const field of requiredFields) {
    if (!Object.hasOwn(frontmatter, field)) {
      errors.push(
        `${relative(filePath)}: campo obrigatório ausente "${field}".`,
      );
    }
  }

  expectString(frontmatter, "id", filePath);
  expectString(frontmatter, "title", filePath);
  expectString(frontmatter, "entity_type", filePath);
  expectString(frontmatter, "status", filePath);
  expectString(frontmatter, "visibility", filePath);
  expectString(frontmatter, "slug", filePath);
  expectString(frontmatter, "geographic_position", filePath);

  if (
    Object.hasOwn(frontmatter, "region") &&
    frontmatter.region !== null &&
    (typeof frontmatter.region !== "string" || frontmatter.region.trim() === "")
  ) {
    errors.push(
      `${relative(filePath)}: campo "region" deve ser texto não vazio ou null.`,
    );
  }

  if (
    Object.hasOwn(frontmatter, "region") &&
    frontmatter.region !== null &&
    !validRegions.has(frontmatter.region)
  ) {
    errors.push(
      `${relative(filePath)}: campo "region" deve ser north, central, south, seas-and-islands ou null.`,
    );
  }

  if (
    Object.hasOwn(frontmatter, "relations") &&
    !Array.isArray(frontmatter.relations)
  ) {
    errors.push(`${relative(filePath)}: campo "relations" deve ser uma lista.`);
  }

  if (!validStatuses.has(frontmatter.status)) {
    errors.push(
      `${relative(filePath)}: campo "status" deve ser canonical, review ou archived.`,
    );
  }

  if (!validVisibility.has(frontmatter.visibility)) {
    errors.push(
      `${relative(filePath)}: campo "visibility" deve ser public ou gm.`,
    );
  }

  if (
    relative(filePath).startsWith("world/public/") &&
    frontmatter.visibility !== "public"
  ) {
    errors.push(
      `${relative(filePath)}: arquivos em world/public/ devem usar visibility public.`,
    );
  }

  if (
    relative(filePath).startsWith("world/private/") &&
    frontmatter.visibility !== "gm"
  ) {
    errors.push(
      `${relative(filePath)}: arquivos em world/private/ devem usar visibility gm.`,
    );
  }

  if (
    Object.hasOwn(frontmatter, "updated_at") &&
    !/^\d{4}-\d{2}-\d{2}$/.test(String(frontmatter.updated_at))
  ) {
    errors.push(
      `${relative(filePath)}: campo "updated_at" deve usar YYYY-MM-DD.`,
    );
  }

  trackUnique(ids, frontmatter.id, "id", filePath);
  trackUnique(slugs, frontmatter.slug, "slug", filePath);

  if (
    typeof frontmatter.id === "string" &&
    frontmatter.id.trim() !== "" &&
    !entities.has(frontmatter.id)
  ) {
    entities.set(frontmatter.id, {
      filePath,
      status: frontmatter.status,
      visibility: frontmatter.visibility,
    });
  }
}

function trackUnique(index, value, field, filePath) {
  if (typeof value !== "string" || value.trim() === "") {
    return;
  }

  if (index.has(value)) {
    errors.push(
      `${relative(filePath)}: campo "${field}" duplicado com ${relative(index.get(value))}.`,
    );
    return;
  }

  index.set(value, filePath);
}

function validateRepoRelativePath(value, fieldLabel, filePath) {
  if (typeof value !== "string" || value.trim() === "") {
    errors.push(
      `${relative(filePath)}: "${fieldLabel}" deve conter caminhos de texto não vazios.`,
    );
    return;
  }

  if (path.isAbsolute(value)) {
    errors.push(
      `${relative(filePath)}: "${fieldLabel}" não deve usar caminho absoluto (${value}).`,
    );
    return;
  }

  const resolvedPath = path.resolve(rootDir, value);
  const rootRelativePath = path.relative(rootDir, resolvedPath);

  if (rootRelativePath.startsWith("..") || path.isAbsolute(rootRelativePath)) {
    errors.push(
      `${relative(filePath)}: "${fieldLabel}" deve permanecer dentro do repositório (${value}).`,
    );
    return;
  }

  if (!existsSync(resolvedPath)) {
    errors.push(
      `${relative(filePath)}: "${fieldLabel}" aponta para caminho inexistente (${value}).`,
    );
  }
}

function validatePathList(value, fieldLabel, filePath) {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(
      `${relative(filePath)}: "${fieldLabel}" deve ser uma lista não vazia.`,
    );
    return;
  }

  for (const item of value) {
    validateRepoRelativePath(item, fieldLabel, filePath);
  }
}

function validateRelationTarget(target, frontmatter, filePath) {
  if (typeof target !== "string" || target.trim() === "") {
    errors.push(
      `${relative(filePath)}: relação deve declarar target como texto não vazio.`,
    );
    return;
  }

  if (target === frontmatter.id) {
    errors.push(
      `${relative(filePath)}: relação não pode apontar para si mesma.`,
    );
    return;
  }

  const targetEntity = entities.get(target);

  if (!targetEntity) {
    errors.push(
      `${relative(filePath)}: relação aponta para target inexistente (${target}).`,
    );
    return;
  }

  if (targetEntity.status !== "canonical") {
    errors.push(
      `${relative(filePath)}: relação aponta para target não canônico (${target}).`,
    );
  }

  if (frontmatter.visibility === "public" && targetEntity.visibility === "gm") {
    errors.push(
      `${relative(filePath)}: arquivo público não pode apontar para target gm (${target}).`,
    );
  }
}

function validateLegacyRelations(relations, frontmatter, filePath) {
  legacyRelationFileCount += 1;

  for (const target of relations) {
    if (typeof target !== "string" || target.trim() === "") {
      errors.push(
        `${relative(filePath)}: relations legadas devem conter apenas IDs não vazios.`,
      );
      continue;
    }

    validateRelationTarget(target, frontmatter, filePath);
  }
}

function validateStructuredRelations(relations, frontmatter, filePath) {
  const seenPairs = new Set();

  for (const relation of relations) {
    for (const field of Object.keys(relation)) {
      if (!allowedRelationFields.has(field)) {
        errors.push(
          `${relative(filePath)}: relation estruturada contém campo não permitido "${field}".`,
        );
      }
    }

    if (typeof relation.target !== "string" || relation.target.trim() === "") {
      errors.push(
        `${relative(filePath)}: relation estruturada exige target não vazio.`,
      );
    } else {
      validateRelationTarget(relation.target, frontmatter, filePath);
    }

    if (typeof relation.type !== "string" || relation.type.trim() === "") {
      errors.push(
        `${relative(filePath)}: relation estruturada exige type não vazio.`,
      );
    } else if (!validRelationTypes.has(relation.type)) {
      errors.push(
        `${relative(filePath)}: relation type deve ser inside, belongs_to ou politically_linked_to.`,
      );
    }

    if (
      typeof relation.target === "string" &&
      relation.target.trim() !== "" &&
      typeof relation.type === "string" &&
      relation.type.trim() !== ""
    ) {
      const pair = `${relation.type}::${relation.target}`;

      if (seenPairs.has(pair)) {
        errors.push(
          `${relative(filePath)}: relation duplicada para type+target (${relation.type}, ${relation.target}).`,
        );
      }

      seenPairs.add(pair);
    }

    if (Object.hasOwn(relation, "basis")) {
      validatePathList(relation.basis, "relations.basis", filePath);
    }
  }
}

function validateRelations(frontmatter, filePath) {
  if (
    !Object.hasOwn(frontmatter, "relations") ||
    !Array.isArray(frontmatter.relations)
  ) {
    return;
  }

  const relations = frontmatter.relations;

  if (relations.length === 0) {
    return;
  }

  const stringCount = relations.filter(
    (item) => typeof item === "string",
  ).length;
  const objectCount = relations.filter((item) => isPlainObject(item)).length;

  if (stringCount === relations.length) {
    validateLegacyRelations(relations, frontmatter, filePath);
    return;
  }

  if (objectCount === relations.length) {
    validateStructuredRelations(relations, frontmatter, filePath);
    return;
  }

  errors.push(
    `${relative(filePath)}: relations não pode misturar strings legadas e objetos estruturados.`,
  );
}

function validateProvenance(frontmatter, filePath) {
  if (!Object.hasOwn(frontmatter, "provenance")) {
    return;
  }

  if (!isPlainObject(frontmatter.provenance)) {
    errors.push(`${relative(filePath)}: campo "provenance" deve ser objeto.`);
    return;
  }

  for (const field of Object.keys(frontmatter.provenance)) {
    if (!allowedProvenanceFields.has(field)) {
      errors.push(
        `${relative(filePath)}: provenance contém campo não permitido "${field}".`,
      );
    }
  }

  const hasSourcePaths = Object.hasOwn(frontmatter.provenance, "source_paths");
  const hasDecisionPaths = Object.hasOwn(
    frontmatter.provenance,
    "decision_paths",
  );

  if (!hasSourcePaths && !hasDecisionPaths) {
    errors.push(
      `${relative(filePath)}: provenance deve declarar source_paths, decision_paths ou ambos.`,
    );
    return;
  }

  if (hasSourcePaths) {
    validatePathList(
      frontmatter.provenance.source_paths,
      "provenance.source_paths",
      filePath,
    );
  }

  if (hasDecisionPaths) {
    validatePathList(
      frontmatter.provenance.decision_paths,
      "provenance.decision_paths",
      filePath,
    );
  }
}

const markdownFiles = await collectCanonicalMarkdownFiles();
const contentFiles = markdownFiles.filter(
  (filePath) => !isIgnoredContentFile(filePath),
);
const parsedContent = [];

for (const filePath of contentFiles) {
  const source = await readFile(filePath, "utf8");
  const frontmatter = parseFrontmatter(source, filePath);

  if (frontmatter) {
    parsedContent.push({ filePath, frontmatter });
    validateFrontmatter(frontmatter, filePath);
  }
}

for (const { filePath, frontmatter } of parsedContent) {
  validateRelations(frontmatter, filePath);
  validateProvenance(frontmatter, filePath);
}

if (errors.length > 0) {
  console.error("Falha na validação de conteúdo:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.warn(
  `Aviso: ${legacyRelationFileCount} arquivo(s) usam relations legadas em formato de IDs.`,
);

console.log(
  `Validação de conteúdo concluída: ${ids.size} arquivo(s) canônico(s).`,
);
