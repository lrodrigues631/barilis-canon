# Auditoria Geográfica de Consistência

## 1. Escopo e hierarquia de fontes

Esta auditoria inventaria entidades geográficas, compara fontes e sinaliza
lacunas antes da Fase 2. Ela não migra locais, não cria cânon novo e não resolve
conflitos canônicos.

A hierarquia usada nesta leitura é:

1. `world/public/index.md` para geografia macro, clima e tom;
2. fontes consolidadas ativas dos reinos e arquivos já migrados para `world/`;
3. `sources/outros-lugares.md` como fonte ativa para lugares menores;
4. `sources/MAPA-CONTINENTAL.json` e `sources/MAPA-CONTINENTAL.png` apenas como
   apoio visual e analítico subordinado ao cânon escrito.

Nenhuma divergência visual altera automaticamente o cânon escrito. Toda
divergência deve ser registrada para revisão humana antes de qualquer migração
ou ajuste de fonte.

## Norte

| Entidade                         | Tipo                 | Posição canônica atual                                                                                  | Fonte principal                                          | Referência no mapa                             | Destino futuro esperado                                                | Situação                     |
| -------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------- |
| Aurathil                         | Reino                | Norte de Barilis                                                                                        | `world/public/geography/north/realms/aurathil/index.md`  | Noroeste                                       | Já migrado em `world/public/geography/north/realms/aurathil/index.md`  | confirmado                   |
| Jotungard                        | Reino                | Norte de Barilis, montanhas frias                                                                       | `world/public/geography/north/realms/jotungard/index.md` | Nordeste                                       | Já migrado em `world/public/geography/north/realms/jotungard/index.md` | confirmado                   |
| Vaelyndor                        | Reino costeiro menor | Oeste de Aurathil, próximo à costa                                                                      | `sources/outros-lugares.md`                              | Reino de Vaelyndor, vizinho visual de Aurathil | `world/public/geography/north/places/vaelyndor/`                       | pendente de fonte dedicada   |
| Floresta de Sharpentrees         | Floresta             | Sul extremo das terras frias, entre Aurathil e Jotungard                                                | `sources/outros-lugares.md`                              | Norte-central, entre Aurathil e Jotungard      | `world/public/geography/north/places/floresta-de-sharpentrees/`        | pendente de fonte dedicada   |
| Fenrir's Hollow                  | Vila                 | Florestas ao norte de Jotungard                                                                         | `sources/outros-lugares.md`                              | Marco próximo de Sharpentrees                  | `world/public/geography/north/places/fenrirs-hollow/`                  | pendente de fonte dedicada   |
| Silverglen                       | Vila                 | Vale ao norte das Montanhas de DurunDralin                                                              | `sources/outros-lugares.md`                              | Vale de Silverglen                             | `world/public/geography/north/places/silverglen/`                      | variação de rótulo           |
| Emberfall                        | Vila                 | Lado leste das Vilas Gêmeas de Aurathil, à beira-mar e nas fronteiras de Sharpentrees                   | `sources/outros-lugares.md`                              | Vila de Emberfall                              | `world/public/geography/north/places/emberfall/`                       | pendente de fonte dedicada   |
| Everbright                       | Vila                 | Lado oeste das Vilas Gêmeas de Aurathil; não é reino independente                                       | `sources/outros-lugares.md`                              | Vila de Everbright                             | `world/public/geography/north/places/everbright/`                      | confirmado                   |
| Dawnwood                         | Vila                 | Vila florestal ao sul de Aurathil                                                                       | `sources/outros-lugares.md`                              | Vila de Dawnwood                               | `world/public/geography/north/places/dawnwood/`                        | pendente de fonte dedicada   |
| Águas de Uldain                  | Local natural        | Norte de Barilis; marco em Sharpentrees no compilado e local próprio consolidado em `sources/uldain.md` | `sources/uldain.md`                                      | As Águas de Uldain                             | `world/public/geography/north/places/aguas-de-uldain/`                 | pendente de fonte dedicada   |
| Os Rostos de Pedra               | Marco natural        | Norte, associados a Sharpentrees e passagens para montanhas de Jotungard                                | `sources/outros-lugares.md`                              | Os Rostos de Pedra próximos de Jotungard       | `world/public/geography/north/places/rostos-de-pedra/`                 | pendente de fonte dedicada   |
| Floresta Dourada de Vaely        | Marco visual         | Não confirmada em fonte escrita consultada                                                              | `sources/MAPA-CONTINENTAL.json`                          | Marco próximo de Aurathil                      | A definir após confirmação escrita                                     | pendente de decisão canônica |
| Ruínas da Torre de Eldrin        | Marco visual         | Não confirmada em fonte escrita consultada                                                              | `sources/MAPA-CONTINENTAL.json`                          | Marco próximo de Aurathil                      | A definir após confirmação escrita                                     | pendente de decisão canônica |
| Ruínas de Elum'Thar / Ellum'Thar | Ruínas               | Em Sharpentrees como Ruínas de Elum'Thar                                                                | `sources/outros-lugares.md`                              | Ruínas de Ellum'Thar                           | `world/public/geography/north/places/ruinas-de-elumthar/`              | variação de rótulo           |
| O Bosque Sombrio                 | Bosque               | Setor denso de Sharpentrees                                                                             | `sources/outros-lugares.md`                              | O Bosque Sombrio                               | `world/public/geography/north/places/bosque-sombrio/`                  | pendente de fonte dedicada   |

