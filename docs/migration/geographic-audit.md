# Auditoria Geográfica de Consistência

## 1. Escopo e hierarquia de fontes

Esta auditoria é um documento vivo de acompanhamento geográfico durante a
migração. Ela registra entidades migradas, pendências, divergências e limites de
escopo. Ela não migra locais, não cria cânon novo e não resolve conflitos
canônicos.

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

| Entidade                         | Tipo                 | Posição canônica atual                                                                                     | Fonte principal                                          | Referência no mapa                             | Destino futuro esperado                                                                                                                                                                                                                                                                                                     | Situação                     |
| -------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Aurathil                         | Reino                | Norte de Barilis                                                                                           | `world/public/geography/north/realms/aurathil/index.md`  | Noroeste                                       | Já migrado em `world/public/geography/north/realms/aurathil/index.md`                                                                                                                                                                                                                                                       | confirmado                   |
| Jotungard                        | Reino                | Norte de Barilis, montanhas frias                                                                          | `world/public/geography/north/realms/jotungard/index.md` | Nordeste                                       | Já migrado em `world/public/geography/north/realms/jotungard/index.md`                                                                                                                                                                                                                                                      | confirmado                   |
| Vaelyndor                        | Reino costeiro menor | Oeste de Aurathil, próximo à costa                                                                         | `sources/vaelyndor.md`                                   | Reino de Vaelyndor, vizinho visual de Aurathil | Migrado e confirmado em `world/public/geography/north/realms/vaelyndor/index.md`                                                                                                                                                                                                                                            | migrado e confirmado         |
| Floresta de Sharpentrees         | Floresta             | Sul extremo das terras frias, entre Aurathil e Jotungard                                                   | `sources/floresta-de-sharpentrees.md`                    | Norte-central, entre Aurathil e Jotungard      | Migração concluída em `world/public/geography/north/places/floresta-de-sharpentrees/index.md`, `world/private/geography/north/places/floresta-de-sharpentrees/segredos-da-nevoa.md`, `world/private/organizations/sussurros-da-floresta.md` e `world/private/npcs/north/sharpentrees/`; Uldain permanece reservada à Fase 3 | migração concluída           |
| Fenrir's Hollow                  | Vila                 | Florestas ao norte de Jotungard                                                                            | `sources/outros-lugares.md`                              | Marco próximo de Sharpentrees                  | Migrado como página pública mínima em `world/public/geography/north/places/fenrirs-hollow/index.md`                                                                                                                                                                                                                         | migrado como página mínima   |
| Silverglen                       | Vila                 | Vale ao norte das Montanhas de DurunDralin                                                                 | `sources/outros-lugares.md`                              | Vale de Silverglen                             | Migrado como página pública mínima em `world/public/geography/north/places/silverglen/index.md`; Vale de Silverglen permanece apenas como variação visual do mapa                                                                                                                                                           | migrado como página mínima   |
| Emberfall                        | Vila                 | Lado leste das Vilas Gêmeas de Aurathil, à beira-mar e nas fronteiras de Sharpentrees                      | `sources/outros-lugares.md`                              | Vila de Emberfall                              | Migrado como página pública mínima em `world/public/geography/north/places/emberfall/index.md`                                                                                                                                                                                                                              | migrado como página mínima   |
| Everbright                       | Vila                 | Lado oeste das Vilas Gêmeas de Aurathil; não é reino independente                                          | `sources/outros-lugares.md`                              | Vila de Everbright                             | Migrado como página pública mínima em `world/public/geography/north/places/everbright/index.md`; vila, não reino                                                                                                                                                                                                            | migrado como página mínima   |
| Frostholm                        | Vila                 | Junto ao Fiorde de Skarlheim; porto de ligação externo à estrutura interna de Jotungard                    | `sources/outros-lugares.md`                              | Frostholm                                      | Migrado como página pública mínima em `world/public/geography/north/places/frostholm/index.md`                                                                                                                                                                                                                              | migrado como página mínima   |
| Dawnwood                         | Vila                 | Vila florestal ao sul de Aurathil                                                                          | `sources/outros-lugares.md`                              | Vila de Dawnwood                               | Migrado como página pública mínima em `world/public/geography/north/places/dawnwood/index.md`                                                                                                                                                                                                                               | migrado como página mínima   |
| Águas de Uldain                  | Local natural        | Norte de Barilis, no coração da Floresta de Sharpentrees; fonte consolidada própria em `sources/uldain.md` | `sources/uldain.md`                                      | As Águas de Uldain                             | Fase 3 — migração com separação entre conteúdo público, segredo permanente de mestre e material tático                                                                                                                                                                                                                      | fora do escopo da Fase 2     |
| Os Rostos de Pedra               | Marco natural        | Norte, associados a Sharpentrees e passagens para montanhas de Jotungard                                   | `sources/floresta-de-sharpentrees.md`                    | Os Rostos de Pedra próximos de Jotungard       | Coberto pela documentação de Sharpentrees; sem página própria planejada nesta etapa                                                                                                                                                                                                                                         | coberto por Sharpentrees     |
| Floresta Dourada de Vaely        | Marco visual         | Não confirmada em fonte escrita consultada                                                                 | `sources/MAPA-CONTINENTAL.json`                          | Marco próximo de Aurathil                      | A definir após confirmação escrita                                                                                                                                                                                                                                                                                          | pendente de decisão canônica |
| Ruínas da Torre de Eldrin        | Marco visual         | Não confirmada em fonte escrita consultada                                                                 | `sources/MAPA-CONTINENTAL.json`                          | Marco próximo de Aurathil                      | A definir após confirmação escrita                                                                                                                                                                                                                                                                                          | pendente de decisão canônica |
| Ruínas de Elum'Thar / Ellum'Thar | Ruínas               | Em Sharpentrees como Ruínas de Elum'Thar; Ellum'Thar é apenas variação visual do mapa                      | `sources/floresta-de-sharpentrees.md`                    | Ruínas de Ellum'Thar                           | Coberto pela documentação de Sharpentrees; sem página própria planejada nesta etapa                                                                                                                                                                                                                                         | coberto por Sharpentrees     |
| O Bosque Sombrio                 | Bosque               | Setor denso de Sharpentrees                                                                                | `sources/floresta-de-sharpentrees.md`                    | O Bosque Sombrio                               | Coberto pela documentação de Sharpentrees; sem página própria planejada nesta etapa                                                                                                                                                                                                                                         | coberto por Sharpentrees     |

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

