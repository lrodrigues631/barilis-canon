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
- `relations` aceita lista vazia, lista legada de IDs ou lista estruturada de
  objetos, sem misturar formatos no mesmo arquivo.
- `provenance` é opcional e registra caminhos de fontes e/ou decisões no nível
  do arquivo.

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

## Relações e Proveniência

O contrato detalhado de `relations` estruturadas e `provenance` está em
`docs/governance/relations-and-provenance.md`.

Resumo operacional:

- `relations: []` é válido.
- Relações legadas devem conter apenas strings com IDs canônicos existentes.
- Relações estruturadas devem conter apenas objetos com `target`, `type` e,
  opcionalmente, `basis`.
- Tipos estruturados permitidos: `inside`, `belongs_to` e
  `politically_linked_to`.
- Arquivos públicos não podem apontar para entidades de visibilidade `gm`.
- `provenance`, quando presente, deve conter `source_paths`, `decision_paths` ou
  ambos, sempre como listas não vazias de caminhos relativos existentes.

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
exige frontmatter YAML, detecta duplicidade de `id` e `slug`, valida alvos de
relações e valida caminhos de proveniência.

Relações legadas aceitas geram um aviso resumido com a quantidade de arquivos
ainda nesse formato. Esse aviso não causa falha.

Arquivos em `sources/`, `_review/` e `archive/` são ignorados por Prettier,
markdownlint-cli2 e pelo validador.
