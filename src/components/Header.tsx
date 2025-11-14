import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import { navigate } from 'gatsby'

const ProfileImageWrapper = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`
interface HeaderProps {
  isTopArea: boolean
}

export default function Header({ isTopArea }: HeaderProps) {
  return (
    <HeaderWrapper isTopArea={isTopArea}>
      <Anchor onClick={() => navigate('/')} style={{ marginTop: '12px', marginLeft: '12px' }}>
        <Title> Minseon._. </Title>
      </Anchor>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header<{ isTopArea: boolean }>`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 0.75rem 1.5rem 1.5rem 1.5rem;
  margin: 0 0 0 0;
  background-color: ${Color.background};
  border-bottom: ${({ isTopArea }) => (isTopArea ? 'none' : `1px solid ${Color.gray600}`)};
  box-shadow: ${({ isTopArea }) => (isTopArea ? 'none' : `0 1px 4px rgba(0, 0, 0, 0.05)`)};
  align-items: center;
  justify-content: center;
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 45vw;
  margin: 0 auto;
  cursor: pointer;
  flex-direction: row;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${Color.gray100};
`
