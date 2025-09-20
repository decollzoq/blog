import styled from '@emotion/styled'
import ProfileImage from './img/ProfileImage'

export default function Header() {
  return (
    <HeaderWrapper>
      <ProfileImage />
      <Title>박민선</Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: sticky;
  z-index: 1;
  flex-direction: row;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 77px;
  padding: 12px 10px 12px 28px;
  margin: 0 0 0 0;
  background-color: #fff;
`

const Title = styled.div`
  margin-top: 12px;
  margin-left: 16px;
  font-size: 20px;
  font-weight: 700;
`