## Norte-Central

| Entidade                  | Tipo                | Posição canônica atual                                                                        | Fonte principal                                                    | Referência no mapa                                                       | Destino futuro esperado                                                          | Situação                 |
| ------------------------- | ------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------------------ |
| DurunDralin               | Reino               | Faixa de transição entre Norte e Região Central; `north-central` é organização do repositório | `world/public/geography/north-central/realms/durundralin/index.md` | Centro-leste, abaixo de Jotungard; ponte geográfica entre Norte e Centro | Já migrado em `world/public/geography/north-central/realms/durundralin/index.md` | confirmado               |
| Cidadela de Ferro         | Capital subterrânea | Núcleo administrativo e militar de DurunDralin                                                | `world/public/geography/north-central/realms/durundralin/index.md` | Grande fortaleza anã                                                     | Futuro detalhamento interno do reino                                             | fora do escopo da Fase 2 |
| Forjas Eternas            | Local interno       | Complexo de oficinas e câmaras magmáticas de DurunDralin                                      | `world/public/geography/north-central/realms/durundralin/index.md` | Não discriminado no JSON                                                 | Futuro detalhamento interno do reino                                             | fora do escopo da Fase 2 |
| Cavernas de Vidro Estelar | Local interno       | Maravilha conhecida no coração de DurunDralin                                                 | `world/public/geography/north-central/realms/durundralin/index.md` | Não discriminado no JSON                                                 | Futuro detalhamento interno do reino                                             | fora do escopo da Fase 2 |
| Lago das Estrelas         | Marco interno       | Marco conhecido nas Cavernas de Vidro Estelar                                                 | `world/public/geography/north-central/realms/durundralin/index.md` | Não discriminado no JSON                                                 | Futuro detalhamento interno do reino                                             | fora do escopo da Fase 2 |
| Aldeias Montanhesas       | Assentamentos       | Postos comerciais nas encostas de DurunDralin                                                 | `world/public/geography/north-central/realms/durundralin/index.md` | Não discriminado no JSON                                                 | Futuro detalhamento interno do reino                                             | fora do escopo da Fase 2 |

## Centro