| Entidade                                           | Tipo             | Posição canônica atual                                                                                                    | Fonte principal                                            | Referência no mapa                                           | Destino futuro esperado                                                                                                                                                 | Situação                     |
| -------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Durnvale                                           | Reino            | Região Central, ao norte de Thalendor                                                                                     | `world/public/geography/central/realms/durnvale/index.md`  | Centro-oeste, acima de Thalendor                             | Já migrado em `world/public/geography/central/realms/durnvale/index.md`                                                                                                 | confirmado                   |
| Thalendor                                          | Reino            | Região Central, ao sul da Ponte e da Garganta de Thal'Zir; a noroeste da Floresta Negra de Eldewood                       | `world/public/geography/central/realms/thalendor/index.md` | Centro-oeste, ao sul de Durnvale                             | Já migrado em `world/public/geography/central/realms/thalendor/index.md`                                                                                                | confirmado                   |
| Ponte de Thal'Zir                                  | Travessia        | Conecta Thalendor a Durnvale; controle de Durnvale                                                                        | `world/public/geography/central/realms/thalendor/index.md` | Interface visual Durnvale-Thalendor via Garganta de Thal'Zir | `world/public/geography/central/places/ponte-de-thalzir/`                                                                                                               | confirmado                   |
| Garganta de Thal'Zir                               | Marco geográfico | Fenda sob a ponte, passagem para os Infernos e origem dos tieflings                                                       | `world/public/geography/central/realms/thalendor/index.md` | A Garganta de Thal'Zir                                       | `world/public/geography/central/places/garganta-de-thalzir/`                                                                                                            | confirmado                   |
| Estreito das Mil Correntes                         | Estreito         | Região Central, vinculado a Durnvale e DurunDralin                                                                        | `world/public/index.md`                                    | Não listado como entidade principal do JSON                  | `world/public/geography/seas-and-islands/seas/estreito-das-mil-correntes/`                                                                                              | pendente de fonte dedicada   |
| Forte da Costa Rochosa / Forte Abandonado da Costa | Ruínas costeiras | Oeste de Durnvale/Costa Rochosa; nome em divergência                                                                      | `world/public/geography/central/realms/durnvale/index.md`  | O Forte Abandonado                                           | `world/public/geography/central/places/forte-da-costa-rochosa/` ou destino a decidir                                                                                    | pendente de decisão canônica |
| Bryndor                                            | Reino menor      | Região Central; a oeste das Montanhas de DurunDralin; faixa costeira na costa leste do continente                         | `sources/outros-lugares.md`                                | Centro-leste, entre DurunDralin e Eldewood                   | Migrado como reino menor público em `world/public/geography/central/realms/bryndor/index.md`                                                                            | migrado como página mínima   |
| Torres de Marfim                                   | Instituição      | Centro de poder arcano da Região Central; a sudoeste de Thalendor                                                         | `sources/torres-de-marfim.md`                              | Próximas de Thalendor                                        | `world/public/institutions/torres-de-marfim/`                                                                                                                           | fora do escopo da Fase 2     |
| Vale dos Últimos Suspiros                          | Marco regional   | Sudeste de Bryndor, nos pés das Montanhas de DurunDralin, ao norte do Pântano de Elanor                                   | `world/public/index.md`                                    | Não discriminado no JSON                                     | Migrado como página pública mínima em `world/public/geography/central/places/vale-dos-ultimos-suspiros/index.md`                                                        | migrado como página mínima   |
| Pântano de Elanor                                  | Pântano          | Norte de Hollowmist e oeste de Bryndor; Ruínas de Varthaal ficam entre Bryndor e o pântano                                | `sources/outros-lugares.md`                                | Pântano de Elanor                                            | Migrado como página pública mínima em `world/public/geography/central/places/pantano-de-elanor/index.md`                                                                | migrado como página mínima   |
| Hollowmist                                         | Vilarejo         | Centro-sul, em pântano com névoa permanente                                                                               | `sources/outros-lugares.md`                                | Centro-sul, abaixo de Thalendor                              | Migrado como lugar público mínimo em `world/public/geography/central/places/hollowmist/index.md`                                                                        | migrado como página mínima   |
| Santuário do Vento Eterno                          | Marco            | Sudoeste do Abismo de Hollowmist, nos picos ocidentais da Região Central; Santuário do Vento é variação anterior da fonte | `sources/outros-lugares.md`                                | Santuário do Vento Eterno                                    | Migrado como página pública mínima em `world/public/geography/central/places/santuario-do-vento-eterno/index.md`                                                        | migrado como página mínima   |
| Floresta Negra de Eldewood                         | Floresta         | Região Central, densa e parcialmente pantanosa                                                                            | `sources/outros-lugares.md`                                | Centro-sudeste                                               | Migrada como lugar público mínimo em `world/public/geography/central/places/eldewood/index.md`                                                                          | migrado como página mínima   |
| Vila Gorrukh                                       | Vila             | Sudoeste de Eldewood e na costa leste do continente                                                                       | `sources/outros-lugares.md`                                | Próxima de Eldewood                                          | Migrada como lugar público mínimo em `world/public/geography/central/places/gorrukh/index.md`                                                                           | migrado como página mínima   |
| Ruínas de Varthaal                                 | Ruínas           | Entre Bryndor e o Pântano de Elanor; oeste/sudoeste de Bryndor e sudeste do Pântano de Elanor                             | `sources/outros-lugares.md`                                | Marco próximo de Bryndor                                     | Migrado como página pública mínima em `world/public/geography/central/places/ruinas-de-varthaal/index.md`                                                               | migrado como página mínima   |
| As Torres de Cinza                                 | Ruínas           | Sul-sudeste de Bryndor e noroeste de Gorrukh                                                                              | `sources/outros-lugares.md`                                | Marco próximo de Bryndor                                     | Migrado como página pública mínima em `world/public/geography/central/places/torres-de-cinza/index.md`                                                                  | migrado como página mínima   |
| Círculo de Espinhos                                | Marco ritual     | Sul-sudoeste das Torres de Cinza; dentro ou imediatamente ao sul da Floresta Negra de Eldewood                            | `sources/outros-lugares.md`                                | Marco próximo de Eldewood                                    | Migrado como página pública mínima em `world/public/geography/central/places/circulo-de-espinhos/index.md`                                                              | migrado como página mínima   |
| O Bosque das Sombras Mudas                         | Bosque           | Norte e oeste de Hollowmist                                                                                               | `sources/outros-lugares.md`                                | Marco próximo de Hollowmist                                  | Migrado como página pública mínima em `world/public/geography/central/places/bosque-das-sombras-mudas/index.md`                                                         | migrado como página mínima   |
| Abismo de Hollowmist                               | Marco            | Sul de Hollowmist                                                                                                         | `sources/outros-lugares.md`                                | O Abismo de Hollowmist                                       | Migrado como página pública mínima em `world/public/geography/central/places/abismo-de-hollowmist/index.md`                                                             | migrado como página mínima   |
| As Covas da Névoa Eterna                           | Grutas           | Litorâneas a sudoeste da Região Central                                                                                   | `sources/outros-lugares.md`                                | As Covas da Névoa Eterna                                     | Migradas como marco natural público mínimo em `world/public/geography/central/places/covas-da-nevoa-eterna/index.md`                                                    | migrado como página mínima   |
| Feira dos Pactos Perdidos                          | Evento           | Evento em vilarejo itinerante sem nome próprio definido, a sul-sudeste das Torres de Marfim                               | `sources/outros-lugares.md`                                | A Praia dos Pactos Proibidos                                 | Migrada como evento público canônico em `world/public/geography/central/places/feira-dos-pactos-perdidos/index.md`; o vilarejo itinerante permanece sem página separada | migrado como evento público  |
| Ossuário das Marés                                 | Marco            | Região Sul no índice; próximo de Thalendor no mapa                                                                        | `world/public/index.md`                                    | O Ossuário das Marés próximo de Thalendor                    | A definir após revisão geográfica                                                                                                                                       | pendente de decisão canônica |

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
- **Águas de Uldain:** ficam no coração da Floresta de Sharpentrees e possuem
  fonte consolidada própria em `sources/uldain.md`. Sua migração permanece
  reservada à Fase 3, pois exige separação entre lore público, segredos
  permanentes de mestre e material tático.
