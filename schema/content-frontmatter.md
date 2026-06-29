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
updated_at: "2026-06-26"
---
```

## Campos

| Campo                 | Obrigatório | Descrição                                                          |
| --------------------- | ----------- | ------------------------------------------------------------------ |
| `id`                  | Sim         | Identificador estável e único.                                     |
| `title`               | Sim         | Título humano do conteúdo.                                         |
| `entity_type`         | Sim         | Tipo de entidade representada pelo arquivo.                        |
| `status`              | Sim         | Estado editorial do conteúdo.                                      |
| `visibility`          | Sim         | Visibilidade pretendida do conteúdo.                               |
| `slug`                | Sim         | Slug único para roteamento futuro.                                 |
| `region`              | Sim         | Macro-região canônica associada, ou `null` quando não se aplica.   |
| `geographic_position` | Sim         | Posição física ou faixa geográfica usada pela estrutura de pastas. |
| `relations`           | Sim         | Lista de relações declaradas com outros itens.                     |
| `updated_at`          | Sim         | Data da última atualização em formato `YYYY-MM-DD`.                |

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

## Alinhamento de Pasta

- Arquivos em `world/public/` devem usar `visibility: public`.
- Arquivos em `world/private/` devem usar `visibility: gm`.
- `region` representa uma macro-região canônica, não necessariamente a pasta.
- `geographic_position` representa a posição física ou faixa organizacional de
  pasta.
- Arquivos em `sources/`, `_review/` e `archive/` não são validados por este
  contrato.