| Entidade                                           | Tipo             | Posição canônica atual                                                                            | Fonte principal                                            | Referência no mapa                                           | Destino futuro esperado                                                              | Situação                     |
| -------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------- |
| Durnvale                                           | Reino            | Região Central, ao norte de Thalendor                                                             | `world/public/geography/central/realms/durnvale/index.md`  | Centro-oeste, acima de Thalendor                             | Já migrado em `world/public/geography/central/realms/durnvale/index.md`              | confirmado                   |
| Thalendor                                          | Reino            | Região Central, ao sul da Ponte e da Garganta de Thal'Zir                                         | `world/public/geography/central/realms/thalendor/index.md` | Centro-oeste, ao sul de Durnvale                             | Já migrado em `world/public/geography/central/realms/thalendor/index.md`             | confirmado                   |
| Ponte de Thal'Zir                                  | Travessia        | Conecta Thalendor a Durnvale; controle de Durnvale                                                | `world/public/geography/central/realms/thalendor/index.md` | Interface visual Durnvale-Thalendor via Garganta de Thal'Zir | `world/public/geography/central/places/ponte-de-thalzir/`                            | confirmado                   |
| Garganta de Thal'Zir                               | Marco geográfico | Fenda sob a ponte, passagem para os Infernos e origem dos tieflings                               | `world/public/geography/central/realms/thalendor/index.md` | A Garganta de Thal'Zir                                       | `world/public/geography/central/places/garganta-de-thalzir/`                         | confirmado                   |
| Estreito das Mil Correntes                         | Estreito         | Região Central, vinculado a Durnvale e DurunDralin                                                | `world/public/index.md`                                    | Não listado como entidade principal do JSON                  | `world/public/geography/seas-and-islands/seas/estreito-das-mil-correntes/`           | pendente de fonte dedicada   |
| Forte da Costa Rochosa / Forte Abandonado da Costa | Ruínas costeiras | Oeste de Durnvale/Costa Rochosa; nome em divergência                                              | `world/public/geography/central/realms/durnvale/index.md`  | O Forte Abandonado                                           | `world/public/geography/central/places/forte-da-costa-rochosa/` ou destino a decidir | pendente de decisão canônica |
| Bryndor                                            | Reino            | Região Central; campos férteis e florestas, a oeste das Montanhas de DurunDralin                  | `sources/outros-lugares.md`                                | Centro-leste, entre DurunDralin e Eldewood                   | `world/public/geography/central/realms/bryndor/index.md`                             | pendente de fonte dedicada   |
| Torres de Marfim                                   | Instituição      | Centro de poder arcano da Região Central                                                          | `sources/torres-de-marfim.md`                              | Próximas de Thalendor                                        | `world/public/institutions/torres-de-marfim/`                                        | fora do escopo da Fase 2     |
| Vale dos Últimos Suspiros                          | Marco regional   | Região Central, citado no índice como local relevante                                             | `world/public/index.md`                                    | Não discriminado no JSON                                     | `world/public/geography/central/places/vale-dos-ultimos-suspiros/`                   | pendente de fonte dedicada   |
| Hollowmist                                         | Vilarejo         | Centro-sul, em pântano com névoa permanente                                                       | `sources/outros-lugares.md`                                | Centro-sul, abaixo de Thalendor                              | `world/public/geography/central/places/hollowmist/`                                  | pendente de fonte dedicada   |
| Santuário do Vento / Santuário do Vento Eterno     | Marco            | Entre Hollowmist e o sul como Santuário do Vento                                                  | `sources/outros-lugares.md`                                | Santuário do Vento Eterno                                    | `world/public/geography/central/places/santuario-do-vento/`                          | variação de rótulo           |
| Floresta Negra de Eldewood                         | Floresta         | Região Central, densa e parcialmente pantanosa                                                    | `sources/outros-lugares.md`                                | Centro-sudeste                                               | `world/public/geography/central/places/eldewood/`                                    | pendente de fonte dedicada   |
| Vila Gorrukh                                       | Vila             | Sudoeste de Eldewood                                                                              | `sources/outros-lugares.md`                                | Próxima de Eldewood                                          | `world/public/geography/central/places/gorrukh/`                                     | pendente de fonte dedicada   |
| Ruínas de Varthaal                                 | Ruínas           | Próximas a Bryndor                                                                                | `sources/outros-lugares.md`                                | Marco próximo de Bryndor                                     | `world/public/geography/central/places/ruinas-de-varthaal/`                          | pendente de fonte dedicada   |
| As Torres de Cinza                                 | Ruínas           | Próximas a Eldewood                                                                               | `sources/outros-lugares.md`                                | Marco próximo de Bryndor                                     | `world/public/geography/central/places/torres-de-cinza/`                             | pendente de fonte dedicada   |
| Círculo de Espinhos                                | Marco ritual     | Em Eldewood                                                                                       | `sources/outros-lugares.md`                                | Marco próximo de Eldewood                                    | `world/public/geography/central/places/circulo-de-espinhos/`                         | pendente de fonte dedicada   |
| O Bosque das Sombras Mudas                         | Bosque           | Ao sul de Hollowmist                                                                              | `sources/outros-lugares.md`                                | Marco próximo de Hollowmist                                  | `world/public/geography/central/places/bosque-das-sombras-mudas/`                    | pendente de fonte dedicada   |
| Abismo de Hollowmist                               | Marco            | Sumidouro pantanoso profundo                                                                      | `sources/outros-lugares.md`                                | O Abismo de Hollowmist                                       | `world/public/geography/central/places/abismo-de-hollowmist/`                        | pendente de fonte dedicada   |
| As Covas da Névoa Eterna                           | Grutas           | Litorâneas a sudoeste da Região Central                                                           | `sources/outros-lugares.md`                                | As Covas da Névoa Eterna                                     | `world/public/geography/central/places/covas-da-nevoa-eterna/`                       | pendente de fonte dedicada   |
| Praia/Feira dos Pactos Proibidos                   | Local/evento     | `outros-lugares.md` registra Feira dos Pactos Proibidos; mapa registra Praia dos Pactos Proibidos | `sources/outros-lugares.md`                                | A Praia dos Pactos Proibidos                                 | A definir após revisão de rótulo                                                     | variação de rótulo           |
| Ossuário das Marés                                 | Marco            | Região Sul no índice; próximo de Thalendor no mapa                                                | `world/public/index.md`                                    | O Ossuário das Marés próximo de Thalendor                    | A definir após revisão geográfica                                                    | pendente de decisão canônica |

