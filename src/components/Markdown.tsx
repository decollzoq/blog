import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  html: string
}

export function MarkDown({ html }: Props) {
  return <Article dangerouslySetInnerHTML={{ __html: html }} />
}

const Article = styled.article`
  ${({ theme }) => css`
    /** image */
    img {
      border-radius: 4px;
    }

    p > img {
      width: 100%;
    }

    strong {
      font-weight: 700;
      text-decoration: underline;
    }

    em {
      font-style: italic;
    }

    /* Default Text */

    p {
      color: ${theme.color.primary1};
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.02rem;
      word-break: keep-all;
    }

    a {
      transition: color 0.25s ease;
      color: ${theme.color.blue1};
      text-decoration: none;
    }
    a:hover,
    a:visited {
      color: ${theme.color.blue1};
      text-decoration: underline;
    }

    sup {
      vertical-align: super;
      & > a {
        font-size: 0.8rem;
        &::before {
          content: '[';
        }
        &::after {
          content: ']';
        }
      }
    }

    p,
    table,
    ul,
    blockquote,
    ol {
      font-size: 1rem;
      margin: 0 0 1rem;
    }

    center {
      color: ${theme.color.blue1};
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: -0.02rem;
      margin: 0 0 1rem;
    }

    p + center,
    iframe + center {
      margin-top: -1rem;
    }

    /* Heading */

    h1,
    h2,
    h3,
    h4,
    h5 {
      position: relative;
      color: ${theme.color.primary1};
      line-height: 1.2;
      scroll-margin-top: 80px;
      letter-spacing: -0.02rem;
      font-weight: 600;
      background: none;

      & > a {
        color: ${theme.color.primary1};
        opacity: 0;
        border: none;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%, -50%);
        padding-right: 4px;
      }

      &:hover > a {
        color: ${theme.color.primary1};
        background: none;
        border: none;
        opacity: 1;
      }
    }

    h2:not(:first-of-type),
    h3:not(:first-of-type),
    h4:not(:first-of-type),
    h5:not(:first-of-type) {
      margin-top: 3rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 0 0 1rem;
    }

    h1 {
      font-size: 2.5rem;
      filter: brightness(0.8);
    }
    h2 {
      font-size: 1.8rem;
      filter: brightness(1);
    }

    h3 {
      font-size: 1.4rem;
      filter: brightness(1.3);
    }

    h4 {
      filter: brightness(1.5);
      font-size: 1.1rem;
      padding-bottom: 0.25rem;
      text-transform: uppercase;
    }

    /* ul, li */

    ul,
    ol {
      padding-left: 1.5rem;
      box-sizing: border-box;
      line-height: 1.6;

      & ul {
        margin-top: 8px;
      }

      & ul,
      & ol {
        margin-bottom: 0;
      }
    }

    ul {
      list-style: disc;
    }

    ol {
      list-style: decimal;
    }

    ul li {
      margin-bottom: 0.5rem;

      &::marker {
        font-weight: 600;
        color: ${theme.color.blue1};
      }
    }

    ol li {
      margin-bottom: 0.5rem;

      &::marker {
        font-weight: 600;
        color: ${theme.color.blue1};
      }
    }

    li > a {
      white-space: inherit;
      word-wrap: break-word;
    }

    li {
      color: ${theme.color.primary1};

      & code {
        font-weight: 600;
        color: ${theme.color.blue1};
        white-space: inherit;

        & * span {
          white-space: inherit;
        }

        & * span:not([class='grvsc-source']) {
          padding-left: 0 !important;
        }
      }
    }
    li > code {
      display: inline-block;
      background-color: ${theme.color.gray600};
      color: ${theme.color.red1};
      font-family: var(--code-font-family);
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1.5;
    }

    /* iframe */

    iframe {
      margin-bottom: 2rem;
    }

    /* Code */
    div[class*='markdown-wrapper'] {
      font-size: 0.9rem;
      text-size-adjust: none;
      margin: 1rem -1rem;
      overflow-x: auto;
      overflow-y: hidden;
      box-sizing: border-box;
      background-color: var(--scrollbar-background);
      padding-left: 2rem;

      /** 파이어폭스 스크롤 대응 */
      scrollbar-width: 8px;
      // thumb background 순
      scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-background);

      /** 사파리, 크롬 스크롤 대응 */
      &::-webkit-scrollbar {
        background: var(--scrollbar-background);
        height: 8px;
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb);
        border-radius: 0;
      }

      @media screen and (min-width: 1350px) {
        margin-left: -3.5rem;
        margin-right: -3.5rem;
        margin-bottom: 2rem;
      }

      @media screen and (max-width: 1024px) {
        padding-left: 1rem;
      }
    }

    pre {
      width: 100%;
      overflow-x: auto;
      border-radius: 0;
      margin-bottom: 0;
      margin-top: 0;
      min-width: calc(100% + 1rem);
      padding: 1rem 1rem 1rem 0;
      margin-bottom: 1rem;
      -webkit-font-smoothing: subpixel-antialiased;
      white-space: pre;
      font-family: var(--code-font-family);
      word-wrap: normal;
      hyphens: none;
      line-height: 1.5;
      tab-size: 2;
      word-break: normal;
      word-spacing: normal;
      border-radius: 4px;

      @media screen and (max-width: 1024px) {
        min-width: 100%;
      }

      & > code {
        font-weight: 600;
        color: ${theme.color.gray400};
        white-space: inherit;

        & * span {
          white-space: inherit;
        }

        & * span:not([class='grvsc-source']) {
          padding-left: 0 !important;
        }
      }
    }

    p > code {
      font-weight: 600;
      color: ${theme.color.red1};
      white-space: inherit;
      padding: 2px 4px;
      border-radius: 4px;
      background-color: ${theme.color.gray600};
      letter-spacing: unset;

      & * span {
        white-space: inherit;
      }

      & * span:not([class='grvsc-source']) {
        padding-left: 0 !important;
      }
    }

    img[class='gatsby-resp-image-image'] {
      box-shadow: none !important;
    }

    img[class='gatsby-resp-image-image'][alt]:after {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${theme.color.primary0};
      font-weight: 200;
      content: '이미지를 표시할 수 없어요. :(';
    }

    blockquote {
      background: transparent;
      margin: 0 -1rem;
      margin-bottom: 2rem;
      padding: 0.5rem 1rem;
      border-left: 6px solid ${theme.color.gray300};

      & > p {
        color: ${theme.color.gray400};
        margin-bottom: 0;
      }

      @media screen and (min-width: 1350px) {
        margin-left: -1.35rem;
        margin-right: -1.35rem;
      }

      @media screen and (max-width: 1024px) {
        padding-left: 1rem;
      }
    }

    hr {
      border: none;
      border-top: 1px solid ${theme.color.gray400};
      margin: 1.5rem 0 2.5rem;
      opacity: 0.8;
    }
  `}
`
