# Canon Registry

Registro operacional das fontes atuais e do estado de migração para a base
canônica.

Este arquivo não copia conteúdo das fontes. Ele apenas controla o que ainda
precisa ser preservado, avaliado, normalizado ou migrado.

## Áreas

| Área             | Função                                    | Entra no app futuro            |
| ---------------- | ----------------------------------------- | ------------------------------ |
| `sources/`       | Preservação bruta de materiais originais. | Não                            |
| `_review/`       | Análise, conflitos e split editorial.     | Não                            |
| `archive/`       | Histórico canônico aposentado.            | Não por padrão                 |
| `world/public/`  | Cânon ativo permitido a jogadores.        | Sim                            |
| `world/private/` | Segredos canônicos permanentes de mestre. | Somente modo mestre autorizado |

## Hierarquia Aplicada

1. `00_index_unificado_barilis.md` governa geografia macro e tom. O arquivo
   bruto está fisicamente preservado como
   `sources/#00_index_unificado_barilis.md`.
2. `sources/#2.1-reino-de-durnvale.md` é a fonte oficial de Durnvale.
3. `sources/outros-lugares.md` substitui as listas regionais antigas.
4. `sources/torres-de-marfim.md` é fonte própria da instituição.
5. Os arquivos individuais dos reinos continuam fontes primárias de seus
   respectivos territórios.

## Inventário de Fontes

| Fonte                                           | Classificação                  | Estado            | Destino provável                                            |
| ----------------------------------------------- | ------------------------------ | ----------------- | ----------------------------------------------------------- |
| `sources/#00_index_unificado_barilis.md`        | canônico ativo                 | Preservado bruto  | `world/public/` macrogeográfico                             |
| `sources/#1-lore-antiga-revisada.md`            | canônico ativo                 | Preservado bruto  | `world/public/history/`                                     |
| `sources/#2-reino-aurathil-expandido.md`        | canônico ativo                 | Preservado bruto  | `world/public/realms/aurathil/`                             |
| `sources/#2.1-reino-de-durnvale.md`             | canônico ativo                 | Preservado bruto  | `world/public/realms/durnvale/`                             |
| `sources/#2.1-reino-de-durunvale.md`            | histórico/substituído          | Preservado bruto  | Não migrar como cânon ativo                                 |
| `sources/#2.2-reino-de-irtuman.md`              | canônico ativo                 | Preservado bruto  | `world/public/realms/irtuman/`                              |
| `sources/#2.3-reino-de-thalendor.md`            | canônico ativo                 | Preservado bruto  | `world/public/realms/thalendor/`                            |
| `sources/#2.4-reino-durundralin.md`             | canônico ativo                 | Preservado bruto  | `world/public/realms/durundralin/`                          |
| `sources/#2.5-reino-jotungard.md`               | canônico ativo                 | Preservado bruto  | `world/public/realms/jotungard/`                            |
| `sources/#2.6-reino-owill.md`                   | canônico ativo                 | Preservado bruto  | `world/public/realms/owill/`                                |
| `sources/#3-outros-lugares-regiao-central.md`   | histórico/substituído          | Preservado bruto  | Não migrar como cânon ativo                                 |
| `sources/#3.1-outros-lugares-regiao-norte.md`   | histórico/substituído          | Preservado bruto  | Não migrar como cânon ativo                                 |
| `sources/#3.2-outros-lugares-regiao-sul.md`     | histórico/substituído          | Preservado bruto  | Não migrar como cânon ativo                                 |
| `sources/outros-lugares.md`                     | canônico ativo                 | Preservado bruto  | `world/public/places/` e `world/public/regions/`            |
| `sources/torres-de-marfim.md`                   | canônico ativo                 | Preservado bruto  | `world/public/institutions/torres-de-marfim/`               |
| `sources/uldain.md`                             | canônico ativo consolidado     | Preservado bruto  | `aguas-de-uldain` público e material privado de mestre      |
| `sources/economia_barilis.md`                   | canônico ativo                 | Preservado bruto  | Split futuro entre economia do mundo e diretrizes de mestre |
| `sources/orientation_project_barilis.md`        | orientação de projeto          | Preservado bruto  | `docs/governance/`, somente regras permanentes aprovadas    |
| `sources/diretrizes_encontros_e_covis.md`       | fora do escopo do cânon        | Ignorado pelo Git | Candidato futuro a `barilis-master`                         |
| `sources/diretrizes_encontros_grupo_barilis.md` | fora do escopo do cânon        | Ignorado pelo Git | Candidato futuro a `barilis-master` ou remoção local        |
| `sources/Guia de Divindades.docx`               | referência de sistema pendente | Preservado bruto  | A avaliar; não é cânon automático                           |

## Fora do Escopo do Cânon Ativo

- `sources/diretrizes_encontros_e_covis.md`: ferramenta de mestre para
  encontros, combate, ações de covil e balanceamento; candidato futuro ao
  repositório `barilis-master`.
- `sources/diretrizes_encontros_grupo_barilis.md`: dados e balanceamento do
  grupo atual; candidato futuro ao repositório `barilis-master` ou remoção deste
  repositório.
- Trechos de `sources/orientation_project_barilis.md` sobre sessões, fichas,
  combate, encontros e balanceamento.
- Qualquer PDF, ficha, background, log, áudio, iniciativa, PV temporário ou dado
  do grupo atual que venha a aparecer no repositório.
