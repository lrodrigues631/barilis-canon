---
id: "guia-topologico-definitivo-mapa-continental-barilis"
tipo: "Guia de governança cartográfica e fonte de decisão"
status: "ativo para sincronização"
atualizado_em: "2026-07-01"
canonico: false
uso:
  "Decisão operacional para sincronizar documentação geográfica e
  MAPA-CONTINENTAL.json"
substitui:
  - "GUIA_REVISAO_TOPOLOGIA_MAPA_CONTINENTAL_BARILIS.md"
---

# Guia Topológico Definitivo — Mapa Continental de Barilis

## 1. Finalidade e precedência

Este guia consolida as decisões humanas mais recentes sobre nomes, posições e
relações espaciais de Barilis.

Ele não substitui o índice geográfico canônico nem os documentos próprios dos
reinos. Ele determina como documentos ativos e o `MAPA-CONTINENTAL.json` devem
ser sincronizados quando houver divergência cartográfica ou nomenclatural.

Hierarquia para esta sincronização:

1. confirmações diretas do mestre registradas neste guia;
2. `world/public/index.md` e as fontes canônicas ativas;
3. documentos ativos migrados em `world/public/` e `world/private/`;
4. `sources/MAPA-CONTINENTAL.json`;
5. `sources/MAPA-CONTINENTAL.png`.

Quando este guia contradiz uma decisão cartográfica anterior, este guia
prevalece e os documentos ativos afetados devem ser corrigidos na mesma
atualização.

## 2. Limites de uso

O mapa registra relações qualitativas e aproximadas.

Não é permitido derivar automaticamente:

- coordenadas numéricas;
- distâncias;
- tempo de viagem;
- rotas;
- fronteiras exatas;
- portos;
- domínio territorial interno;
- soberania além da declarada;
- facções, eventos, locais ou relações políticas novos.

Toda relação cardinal aproximada deve usar `precision: "approximate"` e
`may_derive: false`.

## 3. Convenções estruturais

- Norte fica no topo do mapa.
- Norte, Centro e Sul são as macro-regiões principais.
- `north-central` é uma faixa geográfica e organizacional de repositório; não é
  quarta macro-região.
- DurunDralin permanece em macro-região Central, mas ocupa a faixa norte-central
  entre Norte e Centro.
- O mapa pode conter entidades sem página em `world/`, desde que fiquem
  explicitamente classificadas como referência cartográfica e não recebam lore
  novo.

## 4. Nomes canônicos ativos

| Não usar como nome ativo        | Nome canônico ativo        | Regra                                                                                    |
| ------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------- |
| Durundralin                     | DurunDralin                | Grafia oficial.                                                                          |
| Durunvale                       | Durnvale                   | Grafia oficial.                                                                          |
| Forte da Costa Rochosa          | Forte Abandonado           | Forte da Costa Rochosa não existe como entidade nem alias ativo.                         |
| Feira dos Pactos Proibidos      | Feira dos Pactos Perdidos  | Este é o único nome ativo do evento.                                                     |
| Praia dos Pactos Proibidos      | Feira dos Pactos Perdidos  | Não é praia.                                                                             |
| Atalaia dos Pactos Proibidos    | —                          | Não existe como entidade canônica. Não criar nem manter no mapa ou em documentos ativos. |
| Floresta Dourada de Vaely       | Floresta Dourada de Faeryl | Nome confirmado.                                                                         |
| Ruínas de Ellum’Thar / Elumthar | Ruínas de Elum’Thar        | Grafia oficial.                                                                          |
| Pântano de Eleanor              | Pântano de Elanor          | Grafia oficial.                                                                          |
| Vale de Silverglen              | Vila de Silverglen         | Não existe vale separado confirmado.                                                     |
| Ilha Solinach                   | Ilha de Solmath            | Nome confirmado.                                                                         |

Referências antigas podem permanecer apenas em fontes históricas preservadas,
nunca como entidades ou aliases ativos.