## Sul

| Entidade                                | Tipo              | Posição canônica atual                                                            | Fonte principal                                        | Referência no mapa                        | Destino futuro esperado                                              | Situação                     |
| --------------------------------------- | ----------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------- | -------------------------------------------------------------------- | ---------------------------- |
| Irtuman                                 | Reino             | Sul de Barilis                                                                    | `world/public/geography/south/realms/irtuman/index.md` | Sul-central                               | Já migrado em `world/public/geography/south/realms/irtuman/index.md` | confirmado                   |
| Owill                                   | Reino-ilha        | Sul, fora da massa continental, em ilha próxima à costa continental da Região Sul | `world/public/geography/south/realms/owill/index.md`   | Sul, ilha próxima à costa continental     | Já migrado em `world/public/geography/south/realms/owill/index.md`   | confirmado                   |
| Porto de Nymarel                        | Porto             | Principal via pública de comércio e contato de Owill com o continente             | `world/public/geography/south/realms/owill/index.md`   | Não discriminado no JSON                  | Futuro detalhamento interno de Owill                                 | fora do escopo da Fase 2     |
| Arquipélagos de Thalanor e Lethiriel    | Arquipélagos      | Parte do reino de Owill                                                           | `world/public/geography/south/realms/owill/index.md`   | Não discriminados no JSON                 | Futuro detalhamento interno de Owill                                 | fora do escopo da Fase 2     |
| A Grande Árvore de Owill                | Centro cerimonial | Marco interno de Owill                                                            | `world/public/geography/south/realms/owill/index.md`   | Distinção canônica registrada no JSON     | Futuro detalhamento interno de Owill                                 | fora do escopo da Fase 2     |
| Floresta de Kristarr                    | Floresta          | Ao sul de Irtuman, antes das montanhas e do Deserto de Knull                      | `sources/outros-lugares.md`                            | Ao sul de Irtuman                         | `world/public/geography/south/places/floresta-de-kristarr/`          | pendente de fonte dedicada   |
| A Grande Árvore da Floresta de Kristarr | Marco natural     | Marco externo a Owill, no coração da Floresta de Kristarr                         | `sources/outros-lugares.md`                            | Distinção canônica registrada no JSON     | `world/public/geography/south/places/grande-arvore-de-kristarr/`     | pendente de fonte dedicada   |
| Deserto de Knull                        | Deserto           | Sul, abaixo/ao sudeste de Irtuman e próximo de Kristarr                           | `world/public/index.md`                                | Sudeste de Irtuman, abaixo de Kristarr    | `world/public/geography/south/places/deserto-de-knull/`              | pendente de fonte dedicada   |
| Pântano de Orkrya                       | Pântano           | Sul de Barilis; associado ao Pântano Verde                                        | `world/public/index.md`                                | Pântano de Orkrya                         | `world/public/geography/south/places/pantano-de-orkrya/`             | pendente de fonte dedicada   |
| Pântano Verde                           | Assentamento      | Assentamento orc no coração do Pântano de Orkrya                                  | `sources/outros-lugares.md`                            | Pântano de Orkrya                         | `world/public/geography/south/places/pantano-verde/`                 | pendente de fonte dedicada   |
| Vila do Farol                           | Vila              | Extremo sudeste, próxima ao Deserto de Knull                                      | `sources/outros-lugares.md`                            | Marco próximo ao Deserto de Knull         | `world/public/geography/south/places/vila-do-farol/`                 | pendente de fonte dedicada   |
| Vila Reina                              | Vila              | Extremo sul, próxima ao Deserto de Knull                                          | `sources/outros-lugares.md`                            | Marco próximo ao Deserto de Knull         | `world/public/geography/south/places/vila-reina/`                    | pendente de fonte dedicada   |
| Prisão de Vertumbra                     | Marco             | Sul, citada no índice e próxima de Irtuman no mapa                                | `world/public/index.md`                                | Prisão de Vertumbra próxima de Irtuman    | `world/public/geography/south/places/prisao-de-vertumbra/`           | pendente de fonte dedicada   |
| Ossuário das Marés                      | Marco             | Sul no índice; mapa também o aproxima de Thalendor                                | `world/public/index.md`                                | O Ossuário das Marés próximo de Thalendor | A definir após revisão geográfica                                    | pendente de decisão canônica |