- **Jotungard, Frostholm, Fiorde de Skarlheim e Ilha de Skaldheim:** Jotungard
  está migrado; Frostholm permanece externa à estrutura interna do reino; o
  Fiorde de Skarlheim e a Ilha de Skaldheim estão identificados, mas podem
  receber detalhamento futuro.
- **DurunDralin como faixa Norte-Centro:** confirmado como faixa de transição
  Norte-Centro; `north-central` é organização do repositório, não quarta
  macroregião.
- **Bryndor:** migrado como reino menor público a partir de
  `sources/outros-lugares.md`, sem conteúdo privado ou desenvolvimento
  adicional.
- **Hollowmist e Santuário do Vento Eterno:** Hollowmist está migrado; Santuário
  do Vento Eterno foi migrado como página pública mínima, com Santuário do Vento
  preservado apenas como variação antiga da fonte.
- **Eldewood, Hollowmist, Gorrukh e marcos internos migrados:** Eldewood,
  Hollowmist, Gorrukh, Vale dos Últimos Suspiros, Pântano de Elanor, Ruínas de
  Varthaal, As Torres de Cinza, Círculo de Espinhos, O Bosque das Sombras Mudas,
  Abismo de Hollowmist, Santuário do Vento Eterno, Feira dos Pactos Perdidos e
  Covas da Névoa Eterna foram migrados como páginas públicas mínimas, sem
  conteúdo privado ou desenvolvimento adicional. O vilarejo itinerante da Feira
  dos Pactos Perdidos permanece sem nome próprio e sem página separada.
