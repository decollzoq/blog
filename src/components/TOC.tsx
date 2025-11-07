import { Color } from 'src/models/color'
import styled from '@emotion/styled'
import React from 'react'

export default function TOC({ tableOfContents }: { tableOfContents: string }) {
  return (
    <TOCWrapper>
      <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
    </TOCWrapper>
  )
}

const TOCWrapper = styled.aside`
  position: fixed;
  top: 280px;
  right: 16px;
  width: 220px;
  max-height: 600px;
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
