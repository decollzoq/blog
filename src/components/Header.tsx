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
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export default function Header({ isTopArea, sidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <HeaderWrapper isTopArea={isTopArea}>
      <HeaderInner>
        <LeftArea>
          <HamburgerButton type='button' onClick={onToggleSidebar}>
            {sidebarOpen ? '<' : '☰'}
          </HamburgerButton>
        </LeftArea>
        <CenterArea>
          <Anchor onClick={() => navigate('/')}>
            <Title> Minseon._. </Title>
          </Anchor>
        </CenterArea>
        <RightArea />
      </HeaderInner>
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
  margin: 0;
  background-color: ${Color.background};
  border-bottom: ${({ isTopArea }) => (isTopArea ? 'none' : `1px solid ${Color.gray600}`)};
  box-shadow: ${({ isTopArea }) => (isTopArea ? 'none' : `0 1px 4px rgba(0, 0, 0, 0.05)`)};
`
const HeaderInner = styled.div`
  height: 70px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LeftArea = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const RightArea = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const CenterArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${Color.gray100};
`

const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: ${Color.gray500};

  font-size: 32px;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`
