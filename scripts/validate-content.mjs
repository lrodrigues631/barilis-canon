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
const ignoredFileNames = new Set(["README.md"]);

const errors = [];
const ids = new Map();
const slugs = new Map();

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

const markdownFiles = await collectCanonicalMarkdownFiles();

for (const filePath of markdownFiles) {
  if (isIgnoredContentFile(filePath)) {
    continue;
  }

  const source = await readFile(filePath, "utf8");
  const frontmatter = parseFrontmatter(source, filePath);

  if (frontmatter) {
    validateFrontmatter(frontmatter, filePath);
  }
}

if (errors.length > 0) {
  console.error("Falha na validação de conteúdo:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Validação de conteúdo concluída: ${ids.size} arquivo(s) canônico(s).`,
);
