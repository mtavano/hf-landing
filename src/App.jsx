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
        <a href="#top" aria-label="Hard Fork home">
          <Logo size={28} />
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#craft">Craft</a>
          <a href="#approach">Approach</a>
          <a href="#ventures">Ventures</a>
          <a href="#human">Human impact</a>
        </nav>
        <div className="nav__cta">
          <a href="mailto:main@hardfork.cl" className="nav__signin">
            Contact
          </a>
          <a href="#contact" className="btn btn-primary">
            Start a venture <Arrow />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__grid-overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="hero__badge">
          <span className="hero__badge-dot" />
          Venture Software Company
        </span>
        <h1 className="hero__title">
          The software of the future,
          <br />
          built to a <span className="gradient-text">pre-automation</span> standard.
        </h1>
        <p className="hero__lead">
          Hard Fork is a venture software company. We design and engineer
          AI-native products with the craftsmanship of an earlier era — when
          software was built to last, line by line. High impact, uncompromising
          quality, and a relentless focus on discovering new businesses while
          keeping the human at the center.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Build with us <Arrow />
          </a>
          <a href="#craft" className="btn btn-ghost-dark">
            How we work
          </a>
        </div>
        <div className="hero__proof">
          <span>Crafted in Chile · operating worldwide</span>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: 'AI-native', label: 'Built on frontier models, end to end' },
  { value: '100%', label: 'Engineered to pre-automation quality bars' },
  { value: '0→1', label: 'We discover and launch new businesses' },
  { value: 'Human-first', label: 'Technology that serves people, not the inverse' },
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
    title: 'AI-native product engineering',
    body: 'We architect products where intelligence is a first-class material — agents, reasoning, and automation woven into the core, not bolted on afterward.',
  },
  {
    icon: 'shield',
    title: 'Pre-automation quality standards',
    body: 'Every system is held to the discipline of hand-built software: rigorous architecture, real test coverage, observability, and security by default.',
  },
  {
    icon: 'compass',
    title: 'Venture discovery',
    body: 'We do not just ship features — we find the business. We validate markets, build the company around the product, and take ideas from zero to one.',
  },
  {
    icon: 'heart',
    title: 'Human-centered design',
    body: 'Impact is measured in lives improved. We build technology that gives people clarity, time, and control — never noise.',
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
          <span className="eyebrow">What we build</span>
          <h2 className="section-title">
            Software with the soul of craft,
            <br />
            the power of AI.
          </h2>
          <p className="section-lead">
            Automation made software cheap. We make it exceptional. Hard Fork
            unites frontier intelligence with engineering standards from before
            the shortcut era.
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
    title: 'Engineering as craft',
    body: 'We write software that we would be proud to maintain in a decade. Clear architecture, deliberate trade-offs, and code that reads like prose.',
  },
  {
    n: '02',
    title: 'AI as a force multiplier',
    body: 'We use the most capable models available to design, build, and reason — accelerating delivery without ever lowering the bar for correctness.',
  },
  {
    n: '03',
    title: 'Outcomes over output',
    body: 'A shipped feature is not the goal. A working business that improves real lives is. We instrument everything against that truth.',
  },
]

function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="approach__mesh" aria-hidden="true" />
      <div className="container approach__inner">
        <div className="approach__intro">
          <span className="eyebrow eyebrow--light">Our standard</span>
          <h2 className="section-title approach__title">
            Quality is not negotiable.
            <br />
            It is the entire point.
          </h2>
          <p className="approach__lead">
            The automation era traded craftsmanship for speed. We refuse the
            trade. At Hard Fork, AI lets us move faster <em>and</em> build
            better — the way the best software was always meant to be made.
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
            We don't just write code.
            <br />
            We discover companies.
          </h2>
          <p className="section-lead">
            Hard Fork operates as a venture software company: we identify
            unsolved problems, build the product that solves them, and grow the
            business around it. Software is our instrument — value creation is
            our craft.
          </p>
          <ul className="ventures__points">
            <li>
              <span className="ventures__check" />
              Idea validation grounded in real markets and real users
            </li>
            <li>
              <span className="ventures__check" />
              Full-stack engineering — from data and AI to product and growth
            </li>
            <li>
              <span className="ventures__check" />
              Built to scale: security, observability, and reliability from day
              one
            </li>
          </ul>
          <a href="#contact" className="btn btn-primary ventures__cta">
            Explore a venture with us <Arrow />
          </a>
        </div>
        <div className="ventures__visual" aria-hidden="true">
          <div className="orbit">
            <div className="orbit__core">
              <Logo size={34} />
            </div>
            <span className="orbit__chip orbit__chip--1">Fintech</span>
            <span className="orbit__chip orbit__chip--2">AI agents</span>
            <span className="orbit__chip orbit__chip--3">Data</span>
            <span className="orbit__chip orbit__chip--4">Open banking</span>
            <span className="orbit__ring orbit__ring--a" />
            <span className="orbit__ring orbit__ring--b" />
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
        <span className="eyebrow">Why we build</span>
        <h2 className="human__title">
          Every line of software we write exists to{' '}
          <span className="gradient-text">serve a human being.</span>
        </h2>
        <p className="human__lead">
          Technology is only worth building if it gives people something back —
          time, clarity, opportunity, dignity. We measure our work not by what
          it automates, but by the lives it makes better. That is the center of
          gravity for everything Hard Fork creates.
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
          Let's build the software
          <br />
          the future deserves.
        </h2>
        <p className="cta__lead">
          Whether you're launching a new venture or raising the bar on an
          existing one, we'd like to hear from you.
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
          <Logo size={26} />
          <p className="footer__tagline">
            A venture software company building the future with
            pre-automation craftsmanship.
          </p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#craft">What we build</a>
            <a href="#approach">Our standard</a>
            <a href="#ventures">Ventures</a>
            <a href="#human">Human impact</a>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <a href="mailto:main@hardfork.cl">main@hardfork.cl</a>
          </div>
          <div className="footer__col footer__col--legal">
            <h4>Legal entity</h4>
            <span>Hard Fork SpA</span>
            <span>Av. Apoquindo 6410, Of. 1004</span>
            <span>Las Condes, Santiago, Chile</span>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} Hard Fork SpA. All rights reserved.
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
