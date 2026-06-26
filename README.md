# Barilis Canon

Repositório privado e canônico de worldbuilding de Barilis e da infraestrutura
mínima de validação de conteúdo.

Este repositório existe para manter a base permanente de referência de mundo em
Markdown estruturado, preparada para expansão contínua e para consumo futuro por
ferramentas de consulta pública e de mestre.

## Escopo

Inclui:

- Cânon ativo em `world/public/` e `world/private/`.
- Fontes brutas preservadas em `sources/`.
- Material em análise em `_review/`.
- Histórico canônico aposentado em `archive/`.
- Documentação operacional, contratos de conteúdo e validação.

Não inclui:

- Campanhas, sessões, logs ou diários de mesa.
- Fichas de personagem.
- PDFs como fonte ativa de trabalho.
- Backgrounds de jogadores.
- Encontros, inimigos específicos de sessão, áudio ou notas de combate.
- Iniciativa, PV temporário ou dados do grupo atual.
- Arquivos de balanceamento do grupo.
- Front-end, API, aplicativo, Expo, React, Vite, Next.js, banco de dados ou
  Tailwind.

## Modelo de conteúdo

Todo arquivo canônico futuro deve ser Markdown com frontmatter YAML. O contrato
mínimo está descrito em `schema/content-frontmatter.md`.

`world/public/` contém conteúdo permitido a jogadores e pode alimentar a
superfície pública de um aplicativo futuro. `world/private/` contém apenas
segredos canônicos e permanentes de mestre. Não use `world/private/` para
sessões, campanhas, combate ou material temporário de mesa.

`sources/` recebe cópias brutas dos Markdown originais, preservando nome e
conteúdo. Esses arquivos não devem ser editados, formatados, normalizados ou
tratados como cânon ativo.

## Ferramentas

Este repositório usa Node.js apenas para qualidade de conteúdo:

- Prettier para formatação.
- markdownlint-cli2 para lint de Markdown.
- Um validador local para frontmatter em `world/public/` e `world/private/`.

Comandos principais:

```bash
npm run check
npm run format
```

Nenhum aplicativo é criado nesta etapa.
