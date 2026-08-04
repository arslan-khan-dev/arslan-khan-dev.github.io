import useReveal from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', delay, className = '', children, ...rest }) {
  const [ref, inView] = useReveal()
  const d = delay ? ` d${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal${inView ? ' in' : ''}${d} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
