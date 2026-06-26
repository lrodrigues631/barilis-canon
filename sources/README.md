# Sources

Área de preservação bruta dos materiais originais de Barilis.

Os arquivos copiados para `sources/` devem preservar nome e conteúdo originais.
Eles não devem ser editados, formatados, normalizados ou tratados como cânon
ativo.

## Estrutura

| Diretório | Uso |
| --- | --- |
| `campanha-origem-1/` | Nome provisório para um projeto de origem. |
| `campanha-origem-2/` | Nome provisório para outro projeto de origem. |
| `compartilhado/` | Materiais brutos compartilhados entre origens. |
| `orientacoes-do-projeto/` | Orientações originais do projeto, preservadas como fonte bruta. |

Os nomes `campanha-origem-1` e `campanha-origem-2` são provisórios. O
proprietário do repositório deve renomeá-los conforme os nomes reais dos
projetos de origem antes ou durante a preservação.

## Relação com o cânon

Somente `world/public/` e `world/private/` podem gerar conteúdo canônico e
futuramente alimentar o aplicativo.

`sources/` não é lido pelo validador de conteúdo, pelo markdownlint-cli2 ou pelo
Prettier.
