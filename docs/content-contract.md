# Content Contract

O conteúdo canônico ativo deve ser escrito em Markdown com frontmatter YAML.

## Regras

- `sources/` é material bruto, preservado sem edição.
- `_review/` é material em análise.
- `archive/` é histórico canônico aposentado.
- Somente `world/` contém cânon ativo.
- Somente `world/public/` e `world/private/` devem ser lidos pelo futuro gerador
  de dados do app.
- `world/public/` contém conteúdo permitido a jogadores.
- `world/private/` contém apenas segredos canônicos e permanentes de mestre.
- `world/private/` não deve ser usado para sessões, campanhas, encontros,
  combate ou dados temporários do grupo atual.
- `id` e `slug` devem ser únicos dentro dos arquivos validados.

## Frontmatter Obrigatório

Todo arquivo canônico ativo em `world/public/` ou `world/private/` deve
declarar:

- `id`
- `title`
- `entity_type`
- `status`
- `visibility`
- `slug`
- `region`
- `geographic_position`
- `relations`
- `updated_at`

`region` representa a macro-região canônica:

- `north`
- `central`
- `south`
- `seas-and-islands`
- `null`

`geographic_position` representa a posição física ou faixa geográfica usada pela
estrutura de pastas. Valores atualmente previstos:

- `global`
- `north`
- `north-central`
- `central`
- `south`
- `seas-and-islands`

`north-central` é uma categoria organizacional do repositório, não uma quarta
macro-região oficial de Barilis.

## Estados

Valores válidos de `status`:

- `canonical`
- `review`
- `archived`

Valores válidos de `visibility`:

- `public`
- `gm`

## Validação

O validador local verifica arquivos Markdown de conteúdo apenas em
`world/public/` e `world/private/`, ignora READMEs e arquivos operacionais,
exige frontmatter YAML e detecta duplicidade de `id` e `slug`.

Arquivos em `sources/`, `_review/` e `archive/` são ignorados por Prettier,
markdownlint-cli2 e pelo validador.