## 5. Decisões espaciais confirmadas

### 5.1 Norte

| Sujeito                    | Relação                     | Objeto ou valor                         | Status                     |
| -------------------------- | --------------------------- | --------------------------------------- | -------------------------- |
| Aurathil                   | `located_in_quadrant`       | noroeste de Barilis                     | `canonical_user_confirmed` |
| Jotungard                  | `located_in_quadrant`       | nordeste de Barilis                     | `canonical_user_confirmed` |
| Floresta de Sharpentrees   | `between`                   | Aurathil e Jotungard                    | `canonical_written`        |
| Reino de Vaelyndor         | `south_southwest_of`        | Aurathil                                | `canonical_user_confirmed` |
| Reino de Vaelyndor         | `coastal`                   | costa oeste/noroeste                    | `canonical_user_confirmed` |
| Vila de Dawnwood           | `south_southeast_of`        | Aurathil                                | `canonical_user_confirmed` |
| Vila de Emberfall          | `north_northwest_of`        | Floresta de Sharpentrees                | `canonical_user_confirmed` |
| Vila de Everbright         | `north_northwest_of`        | Floresta de Sharpentrees                | `canonical_user_confirmed` |
| Fenrir’s Hollow            | `north_northwest_of`        | Jotungard                               | `canonical_user_confirmed` |
| Fenrir’s Hollow            | `coastal`                   | costa norte                             | `canonical_user_confirmed` |
| Vila de Silverglen         | `southwest_of`              | Jotungard                               | `canonical_user_confirmed` |
| Vila de Silverglen         | `north_northeast_of`        | base norte das Montanhas de DurunDralin | `canonical_user_confirmed` |
| Vila de Frostholm          | `at_southeastern_border_of` | Jotungard                               | `canonical_user_confirmed` |
| Vila de Frostholm          | `at_foothills_of`           | Montanhas de DurunDralin                | `canonical_user_confirmed` |
| Vila de Frostholm          | `coastal`                   | costa nordeste                          | `canonical_user_confirmed` |
| Floresta Dourada de Faeryl | `east_northeast_of`         | Aurathil                                | `canonical_user_confirmed` |
| Floresta Dourada de Faeryl | `southeast_of`              | Vila de Everbright                      | `canonical_user_confirmed` |
| Floresta Dourada de Faeryl | `south_southwest_of`        | Vila de Emberfall                       | `canonical_user_confirmed` |
| Ruínas da Torre de Eldrin  | `south_of`                  | Floresta Dourada de Faeryl              | `canonical_user_confirmed` |
| Ruínas da Torre de Eldrin  | `east_of`                   | Aurathil                                | `canonical_user_confirmed` |
| Ruínas da Torre de Eldrin  | `northeast_of`              | Vila de Dawnwood                        | `canonical_user_confirmed` |

### 5.2 Centro