## Mares e Ilhas

| Entidade                    | Tipo     | Posição canônica atual                                | Fonte principal                                          | Referência no mapa                                                  | Destino futuro esperado                                                     | Situação                   |
| --------------------------- | -------- | ----------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------- |
| Mar de Sangue               | Mar      | Vínculos com Irtuman, Zarathryn e artefatos de Zareth | `world/public/index.md`                                  | Não discriminado no JSON                                            | `world/public/geography/seas-and-islands/seas/mar-de-sangue/`               | pendente de fonte dedicada |
| Mar Sombrio                 | Mar      | Vínculos com Aurathil e Fenrir's Hollow               | `world/public/index.md`                                  | Não discriminado no JSON                                            | `world/public/geography/seas-and-islands/seas/mar-sombrio/`                 | pendente de fonte dedicada |
| Estreito das Mil Correntes  | Estreito | Vínculos com Durnvale e DurunDralin                   | `world/public/index.md`                                  | Indireto por Durnvale                                               | `world/public/geography/seas-and-islands/seas/estreito-das-mil-correntes/`  | pendente de fonte dedicada |
| Mar das Tempestades Eternas | Mar      | Vínculos com Skaldheim, Jotungard e Thalos            | `world/public/index.md`                                  | Indireto por Ilha Skaldheim                                         | `world/public/geography/seas-and-islands/seas/mar-das-tempestades-eternas/` | pendente de fonte dedicada |
| Azul Profundo               | Mar      | Vínculos com Owill, Solmath e Zarathryn               | `world/public/index.md`                                  | Indireto por Owill e Zarathryn                                      | `world/public/geography/seas-and-islands/seas/azul-profundo/`               | pendente de fonte dedicada |
| Ilha de Zarathryn           | Ilha     | Ilha de pirataria, contrabando e mercado negro        | `world/public/index.md`                                  | Sudoeste marítimo, a oeste de Owill                                 | `world/public/geography/seas-and-islands/islands/zarathryn/`                | pendente de fonte dedicada |
| Solmath                     | Ilha     | Polo de magia elemental e neutralidade                | `world/public/index.md`                                  | Não discriminado no JSON                                            | `world/public/geography/seas-and-islands/islands/solmath/`                  | pendente de fonte dedicada |
| Ilha de Skaldheim           | Ilha     | Centro marítimo subordinado a Jotungard               | `world/public/geography/north/realms/jotungard/index.md` | Leste/sudeste marítimo; distante visualmente do núcleo de Jotungard | `world/public/geography/seas-and-islands/islands/skaldheim/`                | confirmado                 |

## Pontos obrigatórios de verificação

- **Durnvale, Thalendor e Garganta/Ponte de Thal'Zir:** o conteúdo migrado já
  diferencia a Ponte de Thal'Zir, controlada por Durnvale, da Garganta de
  Thal'Zir sob a ponte. Situação: `confirmado`.
- **Forte da Costa Rochosa versus Forte Abandonado da Costa:** Durnvale usa
  Forte da Costa Rochosa e Forte Abandonado da Costa; o mapa usa O Forte
  Abandonado. Situação: `pendente de decisão canônica`.
- **Aurathil, Vaelyndor, Sharpentrees, Emberfall, Everbright e Dawnwood:**
  Aurathil está migrado; Vaelyndor, Sharpentrees, Emberfall, Everbright e
  Dawnwood dependem de fontes dedicadas futuras. Everbright está confirmado como
  vila, não reino.
