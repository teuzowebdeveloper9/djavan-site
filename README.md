# Djavan Site

Homenagem editorial a Djavan, feita em React, Vite e Tailwind CSS, com visual preto e branco, fotografia em destaque, microanimacoes e uma galeria responsiva inspirada em revista musical.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111111)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![Playwright](https://img.shields.io/badge/Playwright-screenshots-2EAD33?style=for-the-badge&logo=playwright&logoColor=ffffff)

## Preview

### Desktop

![Desktop preview](docs/screenshots/home-desktop.jpg)

### Mobile

<img src="docs/screenshots/home-mobile.jpg" alt="Mobile preview" width="360" />

## Sobre

O projeto apresenta uma pagina unica sobre Djavan com foco em:

- Hero full-bleed com fotografia em preto e branco.
- Copy de homenagem, sem texto de bastidor sobre layout ou tecnologia.
- Galeria assimetrica com retratos e capas.
- Timeline afetiva da obra.
- Lista de discos e encerramento visual.
- Animacoes de reveal-on-scroll com fallback acessivel.

## Stack

- React 18
- TypeScript
- Vite 8
- Tailwind CSS 4
- Playwright para screenshots

## Metadados do repositorio

- Nome: `djavan-site`
- Descricao: `Homenagem editorial a Djavan em React, Vite e Tailwind CSS.`
- Topicos sugeridos: `react`, `vite`, `tailwindcss`, `typescript`, `playwright`, `mpb`, `djavan`, `editorial-design`, `frontend`
- Autor: `teuzowebdeveloper9`
- Email Git: `mateussoftwaredeveloper@gmail.com`

## Rodar localmente

```bash
npm install
npm run dev
```

O servidor local usa:

```txt
http://localhost:6005/
```

## Scripts

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia o Vite em `localhost:6005`. |
| `npm run build` | Valida TypeScript e gera build de producao. |
| `npm run preview` | Serve o build localmente. |
| `npm run screenshots` | Gera screenshots com Playwright em `docs/screenshots/`. |

## Atualizar screenshots

Com o projeto rodando em `http://localhost:6005/`:

```bash
npm run screenshots
```

Para capturar outra URL:

```bash
SITE_URL=http://localhost:6005/ npm run screenshots
```

Os arquivos gerados sao:

- `docs/screenshots/home-desktop.jpg`
- `docs/screenshots/home-mobile.jpg`

## Estrutura

```txt
.
|-- docs/screenshots/          # Prints usados no README
|-- public/djavan/             # Imagens do projeto
|-- scripts/capture-screenshots.mjs
|-- src/App.tsx                # Pagina principal
|-- src/App.css                # Tailwind, tokens e animacoes globais
|-- src/main.tsx
|-- vite.config.ts
`-- package.json
```

## Qualidade

Antes de publicar alteracoes:

```bash
npm run build
```

Se a interface mudar visualmente, atualize os prints:

```bash
npm run screenshots
```
