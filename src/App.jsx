import { useEffect, useState } from 'react'
import Logo from './components/Logo.jsx'
import './App.css'

const Arrow = () => (
  <svg
    className="arrow"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h9M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" aria-label="Inicio Hard Fork">
          <Logo size={28} />
        </a>
        <nav className="nav__links" aria-label="Principal">
          <a href="#craft">Qué hacemos</a>
          <a href="#approach">Cómo trabajamos</a>
          <a href="#ventures">Ventures</a>
          <a href="#human">Personas</a>
        </nav>
        <div className="nav__cta">
          <a href="mailto:main@hardfork.cl" className="nav__signin">
            Contacto
          </a>
          <a href="#contact" className="btn btn-primary">
            Conversemos <Arrow />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__gradient" aria-hidden="true" />
      <div className="hero__grid-overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="hero__title">
          Construimos software serio
          <br />
          para problemas <span className="gradient-text">reales</span>.
        </h1>
        <p className="hero__lead">
          Hard Fork es una compañía de software. Diseñamos y desarrollamos
          productos digitales con estándares de ingeniería altos y usamos
          inteligencia artificial donde aporta valor concreto, no como adorno.
          Trabajamos a la par con quienes emprenden para llevar una idea desde el
          primer boceto hasta un producto en producción.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Trabajemos juntos <Arrow />
          </a>
          <a href="#craft" className="btn btn-ghost-dark">
            Cómo trabajamos
          </a>
        </div>
        <div className="hero__proof">
          <span>De la idea al producto en producción</span>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: 'Calidad', label: 'Estándares de ingeniería altos en cada proyecto' },
  { value: '0 → 1', label: 'Acompañamos productos desde la idea hasta el lanzamiento' },
  { value: 'Full-stack', label: 'Diseño, ingeniería, datos e infraestructura' },
  { value: 'IA aplicada', label: 'Inteligencia artificial donde mejora el producto' },
]

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const crafts = [
  {
    icon: 'spark',
    title: 'Ingeniería de producto',
    body: 'Diseñamos y construimos productos completos, desde la base de datos hasta la interfaz. Cuando tiene sentido, integramos modelos de IA y automatización en el núcleo del producto.',
  },
  {
    icon: 'shield',
    title: 'Calidad de ingeniería',
    body: 'Arquitectura clara, pruebas reales, observabilidad y seguridad desde el primer día. Escribimos código pensando en quien lo va a mantener dentro de varios años.',
  },
  {
    icon: 'compass',
    title: 'Desarrollo de ventures',
    body: 'No nos quedamos en la entrega de features. Validamos el problema, construimos el producto y ayudamos a levantar el negocio alrededor de él.',
  },
  {
    icon: 'heart',
    title: 'Diseño centrado en las personas',
    body: 'Partimos de las personas que van a usar el producto. Buscamos que entreguen claridad y tiempo a quien los usa, no más ruido.',
  },
]

const Icon = ({ name }) => {
  const props = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  switch (name) {
    case 'spark':
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
          <circle cx="12" cy="12" r="2.4" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'compass':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...props}>
          <path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 7a3.7 3.7 0 0 1 7 3.7c0 5-7 9.3-7 9.3Z" />
        </svg>
      )
    default:
      return null
  }
}