- **Águas de Uldain:** há fonte consolidada própria em `sources/uldain.md`, mas
  a migração ainda está pendente.
- **Jotungard, Frostholm, Fiorde de Skarlheim e Ilha de Skaldheim:** Jotungard
  está migrado; Frostholm permanece externa à estrutura interna do reino; o
  Fiorde de Skarlheim e a Ilha de Skaldheim estão identificados, mas podem
  receber detalhamento futuro.
- **DurunDralin como faixa Norte-Centro:** confirmado como faixa de transição
  Norte-Centro; `north-central` é organização do repositório, não quarta
  macroregião.
- **Bryndor:** identificado em índice, mapa e `outros-lugares.md`, mas ainda sem
  fonte dedicada migrada.
- **Hollowmist e Santuário do Vento/Santuário do Vento Eterno:** Hollowmist está
  identificado; a variação do santuário é rótulo pendente.
- **Eldewood, Gorrukh e marcos associados:** todos identificados em
  `outros-lugares.md` e no mapa, sem fontes dedicadas.
- **Irtuman, Kristarr, Knull, Orkrya, Vila do Farol e Vila Reina:** Irtuman está
  migrado; os demais dependem de fontes dedicadas. Kristarr não integra Owill.
- **Owill, Porto de Nymarel, Thalanor e Lethiriel:** Owill está migrado; porto e
  arquipélagos permanecem como elementos internos, fora do escopo de migração de
  lugares menores nesta auditoria.
- **Duas Grandes Árvores:** A Grande Árvore de Owill é centro cerimonial interno
  de Owill; A Grande Árvore da Floresta de Kristarr é marco externo em Kristarr.
- **Ilha de Zarathryn:** citada no índice e no mapa, ainda sem fonte dedicada.
- **Mares, estreitos e ilhas:** os mares e ilhas do índice estão identificados,
  mas ainda precisam de fontes dedicadas para migração.

## Divergências e lacunas

## Divergências que exigem decisão

| Item                                                    | Fontes em conflito ou ausência de fonte                                                                                         | Impacto                                                    | Recomendação de próximo passo                                                           |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Forte da Costa Rochosa versus Forte Abandonado da Costa | `world/public/geography/central/realms/durnvale/index.md`, `sources/#2.1-reino-de-durnvale.md`, `sources/MAPA-CONTINENTAL.json` | Afeta título, aliases, slug e eventual documento de lugar. | Revisar se são o mesmo local, variações históricas ou locais distintos antes de migrar. |
| Ossuário das Marés                                      | `world/public/index.md` lista no Sul; mapa o aproxima de Thalendor.                                                             | Afeta macroregião e destino futuro.                        | Confirmar posição canônica antes de criar arquivo de lugar.                             |
| Praia/Feira dos Pactos Proibidos                        | `sources/outros-lugares.md` registra Feira dos Pactos Proibidos; mapa registra Praia dos Pactos Proibidos.                      | Afeta tipo de entidade, nome e possível slug.              | Verificar se o rótulo visual indica lugar, evento ou variação gráfica.                  |

## Variações de rótulo sem decisão imediata

| Item                                                | Fontes em conflito ou ausência de fonte                       | Impacto                                     | Recomendação de próximo passo                                    |
| --------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| Santuário do Vento versus Santuário do Vento Eterno | `sources/outros-lugares.md` e `sources/MAPA-CONTINENTAL.json` | Baixo a médio; afeta alias e título futuro. | Preservar ambos como possíveis aliases até auditoria específica. |
| Ruínas de Elum'Thar versus Ruínas de Ellum'Thar     | `sources/outros-lugares.md` e `sources/MAPA-CONTINENTAL.json` | Baixo a médio; afeta grafia e slug.         | Definir grafia canônica antes de migração.                       |
| Silverglen versus Vale de Silverglen                | `sources/outros-lugares.md` e `sources/MAPA-CONTINENTAL.json` | Baixo; afeta título ou alias.               | Tratar como possível rótulo visual do vale associado à vila.     |
| Everbright como vila                                | `sources/outros-lugares.md`, mapa e divergência já registrada | Baixo após decisão: não criar reino.        | Migrar como vila ligada a Emberfall quando chegar ao lote Norte. |

## Locais sem fonte dedicada

