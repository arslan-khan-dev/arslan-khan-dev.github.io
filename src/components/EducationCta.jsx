import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'
import { education, profile } from '../data.js'

export default function EducationCta() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow-sm" style={{ marginBottom: 12 }}>05 · Education</div>
        <Reveal className="split-cta">
          <div>
            <span className="edu-cap"><Icon.cap strokeWidth="1.6" /></span>
            <h4>{education.degree}</h4>
            <div className="sub">{education.school}</div>
            <div className="sub2">{education.date}</div>
          </div>
          <div>
            <span className="edu-cap" style={{ background: 'var(--lime-soft)' }}>
              <Icon.spark strokeWidth="1.6" style={{ stroke: 'var(--lime)' }} />
            </span>
            <h4>Open to full-stack & AI-adjacent roles</h4>
            <div className="sub">Remote-friendly · Product engineering, LLM training, or both</div>
            <div className="sub2" style={{ marginTop: 14 }}>
              <a href={`mailto:${profile.email}`} style={{ color: 'var(--lime)' }}>{profile.email} →</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
