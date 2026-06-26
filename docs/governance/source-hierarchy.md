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
   `sources/#00_index_unificado_barilis.md`.
2. `#2.1-reino-de-durnvale.md` é a fonte oficial de Durnvale.
3. `outros-lugares.md` substitui as listas regionais antigas.
4. `torres-de-marfim.md` é fonte própria da instituição Torres de Marfim.
5. Arquivos individuais de reinos são fontes primárias de seus próprios
   territórios.
6. `uldain.md` é cânon ativo consolidado para o local do norte com nome exibido
   Águas de Uldain, slug/ID/arquivo `aguas-de-uldain` e alias de busca Uldain,
   mas exige split de visibilidade e escopo antes da migração.
7. `economia_barilis.md` é conteúdo canônico que exige split futuro entre
   contexto econômico do mundo e diretrizes operacionais de mestre.

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