| Item                              | Fontes em conflito ou ausência de fonte                          | Impacto                                                 | Recomendação de próximo passo                                            |
| --------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| Bryndor                           | Índice, mapa e `sources/outros-lugares.md` identificam o reino.  | Alto para Fase 2 central, pois é reino/centro de poder. | Criar fonte dedicada ou migrar a partir do compilado com revisão humana. |
| Floresta de Sharpentrees          | Índice, mapa e `sources/outros-lugares.md`.                      | Alto para o Norte.                                      | Migrar como lugar maior do Norte após decidir sublugares.                |
| Águas de Uldain                   | Índice, mapa, `sources/outros-lugares.md` e `sources/uldain.md`. | Alto, mas com fonte consolidada pronta.                 | Priorizar split/migração de `sources/uldain.md`.                         |
| Floresta Negra de Eldewood        | Índice, mapa e `sources/outros-lugares.md`.                      | Médio para Centro.                                      | Migrar como floresta/lugar regional.                                     |
| Hollowmist                        | Índice, mapa e `sources/outros-lugares.md`.                      | Médio para Centro.                                      | Migrar após resolver alias do Santuário do Vento.                        |
| Vila Gorrukh                      | Índice, mapa e `sources/outros-lugares.md`.                      | Médio para Centro.                                      | Migrar como vila ligada a Eldewood/Bryndor.                              |
| Floresta de Kristarr              | Índice, mapa e `sources/outros-lugares.md`.                      | Alto para Sul e distinção de Owill.                     | Migrar como lugar do Sul, mantendo separação de Owill.                   |
| Deserto de Knull                  | Índice, mapa e `sources/outros-lugares.md`.                      | Médio para Sul.                                         | Migrar com Vila do Farol e Vila Reina como referências próximas.         |
| Pântano de Orkrya / Pântano Verde | Índice, mapa e `sources/outros-lugares.md`.                      | Médio para Sul.                                         | Decidir se Pântano Verde será sublocal ou entrada própria do pântano.    |
| Mares e ilhas do índice           | `world/public/index.md` e mapa para parte das ilhas.             | Médio para navegação futura.                            | Criar lote próprio de mares e ilhas após regiões terrestres.             |

## Entidades visuais do mapa ainda não confirmadas em fonte escrita

| Item                         | Fontes em conflito ou ausência de fonte                                           | Impacto                                            | Recomendação de próximo passo                                            |
| ---------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| Floresta Dourada de Vaely    | Aparece no JSON do mapa; não localizada nas fontes escritas consultadas.          | Não pode ser migrada como cânon.                   | Confirmar em fonte escrita ou registrar como rótulo visual não canônico. |
| Ruínas da Torre de Eldrin    | Aparece no JSON do mapa; não localizada nas fontes escritas consultadas.          | Não pode ser migrada como cânon.                   | Confirmar em fonte escrita antes de qualquer arquivo.                    |
| A Praia dos Pactos Proibidos | Aparece no JSON do mapa; `outros-lugares.md` registra Feira dos Pactos Proibidos. | Pode ser variação de rótulo ou entidade diferente. | Revisar contra imagem e fontes antes de definir nome.                    |

## Roteiro para a Fase 2

1. Norte
   - Vaelyndor
   - Floresta de Sharpentrees
   - Fenrir's Hollow
   - Silverglen
   - Emberfall
   - Everbright
   - Dawnwood
   - Águas de Uldain
   - Os Rostos de Pedra

2. Centro
   - Bryndor
   - Ponte de Thal'Zir
   - Garganta de Thal'Zir
   - Hollowmist
   - Floresta Negra de Eldewood
   - Vila Gorrukh
   - Ruínas de Varthaal
   - As Torres de Cinza
   - Círculo de Espinhos
   - O Bosque das Sombras Mudas
   - Abismo de Hollowmist
   - As Covas da Névoa Eterna

3. Sul
   - Floresta de Kristarr
   - A Grande Árvore da Floresta de Kristarr
   - Deserto de Knull
   - Pântano de Orkrya
   - Pântano Verde
   - Vila do Farol
   - Vila Reina
   - Prisão de Vertumbra

4. Mares e Ilhas
   - Mar de Sangue
   - Mar Sombrio
   - Estreito das Mil Correntes
   - Mar das Tempestades Eternas
   - Azul Profundo
   - Ilha de Zarathryn
   - Solmath
   - Ilha de Skaldheim
