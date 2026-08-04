import Reveal from './Reveal.jsx'
import ProjectGallery from './ProjectGallery.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-sm">04 · Featured Projects</div>
          <h2>Building solutions across diverse industries and challenges.</h2>
          <p>A closer look at products I helped build — from crisis fundraising to helicopter tours to business phone systems.</p>
        </Reveal>

        {projects.map((p, i) => (
          <Reveal as="div" className={`project${i % 2 === 1 ? ' flip' : ''}`} key={p.title}>
            <div>
              <span className="proj-index mono">{p.index}</span>
              <h3>{p.title}</h3>
              <div className="role">{p.role}</div>
              <p className="desc">{p.desc}</p>
              <div className="tl-tags">
                {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
            <div>
              <ProjectGallery images={p.images} url={p.url} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
