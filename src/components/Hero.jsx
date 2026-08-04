import { Icon } from './Icons.jsx'
import { profile, roles, stackLayers } from '../data.js'
import useTypedText from '../hooks/useTypedText.js'

export default function Hero() {
  const typed = useTypedText(roles)

  return (
    <div className="wrap hero">
      <div>
        <span className='hello'>Hello, I'm</span>
        <h1>
          ARSLAN KHAN
        </h1>
        <p className="hero-tagline">
          I build the whole stack, <br />
          then teach models to reason.
        </p>
        <div className="role-line">
          <Icon.spark strokeWidth="1.6" /><span>{typed}</span><span className="caret"></span>
        </div>
        <p className="lede">
          I'm a Full Stack Engineer based in Islamabad, Pakistan, with over 7 years of experience building scalable web, mobile, and AI/LLM applications across healthcare, e-commerce, education, and SaaS products. Specialized in JavaScript, TypeScript (React.js, Angular, Node.js), Python, C# & ASP.NET, and PHP/Laravel. Proven track record of collaborating with cross-functional teams to modernize legacy systems and deliver production-ready solutions.
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
        <div className="hero-meta">
          <span><Icon.pin strokeWidth="1.6" />{profile.location}</span>
          <a href={`mailto:${profile.email}`}><Icon.mail strokeWidth="1.6" />{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon.linkedin strokeWidth="1.6" />LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Icon.github strokeWidth="1.6" />GitHub</a>
        </div>
      </div>

      <StackViz />
    </div>
  )
}

function StackViz() {
  return (
    <div className="stackviz" aria-hidden="true">
      <div className="stackviz-inner">
        <div className="stackviz-rail"><div className="signal"></div></div>

        {stackLayers.map((layer, i) => {
          const IconCmp = Icon[layer.icon]
          const cls = ['layer', layer.top ? 'top' : '', layer.tone !== 'default' ? layer.tone : ''].filter(Boolean).join(' ')
          return (
            <div className={cls} key={i}>
              <span className="node"><i></i></span>
              <span className="icon"><IconCmp strokeWidth="1.7" /></span>
              <span className="txt"><b>{layer.title}</b><span>{layer.sub}</span></span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
