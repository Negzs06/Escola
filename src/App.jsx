import { Church, Clock3, MapPin, Sparkles } from 'lucide-react'
import './App.css'

function App() {
  return (
    <main className="page-shell">
      <div className="stage-decor" aria-hidden="true">
        <span className="sunburst sunburst-one" />
        <span className="sunburst sunburst-two" />
        <span className="paper paper-one" />
        <span className="paper paper-two" />
        <span className="paper paper-three" />
      </div>

      <section className="poster-scene" aria-labelledby="invite-title">
        <article className="impact-poster">
          <div className="poster-shade" />

          <div className="flag-line" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <p className="church-label">
            <Church size={18} aria-hidden="true" />
            Paróquia São Sebastião
          </p>

          <div className="title-lockup">
            <p className="pretitle">Convite para o</p>
            <h1 id="invite-title">
              Arraiá
              <span>Junino</span>
            </h1>
            <p className="subtitle">da igreja católica</p>
          </div>

          <div className="badge-time">
            <Clock3 size={26} aria-hidden="true" />
            <span>19h</span>
            <small>às 21h</small>
          </div>

          <div className="place-ribbon">
            <MapPin size={23} aria-hidden="true" />
            <strong>Paróquia São Sebastião</strong>
          </div>

          <p className="invite-text">
            Música, comidas típicas, brincadeiras e uma noite de encontro com a
            comunidade. Chame sua turma e venha viver esse arraiá!
          </p>

          <div className="tag-cloud" aria-label="Atrações do convite">
            <span>Quadrilha</span>
            <span>Comidas típicas</span>
          </div>

          <a
            className="cta"
            href="https://www.google.com/maps/search/?api=1&query=Par%C3%B3quia%20S%C3%A3o%20Sebasti%C3%A3o"
            target="_blank"
            rel="noreferrer"
          >
            <Sparkles size={19} aria-hidden="true" />
            Quero ir
          </a>
        </article>
      </section>
    </main>
  )
}

export default App
