# Future App Integration

Um aplicativo futuro poderá consumir os arquivos Markdown e o frontmatter deste
repositório.

Essa integração deve ler apenas `world/public/` e `world/private/` como fontes
de dados canônicos. `world/public/` alimenta a consulta permitida a jogadores.
`world/private/` deve aparecer somente em um modo de mestre explicitamente
autorizado.

## Diretrizes

- O aplicativo não é criado neste momento.
- Nenhuma API, front-end, banco de dados ou camada de renderização pertence a
  esta etapa.
- O contrato de conteúdo deve ser estável o suficiente para leitura
  automatizada.
- O frontmatter deve permitir filtros por tipo de entidade, região, status,
  visibilidade e relações.
- Arquivos em `sources/`, `_review/` e `archive/` não devem ser publicados por
  padrão.
