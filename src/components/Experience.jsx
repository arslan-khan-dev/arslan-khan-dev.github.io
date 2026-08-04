import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-sm">03 · Experience</div>
          <h2>Where the stack comes together.</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="div" className={`tl-item${job.current ? '' : ' past'}`} key={job.company}>
              <div className="tl-head">
                <h3><span className="tl-role">{job.role}</span> — {job.company}</h3>
                <span className="tl-date mono">{job.date}</span>
              </div>
              <div className="tl-company">{job.location}</div>
              <ul className="tl-bullets">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="tl-tags">
                {job.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
