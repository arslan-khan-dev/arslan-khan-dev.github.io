import { useEffect, useRef, useState } from 'react'

export default function useTypedText(words, { typeMs = 46, deleteMs = 28, holdMs = 1500 } = {}) {
  const [text, setText] = useState('')
  const ri = useRef(0)
  const ci = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timer
    const tick = () => {
      const full = words[ri.current]
      if (!deleting.current) {
        ci.current++
        setText(full.slice(0, ci.current))
        if (ci.current === full.length) {
          deleting.current = true
          timer = setTimeout(tick, holdMs)
          return
        }
      } else {
        ci.current--
        setText(full.slice(0, ci.current))
        if (ci.current === 0) {
          deleting.current = false
          ri.current = (ri.current + 1) % words.length
        }
      }
      timer = setTimeout(tick, deleting.current ? deleteMs : typeMs)
    }
    timer = setTimeout(tick, typeMs)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return text
}
