import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'
import { skillGroups } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-sm">02 · Skills</div>
          <h2>Technologies & Expertise.</h2>
          <p>A curated set of technologies, frameworks, and tools I use to design, develop, deploy, and scale modern web applications and AI-powered solutions.</p>
        </Reveal>

        <Reveal className="skills-grid">
          {skillGroups.map((group) => {
            const IconCmp = Icon[group.icon]
            const cls = ['skill-card', group.tone !== 'default' ? group.tone : ''].filter(Boolean).join(' ')
            return (
              <div className={cls} key={group.title}>
                <div className="skill-head">
                  <span className="ic"><IconCmp strokeWidth="1.6" /></span>
                  <div>
                    <h4>{group.title}</h4>
                    {group.sub ? <p>{group.sub}</p> : null}
                  </div>
                </div>
                <ul className="skill-items">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="item-icon" aria-hidden="true"><Icon.bullet strokeWidth="2" /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
