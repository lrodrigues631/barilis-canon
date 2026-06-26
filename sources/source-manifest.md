# Source Manifest

Inventário dos arquivos preservados em `sources/`.

Os arquivos listados aqui permanecem brutos. Não migrar, reescrever, normalizar, mover ou renomear conteúdo dentro de `sources/` sem etapa explícita de revisão.

## Arquivos Brutos Encontrados

| Caminho do arquivo | Origem | Categoria | Status inicial | Possível destino canônico | Observações | Conflito conhecido |
| --- | --- | --- | --- | --- | --- | --- |
| `sources/#00_index_unificado_barilis.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/index.md` e/ou documentos macro de geografia | Nome físico preservado com `#`. Nome e autoridade canônica oficial: `00_index_unificado_barilis.md`. Governa geografia macro e tom. | Pode divergir de arquivos regionais antigos; prevalece para macrogeografia e tom. |
| `sources/#1-lore-antiga-revisada.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/history/` | Fonte histórica geral das eras de Barilis. | Deve ser conferido contra `00_index_unificado_barilis.md` antes de migrar geografia implícita. |
| `sources/#2-reino-aurathil-expandido.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/realms/aurathil/` | Fonte primária de Aurathil. | Nenhum conflito explícito identificado no inventário. |
| `sources/#2.1-reino-de-durnvale.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/realms/durnvale/` | Fonte oficial de Durnvale. | Conflita com `#2.1-reino-de-durunvale.md`; grafia oficial definida como Durnvale. |
| `sources/#2.1-reino-de-durunvale.md` | Material bruto copiado para `sources/` | histórico/substituído | Preservado bruto | Não migrar como cânon ativo | Variante antiga/substituída de Durnvale. | Declara "Durunvale" como oficial, mas está substituído por `#2.1-reino-de-durnvale.md`. |
| `sources/#2.2-reino-de-irtuman.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/realms/irtuman/` | Fonte primária de Irtuman. | Nenhum conflito explícito identificado no inventário. |
| `sources/#2.3-reino-de-thalendor.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/realms/thalendor/` | Fonte primária de Thalendor. | Deve respeitar Durnvale como grafia oficial em referências à travessia. |
| `sources/#2.4-reino-durundralin.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/realms/durundralin/` | Fonte primária de DurunDralin. | Nenhum conflito explícito identificado no inventário. |
| `sources/#2.5-reino-jotungard.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/realms/jotungard/` | Fonte primária de Jotungard. | Nenhum conflito explícito identificado no inventário. |
| `sources/#2.6-reino-owill.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/realms/owill/` | Fonte primária de Owill. | Nenhum conflito explícito identificado no inventário. |
| `sources/#3-outros-lugares-regiao-central.md` | Material bruto copiado para `sources/` | histórico/substituído | Preservado bruto | Não migrar como cânon ativo; consultar apenas para auditoria | Lista regional antiga da Região Central. | Substituído por `outros-lugares.md`. |
| `sources/#3.1-outros-lugares-regiao-norte.md` | Material bruto copiado para `sources/` | histórico/substituído | Preservado bruto | Não migrar como cânon ativo; consultar apenas para auditoria | Lista regional antiga da Região Norte. | Substituído por `outros-lugares.md`. |
| `sources/#3.2-outros-lugares-regiao-sul.md` | Material bruto copiado para `sources/` | histórico/substituído | Preservado bruto | Não migrar como cânon ativo; consultar apenas para auditoria | Lista regional antiga da Região Sul. | Substituído por `outros-lugares.md`. |
| `sources/outros-lugares.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/places/` e/ou `world/public/regions/` | Compilado que substitui as listas regionais antigas. | Pode repetir conteúdo das listas regionais antigas; o compilado prevalece. |
| `sources/torres-de-marfim.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/institutions/torres-de-marfim/` | Fonte própria da instituição Torres de Marfim. | Não deve ser absorvido por arquivos regionais. |
| `sources/uldain.md` | Material bruto copiado para `sources/` | canônico ativo consolidado | Preservado bruto | `world/public/places/north/aguas-de-uldain/` e `world/private/aguas-de-uldain/` | Nome exibido: Águas de Uldain. Slug/ID/arquivo: `aguas-de-uldain`. Alias de busca: Uldain. Local do norte de Barilis. Ação futura: requer split de visibilidade e escopo. | Não é conflito de merge; exige separar público, segredo permanente de mestre e material tático durante a migração. |
| `sources/economia_barilis.md` | Material bruto copiado para `sources/` | canônico ativo | Preservado bruto | `world/public/` para contexto econômico; possível documentação de mestre fora de `world/` para diretrizes operacionais | Conteúdo econômico de Barilis que requer split futuro entre contexto econômico do mundo e diretrizes operacionais de mestre. | Não migrar sem separar conteúdo canônico de instrução operacional. |
| `sources/orientation_project_barilis.md` | Material bruto copiado para `sources/` | orientação de projeto | Preservado bruto | `docs/governance/` apenas para regras permanentes aprovadas | Deve permanecer como orientação bruta de projeto. Não migrar para `world/`. | Não copiar automaticamente conteúdos de campanha ou instruções antigas. |
| `sources/diretrizes_encontros_e_covis.md` | Material bruto encontrado localmente em `sources/` | fora do escopo do cânon | Ignorado pelo Git | Candidato futuro ao repositório `barilis-master` | Ferramenta de mestre sobre encontros, combate, ações de covil e balanceamento. | Não migrar para `world/`; não versionar neste repositório. |
| `sources/diretrizes_encontros_grupo_barilis.md` | Material bruto encontrado localmente em `sources/` | fora do escopo do cânon | Ignorado pelo Git | Candidato futuro ao repositório `barilis-master` ou remoção local | Contém diretrizes de encontros e balanceamento do grupo atual. | Dados do grupo atual ficam fora do repositório canônico; não versionar neste repositório. |
| `sources/Guia de Divindades.docx` | Material bruto copiado para `sources/` | referência de sistema pendente | Preservado bruto | A avaliar fora de `world/` antes de qualquer uso canônico | Documento `.docx`; não é cânon automático. | Requer avaliação manual e conversão controlada se algum dia for usado. |
| `sources/README.md` | Documento operacional criado no repositório | orientação de projeto | Operacional | Permanece em `sources/` | Explica a função de preservação bruta. | Não é fonte de lore. |
| `sources/source-manifest.md` | Documento operacional criado no repositório | orientação de projeto | Operacional | Permanece em `sources/` | Este inventário. | Não é fonte de lore. |

## Placeholders Operacionais

- `sources/campanha-origem-1/.gitkeep`
- `sources/campanha-origem-2/.gitkeep`
- `sources/compartilhado/.gitkeep`
- `sources/orientacoes-do-projeto/.gitkeep`
