# Content Workflow

Fluxo editorial permanente para expandir o cânon de Barilis sem perder a origem
dos materiais.

## Etapas

1. Preservar o original em `sources/`.
2. Migrar estruturalmente para `world/public/` ou `world/private/`.
3. Usar o arquivo migrado em `world/` como fonte de trabalho ativa.
4. Auditar divergências, lacunas, duplicidades, nomes inconsistentes e conteúdo
   fora de escopo.
5. Reescrever, expandir, dividir ou reorganizar somente depois da auditoria.
6. Trabalhar uma entidade, um reino, um lugar ou uma instituição por vez.
7. Nunca editar arquivos em `sources/`.
8. Nunca inventar topônimos, facções, NPCs ou eventos sem instrução explícita.
9. Diferenciar fatos canônicos de hipóteses, sugestões e pendências de revisão.
10. Preparar o conteúdo para o futuro app sem criar o app neste repositório.

## Regras De Trabalho

- A migração inicial deve preservar o sentido do material bruto.
- A auditoria deve registrar conflitos antes de qualquer reescrita.
- Splits de visibilidade devem separar público e mestre antes de publicação
  futura.
- Splits de escopo devem retirar ferramenta de mesa, combate, fichas, logs e
  dados temporários do cânon ativo.
- Um documento em `world/` pode ser melhorado gradualmente, mas sua origem deve
  continuar rastreável nos documentos de migração.

## Uso por Assistentes

1. Em tarefas de mestre, o assistente consulta `world/public/` e
   `world/private/`.
2. Em respostas para jogadores, o assistente usa apenas conteúdo `public` com
   status `canonical`, salvo autorização explícita do mestre.
3. Conteúdo `gm` é restrito ao mestre.
4. Conteúdo com status `review` pode inspirar preparação e geração de aventuras,
   mas não pode ser apresentado como fato canônico consumado.
