import styled from '@emotion/styled'
import { Color } from 'src/models/color'

const PROFILE_IMAGE = 'https://i.ifh.cc/mpapcv.jpg'

const ProfileImageWrapper = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <ProfileImageWrapper src={PROFILE_IMAGE} alt='Profile Iamge' />
      <Title style={{ marginTop: '12px', marginLeft: '12px' }}>박민선</Title>
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
  background-color: ${Color.background};
`

export const Title = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: ${Color.gray100};
  width: fit-content;
`
