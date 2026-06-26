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
relations: []
updated_at: 2026-06-26
---
```

## Campos

| Campo         | Obrigatório | Descrição                                           |
| ------------- | ----------- | --------------------------------------------------- |
| `id`          | Sim         | Identificador estável e único.                      |
| `title`       | Sim         | Título humano do conteúdo.                          |
| `entity_type` | Sim         | Tipo de entidade representada pelo arquivo.         |
| `status`      | Sim         | Estado editorial do conteúdo.                       |
| `visibility`  | Sim         | Visibilidade pretendida do conteúdo.                |
| `slug`        | Sim         | Slug único para roteamento futuro.                  |
| `region`      | Sim         | Região associada, ou `null` quando não se aplica.   |
| `relations`   | Sim         | Lista de relações declaradas com outros itens.      |
| `updated_at`  | Sim         | Data da última atualização em formato `YYYY-MM-DD`. |

## Valores Válidos

`status`:

- `canonical`
- `review`
- `archived`

`visibility`:

- `public`
- `gm`

## Alinhamento de Pasta

- Arquivos em `world/public/` devem usar `visibility: public`.
- Arquivos em `world/private/` devem usar `visibility: gm`.
- Arquivos em `sources/`, `_review/` e `archive/` não são validados por este
  contrato.