function Craft() {
  return (
    <section className="section" id="craft">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="section-title">
            Productos bien hechos,
            <br />
            con la IA en su justo lugar.
          </h2>
          <p className="section-lead">
            Construir software hoy es más rápido que nunca. Nosotros nos
            enfocamos en que además quede bien hecho: usamos las herramientas de
            IA disponibles sin bajar la vara en correctitud ni en mantenibilidad.
          </p>
        </div>
        <div className="cards">
          {crafts.map((c) => (
            <article className="card" key={c.title}>
              <span className="card__icon">
                <Icon name={c.icon} />
              </span>
              <h3 className="card__title">{c.title}</h3>
              <p className="card__body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const principles = [
  {
    n: '01',
    title: 'Código mantenible',
    body: 'Escribimos código claro y bien estructurado, con decisiones documentadas y pruebas. Pensado para que el equipo lo pueda mantener y hacer crecer sin sorpresas.',
  },
  {
    n: '02',
    title: 'IA con criterio',
    body: 'Usamos modelos de IA para acelerar el desarrollo, pero cada resultado pasa por revisión humana. La herramienta ayuda; las decisiones técnicas las tomamos nosotros.',
  },
  {
    n: '03',
    title: 'Enfocados en resultados',
    body: 'Entregar una funcionalidad no es el objetivo final. Lo es un producto que funciona en producción y resuelve el problema. Medimos contra eso.',
  },
]

function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="approach__mesh" aria-hidden="true" />
      <div className="container approach__inner">
        <div className="approach__intro">
          <span className="eyebrow eyebrow--light">Cómo trabajamos</span>
          <h2 className="section-title approach__title">
            La calidad no se negocia.
          </h2>
          <p className="approach__lead">
            Es fácil priorizar velocidad por sobre todo lo demás. Nosotros
            buscamos el equilibrio: la IA nos permite avanzar rápido y, al mismo
            tiempo, sostener un estándar alto en cada decisión técnica.
          </p>
        </div>
        <div className="approach__list">
          {principles.map((p) => (
            <div className="principle" key={p.n}>
              <span className="principle__n">{p.n}</span>
              <div>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Ventures() {
  return (
    <section className="section ventures" id="ventures">
      <div className="container ventures__inner">
        <div className="ventures__copy">
          <span className="eyebrow">Venture studio</span>
          <h2 className="section-title">
            Construimos el producto
            <br />
            y el negocio alrededor.
          </h2>
          <p className="section-lead">
            Funcionamos como un venture studio: identificamos problemas sin
            resolver, construimos el producto que los aborda y hacemos crecer el
            negocio en torno a él. El software es la herramienta; crear valor es
            el objetivo.
          </p>
          <ul className="ventures__points">
            <li>
              <span className="ventures__check" />
              Validación de la idea con mercado y usuarios reales
            </li>
            <li>
              <span className="ventures__check" />
              Ingeniería completa: datos, IA, producto y crecimiento
            </li>
            <li>
              <span className="ventures__check" />
              Pensado para escalar: seguridad, observabilidad y confiabilidad
              desde el inicio
            </li>
          </ul>
          <a href="#contact" className="btn btn-primary ventures__cta">
            Conversemos sobre tu proyecto <Arrow />
          </a>
        </div>
        <div className="ventures__visual" aria-hidden="true">
          <div className="panel">
            <div className="panel__bar">
              <span className="panel__dot" />
              <span className="panel__dot" />
              <span className="panel__dot" />
            </div>
            <div className="panel__body">
              <div className="panel__chart">
                {[42, 58, 49, 71, 63, 86, 74, 92].map((h, i) => (
                  <span
                    className="panel__col"
                    key={i}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="panel__rows">
                <div className="panel__row">
                  <span className="panel__row-name">Fintech</span>
                  <span className="panel__row-track">
                    <span style={{ width: '82%' }} />
                  </span>
                </div>
                <div className="panel__row">
                  <span className="panel__row-name">Datos</span>
                  <span className="panel__row-track">
                    <span style={{ width: '64%' }} />
                  </span>
                </div>
                <div className="panel__row">
                  <span className="panel__row-name">Agentes de IA</span>
                  <span className="panel__row-track">
                    <span style={{ width: '48%' }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Human() {
  return (
    <section className="human" id="human">
      <div className="container human__inner">
        <span className="eyebrow">Por qué lo hacemos</span>
        <h2 className="human__title">
          Construimos pensando en{' '}
          <span className="gradient-text">quien usa el producto.</span>
        </h2>
        <p className="human__lead">
          Un buen producto le ahorra tiempo y le simplifica el día a quien lo
          usa. Esa es la vara con la que medimos nuestro trabajo, antes que
          cualquier métrica interna.
        </p>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta__mesh" aria-hidden="true" />
      <div className="container cta__inner">
        <h2 className="cta__title">
          Construyamos juntos
          <br />
          tu próximo producto.
        </h2>
        <p className="cta__lead">
          Ya sea que estés lanzando algo nuevo o mejorando un producto existente,
          nos gustaría conversar contigo.
        </p>
        <div className="cta__actions">
          <a href="mailto:main@hardfork.cl" className="btn btn-primary">
            main@hardfork.cl <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={26} light />
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Compañía</h4>
            <a href="#craft">Qué hacemos</a>
            <a href="#approach">Cómo trabajamos</a>
            <a href="#ventures">Ventures</a>
            <a href="#human">Personas</a>
          </div>
          <div className="footer__col">
            <h4>Contacto</h4>
            <a href="mailto:main@hardfork.cl">main@hardfork.cl</a>
          </div>
          <div className="footer__col footer__col--legal">
            <h4>Razón social</h4>
            <span>Hard Fork SpA</span>
            <span>Av. Apoquindo 6410, Of. 1004</span>
            <span>Las Condes, Santiago, Chile</span>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} Hard Fork SpA. Todos los derechos
          reservados.
        </span>
        <span>Santiago · Chile</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Craft />
        <Approach />
        <Ventures />
        <Human />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
