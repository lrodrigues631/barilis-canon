# Content Frontmatter

Contrato mínimo de frontmatter YAML para arquivos canônicos ativos em
`world/public/` e `world/private/`.

```yaml
---
id: world.example
title: Example
entity_type: index
status: canonical
visibility: public
slug: example
region: null
geographic_position: global
relations: []
provenance:
  source_paths:
    - sources/example.md
  decision_paths:
    - docs/example.md
updated_at: "2026-06-26"
---
```

## Campos

| Campo                 | Obrigatório | Descrição                                                           |
| --------------------- | ----------- | ------------------------------------------------------------------- |
| `id`                  | Sim         | Identificador estável e único.                                      |
| `title`               | Sim         | Título humano do conteúdo.                                          |
| `entity_type`         | Sim         | Tipo de entidade representada pelo arquivo.                         |
| `status`              | Sim         | Estado editorial do conteúdo.                                       |
| `visibility`          | Sim         | Visibilidade pretendida do conteúdo.                                |
| `slug`                | Sim         | Slug único para roteamento futuro.                                  |
| `region`              | Sim         | Macro-região canônica associada, ou `null` quando não se aplica.    |
| `geographic_position` | Sim         | Posição física ou faixa geográfica usada pela estrutura de pastas.  |
| `relations`           | Sim         | Lista de relações declaradas com outros itens.                      |
| `provenance`          | Não         | Caminhos de fonte e/ou decisão usados como proveniência do arquivo. |
| `updated_at`          | Sim         | Data da última atualização em formato `YYYY-MM-DD`.                 |

## Valores Válidos

`status`:

- `canonical`
- `review`
- `archived`

`visibility`:

- `public`
- `gm`

`region`:

- `north`
- `central`
- `south`
- `seas-and-islands`
- `null`

`geographic_position` atualmente previsto:

- `global`
- `north`
- `north-central`
- `central`
- `south`
- `seas-and-islands`

## Relações

`relations` aceita três formas:

- lista vazia: `[]`;
- lista legada contendo apenas IDs em texto;
- lista estruturada contendo apenas objetos.

As formas legada e estruturada não podem ser misturadas no mesmo arquivo.

Relação estruturada:

```yaml
relations:
  - target: realm.example
    type: politically_linked_to
    basis:
      - docs/example.md
```

Campos permitidos em cada relação estruturada:

- `target`: obrigatório, ID canônico existente.
- `type`: obrigatório, tipo controlado.
- `basis`: opcional, lista não vazia de caminhos relativos existentes no
  repositório.

Tipos controlados:

- `inside`: contenção física ou localização interna, sem inferência de
  soberania.
- `belongs_to`: vínculo político ou administrativo somente quando declarado
  expressamente por fonte canônica.
- `politically_linked_to`: vínculo político sem implicar subordinação
  administrativa, soberania direta, integração territorial ou hierarquia
  interna.

Relações são direcionais, não criam inverso automático e não podem repetir o
mesmo par `type` + `target` no mesmo arquivo.

## Proveniência

`provenance` é opcional. Quando presente, deve conter `source_paths`,
`decision_paths` ou ambos:

```yaml
provenance:
  source_paths:
    - sources/example.md
  decision_paths:
    - docs/example.md
```

Cada lista declarada deve ser não vazia e conter apenas caminhos relativos
existentes no repositório. Campos extras não são permitidos.

## Alinhamento de Pasta

- Arquivos em `world/public/` devem usar `visibility: public`.
- Arquivos em `world/private/` devem usar `visibility: gm`.
- `region` representa uma macro-região canônica, não necessariamente a pasta.
- `geographic_position` representa a posição física ou faixa organizacional de
  pasta.
- Arquivos em `sources/`, `_review/` e `archive/` não são validados por este
  contrato.
