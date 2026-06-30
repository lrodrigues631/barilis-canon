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

| Ordem | Fonte                                             | Ação                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | `sources/#00_index_unificado_barilis.md`          | Migrado nesta etapa para `world/public/index.md`; manter bruto preservado em `sources/`.                                                                                                                                                                                                    |
| 2     | `sources/#1-lore-antiga-revisada.md`              | Migrar história geral, conferindo dependências macro com `world/public/index.md`.                                                                                                                                                                                                           |
| 3     | `sources/#2.1-reino-de-durnvale.md`               | Dividido nesta etapa entre `world/public/geography/central/realms/durnvale/index.md` e `world/private/geography/central/realms/durnvale/possibilidades-narrativas.md`; manter bruto preservado em `sources/`.                                                                               |
| 4     | `sources/#2.2-reino-de-irtuman-atualizado.md`     | Dividido nesta etapa entre `world/public/geography/south/realms/irtuman/index.md` e `world/private/geography/south/realms/irtuman/segredos-e-conspiracoes.md`; manter bruto preservado em `sources/`.                                                                                       |
| 5     | `sources/#2.3-reino-de-thalendor-atualizado.md`   | Dividido nesta etapa entre `world/public/geography/central/realms/thalendor/index.md` e `world/private/geography/central/realms/thalendor/segredos-e-redes.md`; manter bruto preservado em `sources/`.                                                                                      |
| 6     | `sources/#2.4-reino-de-durundralin-atualizado.md` | Dividido nesta etapa entre `world/public/geography/north-central/realms/durundralin/index.md` e `world/private/geography/north-central/realms/durundralin/segredos-e-ameacas.md`; manter bruto preservado em `sources/`.                                                                    |
| 7     | `sources/#2-reino-aurathil-atualizado.md`         | Dividido nesta etapa entre `world/public/geography/north/realms/aurathil/index.md` e `world/private/geography/north/realms/aurathil/segredos-e-intrigas.md`; manter bruto preservado em `sources/`.                                                                                         |
| 8     | `sources/#2.5-reino-de-jotungard-atualizado.md`   | Dividido nesta etapa entre `world/public/geography/north/realms/jotungard/index.md` e `world/private/geography/north/realms/jotungard/segredos-das-geadas.md`; manter bruto preservado em `sources/`.                                                                                       |
| 9     | `sources/#2.6-reino-de-owill-atualizado.md`       | Dividido nesta etapa entre `world/public/geography/south/realms/owill/index.md` e `world/private/geography/south/realms/owill/segredos-e-fragilidades.md`; manter bruto preservado em `sources/`.                                                                                           |
| 10    | `sources/outros-lugares.md`                       | Migrar lugares menores e relações regionais; usar como substituto das listas antigas.                                                                                                                                                                                                       |
| 10.1  | `sources/vaelyndor.md`                            | Conteúdo público migrado para `world/public/geography/north/realms/vaelyndor/index.md`; manter fonte canônica dedicada preservada em `sources/`; nenhuma camada privada de mestre foi criada.                                                                                               |
| 10.2  | `sources/sharpentrees.md`                         | Preservar como fonte bruta detalhada de Sharpentrees; material tático, eventos, regras de mesa, encontros e orientação de narração permanecem no bruto e não foram migrados.                                                                                                                |
| 10.3  | `sources/floresta-de-sharpentrees.md`             | Migração de Sharpentrees concluída em `world/`: conteúdo público, conteúdo privado regional, organização privada e núcleo regional de NPCs; material tático continua apenas em `sources/sharpentrees.md`; Uldain permanece reservado à Fase 3; nenhum conteúdo canônico inédito foi criado. |
| 11    | `sources/torres-de-marfim.md`                     | Migrar como instituição própria, sem absorver em região.                                                                                                                                                                                                                                    |
| 12    | `sources/uldain.md`                               | Migrar como `aguas-de-uldain`, com nome exibido Águas de Uldain e alias Uldain, após split de visibilidade e escopo.                                                                                                                                                                        |
| 13    | `sources/economia_barilis.md`                     | Separar contexto econômico canônico de diretrizes operacionais de mestre antes de migrar.                                                                                                                                                                                                   |
| 14    | `sources/orientation_project_barilis.md`          | Extrair apenas regras permanentes aprovadas para `docs/governance/`; não migrar para `world/`.                                                                                                                                                                                              |
| 15    | Arquivos fora do escopo                           | Manter fora de `world/`; avaliar `barilis-master`, remoção ou documentação externa.                                                                                                                                                                                                         |

