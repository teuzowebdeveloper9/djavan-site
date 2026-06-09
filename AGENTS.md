# AGENTS.md

Guia para agentes automatizados neste repositorio.

## Objetivo do projeto

Criar e manter uma pagina editorial bonita, responsiva e performatica sobre Djavan.

## Stack principal

- React
- TypeScript
- Vite
- Tailwind CSS
- Playwright

## Fluxo recomendado

1. Leia `README.md`, `src/App.tsx` e `src/App.css`.
2. Faca mudancas pequenas e coesas.
3. Use Tailwind para estilo de UI.
4. Rode `npm run build`.
5. Para mudancas visuais, rode `npm run screenshots`.
6. Confira `git status --short` antes de commitar.

## Cuidados de copy

O texto da pagina deve soar como homenagem ao artista. Nao mostrar para o visitante termos como:

- hook
- layout
- grid
- design
- tecnologia
- componente

Esses termos podem aparecer em documentacao, mas nao na interface publica.

## Screenshots

Os screenshots do README ficam em:

```txt
docs/screenshots/home-desktop.jpg
docs/screenshots/home-mobile.jpg
```

O script de captura espera o site disponivel em `http://localhost:6005/`, ou uma URL passada por `SITE_URL`.

## GitHub

Repositorio esperado:

```txt
git@github.com:teuzowebdeveloper9/djavan-site.git
```
