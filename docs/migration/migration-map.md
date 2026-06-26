# Migration Map

Mapa operacional para migração futura de materiais brutos para a base canônica.

## Fluxo

| Etapa               | Origem                                   | Destino              | Ação                                                               |
| ------------------- | ---------------------------------------- | -------------------- | ------------------------------------------------------------------ |
| Preservação         | Materiais originais                      | `sources/`           | Copiar arquivos brutos sem edição.                                 |
| Triagem             | `sources/`                               | `_review/inbox/`     | Identificar candidatos a cânon.                                    |
| Conflito ou split   | `_review/inbox/`                         | `_review/conflicts/` | Registrar divergências, splits de visibilidade e splits de escopo. |
| Preparação          | `_review/conflicts/` ou `_review/inbox/` | `_review/merge/`     | Preparar versão consolidada antes de canonizar.                    |
| Canonização pública | `_review/merge/`                         | `world/public/`      | Criar Markdown canônico permitido a jogadores.                     |
| Canonização privada | `_review/merge/`                         | `world/private/`     | Criar segredo canônico permanente de mestre.                       |
| Aposentadoria       | `world/`                                 | `archive/`           | Preservar histórico canônico aposentado.                           |

## Ordem de Migração Proposta

| Ordem | Fonte                                    | Ação                                                                                                                 |
| ----- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1     | `sources/#00_index_unificado_barilis.md` | Migrar usando `00_index_unificado_barilis.md` como nome e autoridade canônica oficial para geografia macro e tom.    |
| 2     | `sources/#1-lore-antiga-revisada.md`     | Migrar história geral, conferindo dependências macro com o índice oficial.                                           |
| 3     | Arquivos individuais de reinos           | Migrar cada território para `world/public/realms/`, começando por Durnvale como grafia oficial.                      |
| 4     | `sources/outros-lugares.md`              | Migrar lugares menores e relações regionais; usar como substituto das listas antigas.                                |
| 5     | `sources/torres-de-marfim.md`            | Migrar como instituição própria, sem absorver em região.                                                             |
| 6     | `sources/uldain.md`                      | Migrar como `aguas-de-uldain`, com nome exibido Águas de Uldain e alias Uldain, após split de visibilidade e escopo. |
| 7     | `sources/economia_barilis.md`            | Separar contexto econômico canônico de diretrizes operacionais de mestre antes de migrar.                            |
| 8     | `sources/orientation_project_barilis.md` | Extrair apenas regras permanentes aprovadas para `docs/governance/`; não migrar para `world/`.                       |
| 9     | Arquivos fora do escopo                  | Manter fora de `world/`; avaliar `barilis-master`, remoção ou documentação externa.                                  |

## Fontes Ativas por Destino

| Destino                                          | Fontes                                              |
| ------------------------------------------------ | --------------------------------------------------- |
| `world/public/history/`                          | `#1-lore-antiga-revisada.md`                        |
| `world/public/realms/aurathil/`                  | `#2-reino-aurathil-expandido.md`                    |
| `world/public/realms/durnvale/`                  | `#2.1-reino-de-durnvale.md`                         |
| `world/public/realms/irtuman/`                   | `#2.2-reino-de-irtuman.md`                          |
| `world/public/realms/thalendor/`                 | `#2.3-reino-de-thalendor.md`                        |
| `world/public/realms/durundralin/`               | `#2.4-reino-durundralin.md`                         |
| `world/public/realms/jotungard/`                 | `#2.5-reino-jotungard.md`                           |
| `world/public/realms/owill/`                     | `#2.6-reino-owill.md`                               |
| `world/public/places/` e `world/public/regions/` | `outros-lugares.md`                                 |
| `world/public/institutions/torres-de-marfim/`    | `torres-de-marfim.md`                               |
| `world/public/places/north/aguas-de-uldain/`     | Parte pública de `uldain.md`, após split            |
| `world/private/aguas-de-uldain/`                 | Partes privadas de `uldain.md`, após split          |
| A definir                                        | Parte canônica de `economia_barilis.md`, após split |

## Não Migrar Para `world/`

- `sources/diretrizes_encontros_e_covis.md`
- `sources/diretrizes_encontros_grupo_barilis.md`
- `sources/Guia de Divindades.docx`, até avaliação manual
- Conteúdo antigo ou de campanha de `sources/orientation_project_barilis.md`

## Restrições

- Não copiar campanhas, fichas, logs, encontros, combate ou dados temporários
  para `world/`.
- Não editar arquivos preservados em `sources/`.
- Não tratar `_review/` como cânon ativo.
- Não migrar as listas regionais antigas como fontes ativas, porque
  `outros-lugares.md` as substitui.
