# Repository Architecture

Este repositório separa preservação bruta, análise editorial, cânon ativo e
histórico canônico aposentado.

## Raízes

| Diretório        | Função                                                              |
| ---------------- | ------------------------------------------------------------------- |
| `sources/`       | Cópias brutas dos materiais originais, preservando nome e conteúdo. |
| `_review/`       | Material em análise, conflitos e splits antes de decisão canônica.  |
| `world/public/`  | Cânon ativo permitido a jogadores.                                  |
| `world/private/` | Segredos canônicos permanentes de mestre.                           |
| `archive/`       | Histórico canônico aposentado.                                      |
| `docs/`          | Documentação operacional do repositório.                            |
| `schema/`        | Contratos de estrutura e metadados.                                 |
| `scripts/`       | Ferramentas locais de validação.                                    |

## Estrutura Pública

```text
world/
  public/
    index.md
    geography/
      north/
        README.md
        realms/
        places/
      north-central/
        README.md
        realms/
        places/
      central/
        README.md
        realms/
        places/
      south/
        README.md
        realms/
        places/
      seas-and-islands/
        README.md
        seas/
        islands/
    history/
    institutions/
    sacred-and-mystical/
  private/
```

## Regra Geográfica

A estrutura reflete posição física no mapa, não apenas afinidade cultural,
política ou temática.

- `north/`: Aurathil, Jotungard e locais efetivamente localizados no Norte.
- `north-central/`: faixa geográfica de transição entre Norte e Centro.
- `central/`: Durnvale, Thalendor, Bryndor e locais centrais.
- `south/`: Irtuman, Owill e locais do Sul.
- `seas-and-islands/`: mares, estreitos, oceanos, arquipélagos e ilhas que não
  pertencem exclusivamente a uma região terrestre.
- Instituições trans-regionais permanecem em `world/public/institutions/`.
- História geral permanece em `world/public/history/`.

`north-central` é uma categoria de organização geográfica do repositório. Ela
não deve ser tratada como quarta macro-região oficial de Barilis.

## Fluxo

1. Materiais originais são preservados em `sources/` sem edição.
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
