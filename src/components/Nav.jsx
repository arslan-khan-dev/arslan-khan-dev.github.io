import { useEffect, useState } from 'react'
import { Icon } from './Icons.jsx'
import { profile } from '../data.js'
import useActiveSection from '../hooks/useActiveSection.js'
import withBase from '../utils/withBase.js'

const LINKS = ['about', 'skills', 'experience', 'work', 'contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const active = useActiveSection(LINKS)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const close = () => setOpen(false)
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo"><span className="dot"></span>Arslan Khan</a>

        <nav className={`navlinks${open ? ' open' : ''}`}>
          {LINKS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={close}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Icon.sun strokeWidth="1.8" /> : <Icon.moon strokeWidth="1.8" />}
          </button>
          <a className="nav-cta" href={withBase('/resume.pdf')} download="Arslan_Khan_Resume.pdf">Download Resume</a>
        </div>

        <button className="navtoggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <Icon.menu strokeLinecap="round" />
        </button>
      </div>
    </header>
  )
}
