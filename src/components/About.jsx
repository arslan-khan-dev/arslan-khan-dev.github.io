import Reveal from './Reveal.jsx'
import { profile, facts } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow-sm">01 · About</div>
          <h2>Product engineer first, AI trainer second — same instincts either way.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p>
              Full Stack Engineer with over 7 years of experience building web applications in React, Angular, Node.js, and .NET. Since 2024, working at Turing on LLM training, prompt engineering, and reinforcement learning workflows, evaluating and refining model outputs for coding and reasoning tasks. Comfortable across the stack, from building production APIs and interactive UIs to designing prompts and feedback loops that improve AI model behavior.
            </p>
            <p>
              Since December 2024 I've been working with <b>Turing</b>, training and evaluating large language
              models on coding and reasoning tasks. That means writing and refining prompts, running structured
              human feedback through reinforcement learning workflows, and building AI-integrated features that
              connect React and Angular interfaces to LLM-backed services. Different surface, same habit —
              understand the whole system, then make it work reliably.
            </p>
            <p style={{ marginTop: 22 }}>
              Reach me directly at{' '}
              <a className="mailref" href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="fact-list">
              {facts.map((f) => (
                <div className="fact" key={f.k}>
                  <span>{f.k}</span>
                  <span>{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
