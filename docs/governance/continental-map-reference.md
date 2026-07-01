# Continental Map Reference

## Arquivos vinculados

- `sources/MAPA-CONTINENTAL.png`
- `sources/MAPA-CONTINENTAL.json`

## Função

O mapa continental e seu JSON estruturado são referências visuais auxiliares
para a geografia macro de Barilis.

Eles podem ser usados para:

- posição macro de reinos, ilhas, florestas e marcos;
- proximidade visual e adjacência ampla;
- auditoria de rótulos, duplicidades e possíveis conflitos espaciais.

## Hierarquia

Em caso de conflito, a precedência é:

1. `docs/governance/continental-topology-guide.md` para a sincronização
   topológica vigente;
2. `world/public/index.md` para geografia macro, clima e tom;
3. fontes canônicas consolidadas ativas;
4. documentos dedicados já migrados para `world/public/` ou `world/private/`;
5. `sources/MAPA-CONTINENTAL.json`;
6. `sources/MAPA-CONTINENTAL.png`.

O JSON não é fonte independente de lore. Ele é um índice espacial derivado do
mapa e de decisões canônicas aprovadas.

## Limites de uso

O mapa e o JSON não definem automaticamente:

- fronteiras precisas;
- distâncias;
- duração de viagens;
- rotas;
- controle territorial interno;
- segredos de mestre;
- novos locais, facções, eventos ou relações.

Divergências visuais devem ser registradas para auditoria. Elas não alteram o
cânon escrito sem decisão explícita.

## Decisões espaciais já confirmadas

- Owill é um reino-ilha do Sul, a sudoeste de Irtuman e próximo da costa
  continental da Região Sul.
- A Grande Árvore de Owill é um centro cerimonial interno do reino.
- A Grande Árvore da Floresta de Kristarr é outro marco natural, externo a
  Owill.
- Frostholm é externa à estrutura interna de Jotungard.
- DurunDralin pertence à macro-região Central e ocupa a faixa geográfica
  norte-central; `north-central` é organização do repositório, não quarta
  macro-região.
- O Ossuário das Marés é marco costeiro da transição Centro-Sul, sem relação de
  soberania com Irtuman.
- A Feira dos Pactos Perdidos é evento itinerante próximo às Torres de Marfim,
  não praia, vila, atalaia ou ponto fixo.
