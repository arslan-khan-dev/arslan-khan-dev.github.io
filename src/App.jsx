import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import EducationCta from './components/EducationCta.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCta />
        <Contact />
      </main>
    </>
  )
}
