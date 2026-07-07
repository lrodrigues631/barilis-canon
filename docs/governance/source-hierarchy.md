# Source Hierarchy

Hierarquia operacional para decidir como materiais devem fluir até o cânon
ativo.

## Ordem de Trabalho

1. `sources/`: preservação bruta, sem edição, normalização, renomeação ou
   migração automática.
2. `_review/`: análise, conflito, split de visibilidade, split de escopo e
   decisão editorial.
3. `world/public/`: cânon ativo permitido a jogadores.
4. `world/private/`: segredos canônicos permanentes de mestre.
5. `archive/`: histórico canônico aposentado.

## Autoridade Canônica

1. `00_index_unificado_barilis.md` governa geografia macro e tom. O arquivo
   bruto está preservado fisicamente como
   `sources/#00_index_unificado_barilis.md`; seu conteúdo ativo foi migrado para
   `world/public/index.md`. O índice público prevalece apenas para dúvidas e
   conflitos de geografia macro e tom narrativo. Ele não substitui fontes
   primárias de reinos, fontes próprias de instituições, a História Geral,
   decisões de visibilidade público/mestre, segredos, decisões registradas de
   nomenclatura ou decisões canônicas específicas documentadas em governança ou
   registros de divergência.
2. `#2.1-reino-de-durnvale.md` é a fonte oficial de Durnvale.
3. `outros-lugares.md` substitui as listas regionais antigas.
4. `torres-de-marfim.md` é fonte própria da instituição Torres de Marfim.
5. Arquivos individuais de reinos são fontes primárias de seus próprios
   territórios.
6. `uldain.md` é cânon ativo consolidado para o local do Norte com nome exibido
   Águas de Uldain, slug/ID/arquivo `aguas-de-uldain` e alias de busca Uldain. O
   split de visibilidade foi concluído: há conteúdo público mínimo em
   `world/public/`, segredos permanentes de mestre em `world/private/`, e o
   material tático do Complexo Submerso permanece apenas na fonte bruta. Uldain
   não deve ser absorvida por Sharpentrees.
7. `economia_barilis.md` é conteúdo canônico cujo split inicial já foi
   executado. Fatos econômicos públicos mínimos foram migrados, diretrizes
   operacionais ficaram separadas em documentação própria, e reconciliações
   regionais ou afirmações conflitantes permanecem pendentes de etapa futura.

## Organização Geográfica

- Aurathil: `world/public/geography/north/realms/aurathil/`
- Jotungard: `world/public/geography/north/realms/jotungard/`
- DurunDralin: `world/public/geography/north-central/realms/durundralin/`
- Durnvale: `world/public/geography/central/realms/durnvale/`
- Thalendor: `world/public/geography/central/realms/thalendor/`
- Irtuman: `world/public/geography/south/realms/irtuman/`
- Owill: `world/public/geography/south/realms/owill/`
- Águas de Uldain: `world/public/geography/north/places/aguas-de-uldain/`

DurunDralin fica organizado na faixa geográfica `north-central`. Essa pasta é
organizacional e não cria uma quarta macro-região canônica.

## Regras

- `sources/` nunca é fonte direta do aplicativo futuro.
- `_review/` nunca é fonte direta do aplicativo futuro.
- `archive/` não representa cânon ativo.
- Somente `world/public/` e `world/private/` podem alimentar o gerador de dados
  do app.
- `orientation_project_barilis.md` permanece como orientação bruta de projeto;
  apenas regras permanentes aprovadas podem ser extraídas para
  `docs/governance/`.
- Ferramentas de mestre, encontros, combate, ações de covil, fichas e dados do
  grupo atual não entram na hierarquia canônica.
- `diretrizes_encontros_e_covis.md` e `diretrizes_encontros_grupo_barilis.md`
  são candidatos futuros ao repositório `barilis-master`, não fontes do mundo.
- `Guia de Divindades.docx` é referência de sistema pendente e não é cânon
  automático.