| Sujeito                    | Relação             | Objeto ou valor                  | Status                     |
| -------------------------- | ------------------- | -------------------------------- | -------------------------- |
| DurunDralin                | `in_macro_region`   | Centro                           | `canonical_written`        |
| DurunDralin                | `geographic_band`   | norte-central                    | `canonical_user_confirmed` |
| DurunDralin                | `south_of`          | Jotungard                        | `canonical_user_confirmed` |
| DurunDralin                | `east_of`           | Durnvale                         | `canonical_written`        |
| Thalendor                  | `south_of`          | Durnvale                         | `canonical_written`        |
| Estreito das Mil Correntes | `north_of`          | Durnvale                         | `canonical_written`        |
| Forte Abandonado           | `northwest_of`      | Durnvale                         | `canonical_user_confirmed` |
| Forte Abandonado           | `coastal`           | costa noroeste de Durnvale       | `canonical_user_confirmed` |
| Forte Abandonado           | `north_of`          | Montanhas Costeiras              | `canonical_user_confirmed` |
| Vale dos Últimos Suspiros  | `northwest_of`      | Bryndor                          | `canonical_user_confirmed` |
| Pântano de Elanor          | `between`           | Thalendor e Bryndor              | `canonical_user_confirmed` |
| Pântano de Elanor          | `east_of`           | Thalendor                        | `canonical_user_confirmed` |
| Pântano de Elanor          | `west_of`           | Bryndor                          | `canonical_user_confirmed` |
| Vilarejo de Hollowmist     | `south_of`          | Pântano de Elanor                | `canonical_user_confirmed` |
| Vila de Gorrukh            | `southeast_of`      | Floresta Negra de Eldewood       | `canonical_user_confirmed` |
| Bosque das Sombras Mudas   | `west_southwest_of` | Vilarejo de Hollowmist           | `canonical_user_confirmed` |
| Feira dos Pactos Perdidos  | `near`              | Torres de Marfim                 | `canonical_user_confirmed` |
| Feira dos Pactos Perdidos  | `event_annotation`  | evento itinerante sem ponto fixo | `canonical_user_confirmed` |
| Ossuário das Marés         | `at_border_of`      | transição entre Centro e Sul     | `canonical_user_confirmed` |
| Ossuário das Marés         | `coastal`           | costa sudoeste                   | `canonical_user_confirmed` |

O Ossuário das Marés não pertence a Irtuman e não recebe relação de soberania.
Para compatibilidade com a estrutura atual do repositório, sua página permanece
sob `world/public/geography/central/places/`, mas deve ser descrita como marco
costeiro da transição Centro–Sul. Isso é organização de conteúdo, não declaração
política.

### 5.3 Sul e territórios marítimos

| Sujeito                               | Relação                 | Objeto ou valor          | Status                     |
| ------------------------------------- | ----------------------- | ------------------------ | -------------------------- |
| Irtuman                               | `in_macro_region`       | Sul                      | `canonical_written`        |
| Owill                                 | `in_macro_region`       | Sul                      | `canonical_written`        |
| Owill                                 | `island`                | Barilis                  | `canonical_written`        |
| Owill                                 | `southwest_of`          | Irtuman                  | `canonical_user_confirmed` |
| Owill                                 | `near`                  | costa sul continental    | `canonical_written`        |
| Floresta de Kristarr                  | `south_of`              | Irtuman                  | `canonical_user_confirmed` |
| Deserto de Knull                      | `south_of`              | Floresta de Kristarr     | `canonical_user_confirmed` |
| Grande Árvore da Floresta de Kristarr | `inside`                | Floresta de Kristarr     | `canonical_written`        |
| Vila Reina                            | `south_of`              | Deserto de Knull         | `canonical_user_confirmed` |
| Vila Reina                            | `coastal`               | costa sul                | `canonical_user_confirmed` |
| Vila do Farol                         | `east_of`               | Deserto de Knull         | `canonical_user_confirmed` |
| Vila do Farol                         | `coastal`               | costa leste              | `canonical_written`        |
| Prisão de Vertumbra                   | `belongs_to`            | Irtuman                  | `canonical_user_confirmed` |
| Prisão de Vertumbra                   | `island`                | Barilis                  | `canonical_user_confirmed` |
| Prisão de Vertumbra                   | `southeast_of`          | Irtuman                  | `canonical_user_confirmed` |
| Prisão de Vertumbra                   | `northeast_of`          | Deserto de Knull         | `canonical_user_confirmed` |
| Pântano de Orkrya                     | `independent_from`      | Irtuman                  | `canonical_user_confirmed` |
| Pântano de Orkrya                     | `island`                | Barilis                  | `canonical_user_confirmed` |
| Pântano de Orkrya                     | `north_of`              | Owill                    | `canonical_user_confirmed` |
| Pântano de Orkrya                     | `west_of`               | Floresta de Kristarr     | `canonical_user_confirmed` |
| Ilha de Skaldheim                     | `politically_linked_to` | Jotungard                | `canonical_written`        |
| Ilha de Skaldheim                     | `east_of`               | Bryndor                  | `canonical_user_confirmed` |
| Ilha de Skaldheim                     | `southeast_of`          | Montanhas de DurunDralin | `canonical_user_confirmed` |
| Ilha de Skaldheim                     | `northeast_of`          | Vila de Gorrukh          | `canonical_user_confirmed` |
| Ilha de Skaldheim                     | `northeast_of`          | Owill                    | `canonical_user_confirmed` |
| Ilha de Solmath                       | `located_in_quadrant`   | sudeste de Barilis       | `canonical_user_confirmed` |
| Ilha de Solmath                       | `east_of`               | Owill                    | `canonical_user_confirmed` |
| Ilha de Solmath                       | `south_of`              | Ilha de Skaldheim        | `canonical_user_confirmed` |
| Vila do Farol                         | `northwest_of`          | Ilha de Solmath          | `canonical_user_confirmed` |
| Ilha de Zarathryn                     | `west_of`               | Owill                    | `canonical_user_confirmed` |
| Ilha de Zarathryn                     | `distant_from`          | continente de Barilis    | `canonical_user_confirmed` |

