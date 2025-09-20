import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export default function Footer() {
  return <FooterWrapper>Thank You for Visiting My Blog 🍅</FooterWrapper>
}

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`
