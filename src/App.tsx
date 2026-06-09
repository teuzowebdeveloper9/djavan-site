import { useEffect } from "react";

type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  tone?: "color" | "mono";
};

type Chapter = {
  year: string;
  title: string;
  text: string;
};

const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/djavan/djavan-07.png",
    alt: "Djavan de branco com os bracos abertos em retrato de estudio",
    caption: "Presenca",
    tone: "mono",
  },
  {
    src: "/djavan/jovem-imagem-djavan.jpg",
    alt: "Retrato em preto e branco de Djavan jovem olhando para a camera",
    caption: "Inicio",
    tone: "mono",
  },
  {
    src: "/djavan/lilas.jpg",
    alt: "Capa do album Lilas de Djavan",
    caption: "Lilas",
    tone: "color",
  },
  {
    src: "/djavan/Djavan-no-show-do-Allianz-Clayto-1024x538.webp",
    alt: "Djavan cantando no palco sob luz vermelha",
    caption: "Palco",
    tone: "color",
  },
  {
    src: "/djavan/djavan-jovem-boina.jpg",
    alt: "Djavan jovem usando boina em retrato",
    caption: "Olhar",
    tone: "mono",
  },
  {
    src: "/djavan/1900x1900-000000-80-0-0.jpg",
    alt: "Retrato de capa do album Alumbramento de Djavan",
    caption: "Alumbramento",
    tone: "mono",
  },
  {
    src: "/djavan/djavanbio_2022_profile.jpg",
    alt: "Retrato em preto e branco de Djavan sorrindo",
    caption: "Leveza",
    tone: "mono",
  },
];

const chapters: Chapter[] = [
  {
    year: "1949",
    title: "Maceio como primeira cadencia.",
    text: "Antes do palco, havia rua, bola, mar e uma escuta afiada. A musica entra cedo e vira um jeito particular de organizar o mundo.",
  },
  {
    year: "1975",
    title: "Fato Consumado muda a temperatura.",
    text: "O Festival Abertura apresenta uma assinatura melodica rara: popular, sinuosa e cheia de caminhos harmonicos inesperados.",
  },
  {
    year: "1982",
    title: "Luz amplia o mapa.",
    text: "A obra encontra jazz, soul, samba e pop sem perder o centro brasileiro. A sofisticacao passa a soar natural.",
  },
  {
    year: "1989",
    title: "Oceano vira idioma comum.",
    text: "A cancao atravessa geracoes porque combina simplicidade emocional com arquitetura musical precisa.",
  },
];

const albums = [
  "A Voz, o Violao, a Musica de Djavan",
  "Alumbramento",
  "Luz",
  "Lilas",
  "Oceano",
  "Coisa de Acender",
  "Novena",
  "Milagreiro",
  "Rua dos Amores",
  "D",
];

const navItems = [
  ["Homenagem", "#homenagem"],
  ["Mapa", "#mapa"],
  ["Galeria", "#galeria"],
  ["Discos", "#discos"],
];

const marqueeItems = [
  "Luz",
  "Oceano",
  "Lilas",
  "Sina",
  "Flor de Lis",
  "Samurai",
  "Luz",
  "Oceano",
  "Lilas",
  "Sina",
  "Flor de Lis",
  "Samurai",
];

const headingClass =
  "m-0 font-display text-[2.48rem] font-bold leading-[0.98] text-balance md:text-[3.1rem] lg:text-[4.7rem]";

const eyebrowClass =
  "mb-[18px] mt-0 text-[0.98rem] font-semibold leading-tight text-gold";

const bodyCopyClass =
  "mt-7 text-[1.08rem] leading-[1.72] text-black-ink/75 lg:text-[1.22rem]";

const sectionPaddingClass = "px-[18px] md:px-[30px]";

const revealClass = "reveal";