## Fontes Ativas por Destino

| Destino                                                                              | Fontes                                                                                                                                 |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `world/public/index.md`                                                              | `#00_index_unificado_barilis.md`                                                                                                       |
| `world/public/history/`                                                              | `#1-lore-antiga-revisada.md`                                                                                                           |
| `world/public/geography/north/realms/aurathil/index.md`                              | Conteúdo canônico público de `#2-reino-aurathil-atualizado.md`                                                                         |
| `world/private/geography/north/realms/aurathil/segredos-e-intrigas.md`               | Segredos, intrigas restritas e conteúdo de mestre de `#2-reino-aurathil-atualizado.md`                                                 |
| `world/public/geography/north/realms/vaelyndor/index.md`                             | Conteúdo público de `sources/vaelyndor.md`                                                                                             |
| `world/public/geography/north/realms/jotungard/index.md`                             | Conteúdo canônico público de `#2.5-reino-de-jotungard-atualizado.md`                                                                   |
| `world/private/geography/north/realms/jotungard/segredos-das-geadas.md`              | Segredos das geadas e conteúdo de mestre de `#2.5-reino-de-jotungard-atualizado.md`                                                    |
| `world/public/geography/north/places/floresta-de-sharpentrees/index.md`              | Conteúdo público de `sources/floresta-de-sharpentrees.md`                                                                              |
| `world/private/geography/north/places/floresta-de-sharpentrees/segredos-da-nevoa.md` | Conteúdo de mestre de `sources/floresta-de-sharpentrees.md`; Uldain permanece na Fase 3                                                |
| `world/private/organizations/sussurros-da-floresta.md`                               | Organização privada registrada em `sources/floresta-de-sharpentrees.md`; migrada como camada de mestre                                 |
| `world/private/npcs/north/sharpentrees/`                                             | Núcleo regional privado de NPCs registrados em `sources/floresta-de-sharpentrees.md`; limitado aos seis NPCs canônicos de Sharpentrees |
| `world/public/geography/north-central/realms/durundralin/index.md`                   | Conteúdo canônico público de `#2.4-reino-de-durundralin-atualizado.md`                                                                 |
| `world/private/geography/north-central/realms/durundralin/segredos-e-ameacas.md`     | Segredos, ameaças restritas e conteúdo de mestre de `#2.4-reino-de-durundralin-atualizado.md`                                          |
| `world/public/geography/central/realms/durnvale/index.md`                            | Conteúdo canônico público de `#2.1-reino-de-durnvale.md`                                                                               |
| `world/private/geography/central/realms/durnvale/possibilidades-narrativas.md`       | Possibilidades narrativas de mestre de `#2.1-reino-de-durnvale.md`                                                                     |
| `world/public/geography/central/realms/thalendor/index.md`                           | Conteúdo canônico público de `#2.3-reino-de-thalendor-atualizado.md`                                                                   |
| `world/private/geography/central/realms/thalendor/segredos-e-redes.md`               | Segredos, redes restritas e conteúdo de mestre de `#2.3-reino-de-thalendor-atualizado.md`                                              |
| `world/public/geography/south/realms/irtuman/index.md`                               | Conteúdo canônico público de `#2.2-reino-de-irtuman-atualizado.md`                                                                     |
| `world/private/geography/south/realms/irtuman/segredos-e-conspiracoes.md`            | Segredos, conspirações e conteúdo de mestre de `#2.2-reino-de-irtuman-atualizado.md`                                                   |
| `world/public/geography/south/realms/owill/index.md`                                 | Conteúdo canônico público de `#2.6-reino-de-owill-atualizado.md`                                                                       |
| `world/private/geography/south/realms/owill/segredos-e-fragilidades.md`              | Segredos, fragilidades e conteúdo de mestre de `#2.6-reino-de-owill-atualizado.md`                                                     |
| `world/public/geography/*/places/`                                                   | `outros-lugares.md`                                                                                                                    |
| `world/public/geography/north/places/aguas-de-uldain/`                               | Parte pública de `uldain.md`, após split                                                                                               |
| `world/public/geography/seas-and-islands/seas/`                                      | Mares e estreitos citados no índice, em migrações futuras                                                                              |
| `world/public/geography/seas-and-islands/islands/`                                   | Ilhas e arquipélagos citados no índice, em migrações futuras                                                                           |
| `world/public/institutions/torres-de-marfim/`                                        | `torres-de-marfim.md`                                                                                                                  |
| A definir                                                                            | Parte canônica de `economia_barilis.md`, após split                                                                                    |

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