- **Irtuman, Kristarr, Knull, Orkrya, Vila do Farol e Vila Reina:** Irtuman está
  migrado; os demais dependem de fontes dedicadas. Kristarr não integra Owill.
- **Owill, Porto de Nymarel, Thalanor e Lethiriel:** Owill está migrado; porto e
  arquipélagos permanecem como elementos internos, fora do escopo de migração de
  lugares menores nesta auditoria.
- **Duas Grandes Árvores:** A Grande Árvore de Owill é centro cerimonial interno
  de Owill; A Grande Árvore da Floresta de Kristarr é marco externo em Kristarr.
- **Ilha de Zarathryn:** citada no índice e no mapa, ainda sem fonte dedicada.
- **Torres de Marfim:** permanece reservada à Fase 3, sem absorção nos arquivos
  públicos mínimos da Região Central.
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

| Item                                            | Fontes em conflito ou ausência de fonte                       | Impacto                              | Recomendação de próximo passo                                    |
| ----------------------------------------------- | ------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------- |
| Ruínas de Elum'Thar versus Ruínas de Ellum'Thar | `sources/outros-lugares.md` e `sources/MAPA-CONTINENTAL.json` | Baixo a médio; afeta grafia e slug.  | Definir grafia canônica antes de migração.                       |
| Silverglen versus Vale de Silverglen            | `sources/outros-lugares.md` e `sources/MAPA-CONTINENTAL.json` | Baixo; afeta título ou alias.        | Tratar como possível rótulo visual do vale associado à vila.     |
| Everbright como vila                            | `sources/outros-lugares.md`, mapa e divergência já registrada | Baixo após decisão: não criar reino. | Migrar como vila ligada a Emberfall quando chegar ao lote Norte. |