## 6. Estrutura requerida no MAPA-CONTINENTAL.json

O JSON continua sendo referência espacial derivada e deve preservar sua
estrutura visual existente.

Adicionar ou atualizar uma seção topológica com:

- `schema_version`;
- `map_metadata.display_orientation: "north_up"`;
- `map_metadata.cardinal_precision: "approximate"`;
- `map_metadata.inference_rules` com todas as derivações desativadas;
- entidades canônicas;
- aliases históricos apenas quando autorizados;
- relações topológicas;
- anotações de evento;
- entidades cartográficas sem página em `world/`.

Cada relação deve informar:

```json
{
  "subject_id": "exemplo",
  "predicate": "north_of",
  "object_id": "outro-exemplo",
  "precision": "approximate",
  "source_status": "canonical_user_confirmed",
  "may_derive": false
}
```

A Feira dos Pactos Perdidos deve aparecer em `annotations` como
`event_annotation`, sem coordenada numérica e sem criar vilarejo nomeado.

Não criar entidades ativas de world nesta etapa para Faeryl, Torre de Eldrin,
Elum’Thar, Vertumbra, Orkrya, Zarathryn, Skaldheim ou Solmath. Elas podem
existir somente como referências no JSON, classificadas como entidades
cartográficas.

## 7. Sincronização documental obrigatória

A atualização deve corrigir, quando estiverem em conflito, apenas os documentos
ativos listados no manifesto de fontes e os documentos migrados afetados.

Itens obrigatórios:

1. Owill no sudoeste de Irtuman, próximo da costa sul continental.
2. DurunDralin como faixa norte-central dentro da macro-região Central.
3. Forte Abandonado como único nome ativo.
4. Feira dos Pactos Perdidos como único nome ativo e evento próximo às Torres de
   Marfim.
5. Remoção de qualquer Atalaia dos Pactos Proibidos como entidade ativa.
6. Ossuário das Marés como marco costeiro na transição Centro–Sul, sem soberania
   de Irtuman.
7. Vale, Elanor, Hollowmist, Gorrukh e Bosque conforme as relações da seção 5.2.
8. Padronização de Faeryl, Elum’Thar, Elanor, Silverglen e Solmath.

## 8. Escopo excluído

Este guia não autoriza:

- iniciar a Fase 2 do Sul;
- criar páginas novas em `world/` para entidades cartográficas ainda não
  migradas;
- aprofundar lore;
- criar novos topônimos;
- renomear fontes históricas;
- apagar fontes brutas;
- alterar `MAPA-CONTINENTAL.png`;
- criar rotas, portos, facções, distâncias ou coordenadas numéricas.