const galleryLayoutClasses = [
  "md:col-span-7 md:row-span-5 max-md:aspect-[4/5]",
  "md:col-span-5 md:row-span-4",
  "md:col-span-3 md:row-span-3",
  "md:col-span-4 md:row-span-3 max-md:aspect-[4/5]",
  "md:col-span-5 md:row-span-3",
  "md:col-span-6 md:row-span-3",
  "md:col-span-6 md:row-span-3",
];

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <main className="overflow-hidden">
      <section
        className="relative isolate grid min-h-[94svh] items-end border-b border-paper/15 bg-black-ink p-[30px] max-md:min-h-[92svh] max-md:px-[18px]"
        aria-labelledby="hero-title"
      >
        <img
          className="animate-hero-drift absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center] opacity-70 grayscale contrast-[1.08] max-md:object-[62%_center] max-md:opacity-55"
          src="/djavan/djavan-07.png"
          alt="Djavan com roupa branca e bracos abertos"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,0.96)_0%,rgba(8,8,8,0.76)_42%,rgba(8,8,8,0.28)_100%),linear-gradient(180deg,rgba(8,8,8,0.12)_0%,rgba(8,8,8,0.92)_100%)] max-md:bg-[linear-gradient(180deg,rgba(8,8,8,0.48)_0%,rgba(8,8,8,0.96)_84%),linear-gradient(90deg,rgba(8,8,8,0.88)_0%,rgba(8,8,8,0.22)_100%)]"
          aria-hidden="true"
        />

        <nav
          className="absolute left-[30px] right-[30px] top-6 z-30 flex justify-end gap-2 max-md:left-[18px] max-md:right-[18px] max-md:justify-start max-md:overflow-x-auto max-md:pb-2"
          aria-label="Navegacao principal"
        >
          {navItems.map(([label, href]) => (
            <a
              className="inline-flex min-h-[38px] items-center whitespace-nowrap rounded-full border border-paper/15 bg-black-ink/40 px-3.5 py-2 text-paper/90 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-paper/45 hover:bg-paper/10 focus-visible:-translate-y-0.5 focus-visible:border-paper/45 focus-visible:bg-paper/10 focus-visible:outline-none"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          className={`${revealClass} w-full max-w-[860px] pb-28 pt-32 max-md:pb-32 max-md:pt-32`}
          data-reveal
        >
          <p className={eyebrowClass}>
            Maceio / voz / violao / harmonia brasileira
          </p>
          <h1
            id="hero-title"
            className="m-0 font-display text-[4.35rem] font-bold leading-[0.82] text-paper md:text-[5.7rem] lg:text-[8rem] xl:text-[10rem]"
          >
            Djavan
          </h1>
          <p className="mt-8 max-w-[760px] font-display text-[1.72rem] font-semibold leading-none text-balance text-paper md:text-[2.12rem] lg:text-[2.55rem] xl:text-5xl">
            A cancao brasileira quando aprende a respirar em outro compasso.
          </p>
          <p className="mt-6 max-w-[610px] text-[1.12rem] leading-[1.62] text-paper/75 lg:text-[1.28rem]">
            Uma homenagem a voz que fez o popular soar sofisticado e fez a
            sofisticacao caber no peito.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 max-[460px]:grid">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-5 py-3 leading-none text-black-ink transition hover:-translate-y-0.5 hover:bg-white focus-visible:-translate-y-0.5 focus-visible:bg-white focus-visible:outline-none"
              href="#homenagem"
            >
              Entrar na obra
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-paper/50 px-5 py-3 leading-none text-paper transition hover:-translate-y-0.5 hover:border-paper hover:bg-paper/10 focus-visible:-translate-y-0.5 focus-visible:border-paper focus-visible:bg-paper/10 focus-visible:outline-none"
              href="#galeria"
            >
              Ver retratos
            </a>
          </div>
        </div>

        <aside
          className="absolute bottom-[86px] right-[30px] grid w-[min(300px,36%)] gap-2.5 text-right leading-tight text-paper/70 max-md:bottom-16 max-md:left-[18px] max-md:right-[18px] max-md:w-auto max-md:grid-cols-3 max-md:items-end max-md:text-left max-[460px]:text-sm"
          aria-label="Resumo da homenagem"
        >
          <span className="font-display text-5xl font-bold leading-[0.86] text-paper md:text-7xl">
            1949
          </span>
          <span>Maceio</span>
          <span>MPB sem fronteira</span>
        </aside>

        <div
          className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-t border-paper/15 bg-black-ink/70"
          aria-hidden="true"
        >
          <div className="animate-marquee flex w-max gap-8 py-3 text-[0.98rem] text-paper/60">
            {marqueeItems.map((item, index) => (
              <span className="whitespace-nowrap" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${sectionPaddingClass} grid gap-6 bg-paper py-[88px] text-black-ink md:grid-cols-[minmax(90px,0.32fr)_minmax(0,880px)] md:gap-11 lg:py-[120px]`}
        id="homenagem"
      >
        <div
          className={`${revealClass} font-display text-5xl font-bold leading-none text-stage lg:text-[5rem]`}
          data-reveal
        >
          01
        </div>
        <div className={revealClass} data-reveal>
          <p className={eyebrowClass}>Homenagem em preto, branco e silencio</p>
          <h2 className={headingClass}>
            Uma voz que nao precisa gritar para mudar o clima da sala.
          </h2>
          <p className={bodyCopyClass}>
            Djavan parece compor lugares. Uma esquina com luz baixa, uma janela
            aberta para o mar, uma saudade que nao se entrega logo de primeira.
            A melodia chega macia; a harmonia, por baixo, move o chao.
          </p>
          <p className={bodyCopyClass}>
            O que impressiona nao e apenas a beleza. E a precisao com que samba,
            jazz, bossa, soul, blues e nordeste aparecem sem virar colagem. Tudo
            fica com o mesmo sotaque: dele.
          </p>
        </div>
      </section>

      <section
        className={`${sectionPaddingClass} grid items-center gap-14 bg-black-ink py-[84px] md:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.72fr)] lg:min-h-[760px] lg:py-28`}
        aria-label="Ensaio visual"
      >
        <figure
          className={`${revealClass} relative m-0 aspect-[16/11] overflow-hidden rounded-lg border border-paper/15 bg-graphite`}
          data-reveal
        >
          <img
            className="h-full w-full scale-[1.01] object-cover grayscale contrast-[1.15]"
            src="/djavan/jovem-imagem-djavan.jpg"
            alt="Djavan jovem em preto e branco"
          />
          <figcaption className="absolute bottom-[18px] left-[18px] rounded-full bg-black-ink/70 px-3.5 py-2 text-[0.94rem] text-paper backdrop-blur-xl">
            Antes do oceano, uma escuta.
          </figcaption>
        </figure>
        <div className={revealClass} data-reveal>
          <p className={eyebrowClass}>Entre luz e sombra</p>
          <h2 className={`${headingClass} text-paper`}>
            Djavan acende a sombra antes de entregar a cor.
          </h2>
          <p className="mt-7 text-[1.08rem] leading-[1.72] text-paper/75 lg:text-[1.22rem]">
            Ha cancoes que chegam como retrato antigo: primeiro o contraste,
            depois o detalhe. A voz entra baixa, a harmonia abre caminho, e
            quando a gente percebe ja esta dentro da paisagem.
          </p>
        </div>
      </section>

      <section
        className={`${sectionPaddingClass} bg-paper py-[84px] text-black-ink lg:py-28`}
        aria-labelledby="map-title"
        id="mapa"
      >
        <div className={`${revealClass} max-w-[920px]`} data-reveal>
          <p className={eyebrowClass}>Mapa de escuta</p>
          <h2 className={headingClass} id="map-title">
            Quatro formas de chegar perto.
          </h2>
        </div>

        <div className="mt-14 grid gap-px border border-black-ink/20 bg-black-ink/20 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "01",
              "Acorde",
              "Harmonias que parecem simples ate a segunda escuta, quando a casa muda de lugar.",
            ],
            [
              "02",
              "Voz",
              "Um timbre que nao empurra a emocao: abre espaco para ela aparecer.",
            ],
            [
              "03",
              "Palavra",
              "Letra como imagem sensorial, mais proxima de pintura do que de explicacao.",
            ],
            [
              "04",
              "Palco",
              "O refinamento da obra sem perder o corpo, o pulso e a alegria de cancao popular.",
            ],
          ].map(([number, title, text]) => (
            <article
              className={`${revealClass} flex min-h-60 flex-col justify-between bg-paper p-6 transition hover:bg-black-ink hover:text-paper md:min-h-[290px] lg:min-h-[360px]`}
              data-reveal
              key={number}
            >
              <span className="font-display text-4xl font-bold leading-none text-stage">
                {number}
              </span>
              <div>
                <h3 className="m-0 font-display text-[2.6rem] leading-none">
                  {title}
                </h3>
                <p className="mt-6 text-[1.05rem] leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${sectionPaddingClass} grid gap-14 border-y border-paper/15 bg-black-ink py-[84px] md:grid-cols-[minmax(300px,0.7fr)_minmax(0,1fr)] md:gap-[72px] lg:py-28`}
        aria-labelledby="timeline-title"
      >
        <div
          className={`${revealClass} self-start md:sticky md:top-9`}
          data-reveal
        >
          <p className={eyebrowClass}>Travessia</p>
          <h2 className={`${headingClass} text-paper`} id="timeline-title">
            Da rua ao idioma proprio.
          </h2>
        </div>

        <div className="grid">
          {chapters.map((chapter) => (
            <article
              className={`${revealClass} grid gap-4 border-t border-paper/15 py-8 last:border-b md:grid-cols-[110px_minmax(0,1fr)] md:gap-8`}
              key={chapter.year}
              data-reveal
            >
              <span className="font-display text-4xl font-bold leading-none text-gold">
                {chapter.year}
              </span>
              <div>
                <h3 className="m-0 font-display text-[1.95rem] font-bold leading-[1.04] text-paper md:text-[2.35rem]">
                  {chapter.title}
                </h3>
                <p className="mt-[18px] text-[1.08rem] leading-[1.72] text-paper/70 lg:text-[1.22rem]">
                  {chapter.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${sectionPaddingClass} bg-paper py-[84px] text-black-ink lg:py-28`}
        id="galeria"
        aria-labelledby="gallery-title"
      >
        <div
          className={`${revealClass} grid gap-11 md:grid-cols-[minmax(0,1fr)_minmax(280px,430px)] md:items-end`}
          data-reveal
        >
          <div>
            <p className={`${eyebrowClass} text-stage`}>Galeria editorial</p>
            <h2 className={headingClass} id="gallery-title">
              Retratos com ritmo, respiro e contraste.
            </h2>
          </div>
          <p className="m-0 text-[1.1rem] leading-[1.62] text-black-ink/65">
            O tempo aparece no rosto, no gesto, no palco e no silencio entre uma
            imagem e outra. Cada retrato guarda uma temperatura da obra.
          </p>
        </div>

        <div className="mt-16 grid gap-3.5 md:grid-cols-12 md:auto-rows-[120px]">
          {galleryPhotos.map((photo, index) => (
            <figure
              className={`${revealClass} ${galleryLayoutClasses[index]} group relative m-0 aspect-square overflow-hidden rounded-lg bg-black-ink shadow-[0_28px_70px_rgba(8,8,8,0.16)] md:aspect-auto`}
              key={photo.src}
              data-reveal
            >
              <img
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.035] group-hover:grayscale-0 group-hover:contrast-[1.04] group-hover:saturate-[0.94] ${
                  photo.tone === "color"
                    ? "grayscale-[0.88] contrast-[1.06] saturate-[0.78]"
                    : "grayscale contrast-[1.12]"
                }`}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
              <figcaption className="absolute bottom-3.5 left-3.5 rounded-full bg-black-ink/75 px-3 py-2 text-[0.94rem] leading-none text-paper backdrop-blur-xl">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className={`${sectionPaddingClass} grid gap-14 bg-paper-soft py-[84px] text-black-ink md:grid-cols-[minmax(300px,0.76fr)_minmax(0,1fr)] lg:py-28`}
        id="discos"
        aria-labelledby="records-title"
      >
        <div className={`${revealClass} self-start`} data-reveal>
          <p className={`${eyebrowClass} text-stage`}>Discografia afetiva</p>
          <h2 className={headingClass} id="records-title">
            Discos como mudancas de luz.
          </h2>
        </div>
        <ol className="m-0 grid list-none gap-0 border-t border-black-ink/20 p-0">
          {albums.map((album, index) => (
            <li
              className={`${revealClass} grid min-h-16 grid-cols-[44px_minmax(0,1fr)] items-center gap-5 border-b border-black-ink/20 text-black-ink transition hover:bg-black-ink/5 hover:pl-3 md:grid-cols-[58px_minmax(0,1fr)]`}
              key={album}
              data-reveal
            >
              <span className="text-[0.94rem] text-stage">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="text-[1.3rem] font-medium leading-tight">
                {album}
              </strong>
            </li>
          ))}
        </ol>
      </section>

      <section
        className={`${sectionPaddingClass} grid items-center gap-14 bg-black-ink py-[84px] md:grid-cols-[minmax(0,1.1fr)_minmax(330px,0.78fr)] lg:py-28`}
        aria-labelledby="closing-title"
      >
        <div
          className={`${revealClass} overflow-hidden rounded-lg border border-paper/15 bg-graphite`}
          data-reveal
        >
          <img
            className="min-h-[330px] w-full object-cover saturate-[0.82] contrast-[1.04]"
            src="/djavan/3b6c6030-1192-49b9-96fa-b893cdd3211f-djavanlanding1920x720bsb.gif"
            alt="Banner oficial da turne Djavanear 50 anos"
            loading="lazy"
          />
        </div>
        <div className={revealClass} data-reveal>
          <p className={eyebrowClass}>50 anos de cancao</p>
          <h2 className={`${headingClass} text-paper`} id="closing-title">
            O Brasil inteiro cabendo num acorde torto.
          </h2>
          <p className="mt-7 text-[1.08rem] leading-[1.72] text-paper/75 lg:text-[1.22rem]">
            Popular sem ser obvio, sofisticado sem esfriar. Talvez seja por isso
            que Djavan atravessa tanto tempo: a musica pensa, mas nunca deixa de
            sentir.
          </p>
        </div>
      </section>

      <footer className={`${sectionPaddingClass} bg-paper py-9 text-black-ink/75`}>
        <p className="m-0 max-w-[980px] text-base leading-relaxed">
          Homenagem autoral com fatos consultados na{" "}
          <a
            className="text-black-ink underline underline-offset-4"
            href="https://djavan.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            pagina oficial de Djavan
          </a>
          , no{" "}
          <a
            className="text-black-ink underline underline-offset-4"
            href="https://dicionariompb.com.br/artista/djavan/"
            target="_blank"
            rel="noreferrer"
          >
            Dicionario Cravo Albin
          </a>{" "}
          e em registros publicos sobre sua carreira.
        </p>
      </footer>
    </main>
  );
}

export default App;