## Locais sem fonte dedicada

| Item                              | Fontes em conflito ou ausência de fonte                         | Impacto                                                 | Recomendação de próximo passo                                            |
| --------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| Bryndor                           | Índice, mapa e `sources/outros-lugares.md` identificam o reino. | Alto para Fase 2 central, pois é reino/centro de poder. | Criar fonte dedicada ou migrar a partir do compilado com revisão humana. |
| Floresta de Sharpentrees          | Índice, mapa e `sources/outros-lugares.md`.                     | Alto para o Norte.                                      | Migrar como lugar maior do Norte após decidir sublugares.                |
| Floresta Negra de Eldewood        | Índice, mapa e `sources/outros-lugares.md`.                     | Médio para Centro.                                      | Migrar como floresta/lugar regional.                                     |
| Hollowmist                        | Índice, mapa e `sources/outros-lugares.md`.                     | Médio para Centro.                                      | Migrar após resolver alias do Santuário do Vento.                        |
| Vila Gorrukh                      | Índice, mapa e `sources/outros-lugares.md`.                     | Médio para Centro.                                      | Migrar como vila ligada a Eldewood/Bryndor.                              |
| Floresta de Kristarr              | Índice, mapa e `sources/outros-lugares.md`.                     | Alto para Sul e distinção de Owill.                     | Migrar como lugar do Sul, mantendo separação de Owill.                   |
| Deserto de Knull                  | Índice, mapa e `sources/outros-lugares.md`.                     | Médio para Sul.                                         | Migrar com Vila do Farol e Vila Reina como referências próximas.         |
| Pântano de Orkrya / Pântano Verde | Índice, mapa e `sources/outros-lugares.md`.                     | Médio para Sul.                                         | Decidir se Pântano Verde será sublocal ou entrada própria do pântano.    |
| Mares e ilhas do índice           | `world/public/index.md` e mapa para parte das ilhas.            | Médio para navegação futura.                            | Criar lote próprio de mares e ilhas após regiões terrestres.             |

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
   - Os Rostos de Pedra

2. Centro
   - Ponte de Thal'Zir
   - Garganta de Thal'Zir
   - Forte da Costa Rochosa / Forte Abandonado da Costa
   - Ossuário das Marés

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

> **Nota de escopo:** Águas de Uldain não integra a Fase 2. Sua migração será
> tratada na Fase 3, junto do conteúdo transversal que exige divisão entre lore
> público, segredos de mestre e material tático.
