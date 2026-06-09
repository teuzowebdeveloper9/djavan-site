# CLAUDE.md

Instrucoes para Claude Code ou agentes similares trabalhando neste projeto.

## Contexto

`djavan-site` e uma homenagem editorial a Djavan em React, Vite, TypeScript e Tailwind CSS. O foco visual e preto e branco, fotografia grande, tipografia editorial e animacoes discretas.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run screenshots
```

O dev server esperado e `http://localhost:6005/`.

## Regras de implementacao

- Use Tailwind CSS para layout e estilo de componentes.
- Mantenha `src/App.css` apenas para Tailwind, tokens globais, base styles e keyframes compartilhados.
- Nao adicione texto visivel explicando layout, design, hook, tecnologia ou funcionamento da pagina.
- Preserve a direcao editorial: preto, branco, off-white, dourado discreto e vermelho como acento raro.
- Evite cards dentro de cards e efeitos decorativos sem funcao.
- Mantenha imagens reais do acervo em `public/djavan/`.
- Antes de finalizar alteracoes visuais, rode `npm run build`.
- Se o visual mudar, rode `npm run screenshots` com o site aberto em `localhost:6005`.

## Git

- Branch principal: `main`.
- Remote: `git@github.com:teuzowebdeveloper9/djavan-site.git`.
- Nao commitar `node_modules`, `dist` ou arquivos `*.tsbuildinfo`.
