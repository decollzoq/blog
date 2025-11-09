import React, { useEffect, useRef } from 'react'

export default function Comments() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    ref.current.innerHTML = ''

    const s = document.createElement('script')
    s.src = 'https://utteranc.es/client.js'
    s.async = true
    s.setAttribute('repo', 'decollzoq/blog-comments')
    s.setAttribute('issue-term', 'pathname')
    s.setAttribute('label', 'comments')
    s.setAttribute('theme', 'github-light')
    s.crossOrigin = 'anonymous'
    ref.current.appendChild(s)

    return () => {
      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [])

  return <div ref={ref} />
}
