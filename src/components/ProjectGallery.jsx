import { useEffect, useRef, useState } from 'react'
import withBase from '../utils/withBase.js'

export default function ProjectGallery({ images, url }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  const restart = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % images.length)
    }, 3200)
  }

  useEffect(() => {
    restart()
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length])

  return (
    <div className="browser">
      <div className="browser-bar">
        <i></i><i></i><i></i>
        <span className="url mono">{url}</span>
      </div>
      <div
        className="frame"
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={restart}
      >
        {images.map((img, i) => (
          <img
            key={img.src}
            src={withBase(img.src)}
            alt={img.alt}
            className={i === idx ? 'show' : ''}
          />
        ))}
        <div className="dots">
          {images.map((_, i) => (
            <i
              key={i}
              className={i === idx ? 'on' : ''}
              onClick={() => { setIdx(i); restart() }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
