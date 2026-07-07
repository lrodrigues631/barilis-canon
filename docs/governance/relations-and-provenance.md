# Relações Estruturadas e Proveniência

Este documento define o contrato gradual para `relations` estruturadas e
`provenance` em frontmatter de conteúdo canônico ativo.

## Escopo

O contrato se aplica a arquivos Markdown em `world/public/` e `world/private/`.
Ele não altera material bruto em `sources/`, não substitui registros de
divergência e não cria entidades, rotas, cronologias, fronteiras, portos,
facções, NPCs ou detalhes de campanha.

`relations` continua obrigatório. `provenance` é opcional.

## Formas Permitidas de Relations

`relations` aceita exatamente uma das formas abaixo:

```yaml
relations: []
```

```yaml
relations:
  - realm.example
  - place.example
```

```yaml
relations:
  - target: realm.example
    type: politically_linked_to
    basis:
      - docs/example.md
```

A lista vazia não é considerada legado. A lista legada deve conter apenas IDs em
texto. A lista estruturada deve conter apenas objetos. Misturar strings e
objetos no mesmo arquivo é inválido.

## Objeto Estruturado

Campos permitidos:

- `target`: obrigatório, string não vazia com ID canônico existente.
- `type`: obrigatório, string não vazia dentro dos tipos controlados.
- `basis`: opcional, lista não vazia de caminhos relativos existentes no
  repositório.

Nenhum campo extra é permitido.

## Tipos Controlados

- `inside`: contenção física ou localização interna. Não implica soberania.
- `belongs_to`: vínculo político ou administrativo somente quando declarado
  expressamente por fonte canônica.
- `politically_linked_to`: vínculo político que não implica subordinação
  administrativa, soberania direta, integração territorial ou hierarquia
  interna.

Relações são direcionais. O validador não cria inversos automáticos. O mesmo
arquivo não pode repetir o par `type` + `target`.

## Alvos

O alvo de uma relação deve existir nos índices de `world/public/` ou
`world/private/`, deve ter `status: canonical` e não pode ser o próprio arquivo.

Arquivos públicos não podem apontar para entidades com `visibility: gm`.

## Proveniência

`provenance` registra caminhos de apoio no nível do arquivo, sem proveniência
por frase.

Formato:

```yaml
provenance:
  source_paths:
    - sources/example.md
  decision_paths:
    - docs/example.md
```

`source_paths` e `decision_paths` são individualmente opcionais, mas ao menos
uma das listas deve existir e ser não vazia quando `provenance` estiver
presente. Listas declaradas devem conter apenas strings não vazias com caminhos
relativos existentes no repositório. Caminhos absolutos, caminhos para fora da
raiz e campos extras são inválidos.

## Compatibilidade

A migração é gradual. Arquivos com `relations` legadas continuam aceitos quando
contêm somente IDs válidos. O validador emite um aviso resumido com a quantidade
de arquivos ainda legados, sem transformar esse aviso em falha.
