import { Color } from 'src/models/color'
import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'

export default function TOC({ tableOfContents }: { tableOfContents: string }) {
  const tocRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = tocRef.current
    if (!el) {
      return
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) {
        return
      }

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#')) {
        return
      }

      event.preventDefault()
      const id = decodeURIComponent(href.slice(1))
      const heading = document.getElementById(id)
      if (!heading) {
        return
      }

      heading.scrollIntoView({ behavior: 'smooth', block: 'start' })

      const newUrl = `${window.location.pathname}#${href}`
      window.history.replaceState(null, '', newUrl)
    }

    el.addEventListener('click', handleClick)

    return () => {
      el.removeEventListener('click', handleClick)
    }
  }, [])
  return (
    <TOCContainer>
      <div ref={tocRef} dangerouslySetInnerHTML={{ __html: tableOfContents }} />
    </TOCContainer>
  )
}

const TOCContainer = styled.aside`
  position: fixed;
  top: 200px;
  right: 16px;
  width: 220px;
  height: fit-content;
  max-height: 400px;
  overflow: auto;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  z-index: 10;
  font-weight: 600;

  @media (max-width: 1200px) {
    display: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 12px;
    font-size: 16px;
  }

  li > p {
    margin: 0;
  }

  li > a,
  li p > a {
    display: block;
    width: 100%;
    padding: 6px 8px;
    margin: 4px 0;
    border-radius: 8px;
    text-decoration: none;
    color: ${Color.gray400};
    transition:
      background-color 0.15s ease,
      color 0.15s ease;
  }

  i > a:hover,
  li > p > a:hover,
  li > a:hover,
  li > a:focus {
    background-color: ${Color.gray600};
    color: ${Color.gray200};
  }
`
