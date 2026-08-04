import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App.jsx'
import './styles.css'

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme')
  const theme = saved === 'light' || saved === 'dark'
    ? saved
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  document.documentElement.dataset.theme = theme
}

export const createRoot = ViteReactSSG(<App />)
