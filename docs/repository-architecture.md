# Repository Architecture

Este repositório separa preservação bruta, análise editorial, cânon ativo e
histórico canônico aposentado.

## Raízes

| Diretório        | Função                                                              |
| ---------------- | ------------------------------------------------------------------- |
| `sources/`       | Cópias brutas dos materiais originais, preservando nome e conteúdo. |
| `_review/`       | Material em análise, conflitos e merges antes de decisão canônica.  |
| `world/public/`  | Cânon ativo permitido a jogadores.                                  |
| `world/private/` | Segredos canônicos permanentes de mestre.                           |
| `archive/`       | Histórico canônico aposentado.                                      |
| `docs/`          | Documentação operacional do repositório.                            |
| `schema/`        | Contratos de estrutura e metadados.                                 |
| `scripts/`       | Ferramentas locais de validação.                                    |

## Fluxo

1. Materiais originais são copiados para `sources/` sem edição.
2. Trechos candidatos são analisados em `_review/`.
3. Conteúdo aprovado entra em `world/public/` ou `world/private/`.
4. Cânon ativo aposentado vai para `archive/`.

## Princípios

- Somente `world/` contém cânon ativo.
- Somente `world/public/` e `world/private/` devem ser lidos pelo futuro gerador
  de dados do app.
- `world/public/` é a superfície permitida a jogadores.
- `world/private/` é reservado a segredos canônicos permanentes de mestre.
- `world/private/` não deve conter sessões, campanhas, encontros, combate ou
  material temporário de mesa.
- `sources/` não é formatado, normalizado ou validado como cânon.
- Arquivos canônicos usam Markdown com frontmatter YAML.
