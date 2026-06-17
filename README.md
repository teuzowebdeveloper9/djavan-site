# Djavan Site

Homenagem editorial a Djavan, feita com multi-agentes do Codex, em React, Vite e Tailwind CSS, com hero video cinematografico, visual premium e animacoes sofisticadas.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111111)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js&logoColor=ffffff)
![FFmpeg](https://img.shields.io/badge/FFmpeg-video_generation-007808?style=for-the-badge&logo=ffmpeg&logoColor=ffffff)
![Playwright](https://img.shields.io/badge/Playwright-screenshots-2EAD33?style=for-the-badge&logo=playwright&logoColor=ffffff)
![Codex](https://img.shields.io/badge/Codex-multi--agent-000000?style=for-the-badge&logo=openai&logoColor=ffffff)

## Preview

### Desktop

![Desktop preview](docs/screenshots/home-desktop.jpg)

### Mobile

<img src="docs/screenshots/home-mobile.jpg" alt="Mobile preview" width="360" />

## Sobre

O projeto apresenta uma pagina unica sobre Djavan com foco em:

- Hero full-bleed com **video cinematografico** gerado por IA e fallback para fotografia em preto e branco.
- Copy de homenagem, sem texto de bastidor sobre layout ou tecnologia.
- Galeria assimetrica com retratos e capas.
- Timeline afetiva da obra.
- Lista de discos e encerramento visual.
- Animacoes de reveal-on-scroll com fallback acessivel.
- Acessibilidade: respeita `prefers-reduced-motion` do sistema.

## Desenvolvimento com Multi-Agentes

Este projeto foi desenvolvido utilizando **sub-agentes paralelos do Codex** para maximizar eficiencia e qualidade visual. A abordagem permite que agentes especializados trabalhem simultaneamente em tarefas distintas.

### Fluxo de Execucao

```
entender projeto → analisar frontend/assets → criar branch → executar subagents em paralelo → integrar resultados → validar build/testes → abrir PR
```

### Agentes Utilizados

#### 1. Frontend Design Agent
- Analisou a estrutura do frontend e atuou como designer criativo
- Melhorou a interface existente com visual premium
- Preparou a pagina para receber o hero video fullscreen
- Criou overlays, tipografias, animacoes e transicoes elegantes
- Implementou gradientes sofisticados com textura grain
- Integrou o video gerado pelo social media agent

#### 2. Social Media Creative Agent
- Procurou na codebase todas as fotos existentes do Djavan
- Selecionou as melhores imagens para compor o video
- Criou um video hero emocional com narrativa visual cinematografica
- Aplicou efeitos de zoom, color grading, vinheta e grain
- Transmitiu nostalgia, intensidade, emocao e legado
- Salvou o resultado em `public/djavan/djavan-hero-video.mp4`

#### 3. GitHub Agent
- Gerenciou branches e commits organizados
- Acompanhou as alteracoes realizadas pelos demais agentes
- Criou Pull Requests com descricoes completas
- Garantiu sincronizacao e limpeza da branch

### Execucao Paralela

- **frontend-design-agent** e **social-media-creative-agent** trabalharam simultaneamente
- Nenhum agente bloqueou o outro desnecessariamente
- O frontend foi preparado desde o inicio para consumir o video assim que gerado
- Apos conclusao, integracao e revisao final foram realizadas

## Metadados do repositorio

- Nome: `djavan-site`
- Descricao: `Homenagem editorial a Djavan em React, Vite e Tailwind CSS.`
- Topicos sugeridos: `react`, `vite`, `tailwindcss`, `typescript`, `playwright`, `mpb`, `djavan`, `editorial-design`, `frontend`
- Autor: `teuzowebdeveloper9`
- Email Git: `mateussoftwaredeveloper@gmail.com`

## Hero Video Cinematografico

O hero section utiliza um video cinematografico gerado automaticamente a partir de fotos existentes do Djavan. O video transmite emocao e nostalgia através de 6 cenas temáticas:

1. **Memoria** - Foto jovem com efeito nostalgic
2. **Olhar** - Retrato com boina, tom introspectivo
3. **Cor** - Capa do album "Lilas" com saturacao vibrante
4. **Palco** - Show no Allianz Parque, energia do vivo
5. **Alumbramento** - Efeito etereo e contemplativo
6. **Legado** - Iconografia classica do artista

### Gerar o Video

```bash
npm run generate:hero-video
```

O script utiliza **FFmpeg** para processar as imagens com efeitos de:
- Zoom suave (Ken Burns effect)
- Color grading cinematografico
- Vinheta e grain
- Transicoes com fade in/out
- Formato: 1920x1080 @ 30fps, H.264

### Acessibilidade

- O video respeita a preferencia `prefers-reduced-motion` do sistema
- Fallback automatico para imagem estatica quando video nao carrega
- Controles de midia otimizados para mobile

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
| `npm run generate:hero-video` | Gera `public/djavan/djavan-hero-video.mp4` a partir das imagens locais. |
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
|-- public/djavan/             # Imagens e video hero do projeto
|-- scripts/capture-screenshots.mjs
|-- scripts/generate-djavan-hero-video.mjs
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

## Arquitetura Multi-Agentes

Este projeto demonstra como usar **sub-agentes paralelos** para desenvolvimento de software:

- **Especializacao**: Cada agente foca em uma area especifica (design, criacao de midia, git)
- **Paralelismo**: Agentes trabalham simultaneamente, reduzindo tempo total
- **Integracao**: Resultados sao combinados de forma coesa
- **Qualidade**: Validacao automatizada antes de merge

### Ferramentas Utilizadas

- **Codex CLI**: Orquestracao dos sub-agentes
- **FFmpeg**: Processamento de video e imagem
- **Node.js**: Scripts de automacao
- **Git/GitHub**: Controle de versao e PRs

### Resultado

- Hero video cinematografico de 6.3MB
- UI premium com gradientes sofisticados
- Acessibilidade implementada
- Branch limpa com commits organizados
- PR descritiva para revisão
