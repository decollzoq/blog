import styled from '@emotion/styled'
import { Color } from 'src/models/color'

export const Thumb = styled.div`
  aspect-ratio: 16/9;
  background: ${Color.gray500};
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid ${Color.gray600};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

export const PostInfo = styled.span`
  font-size: 12px;
  color: ${Color.gray300};
`

export const HeadingArea = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 72px;
  padding-bottom: 64px;
  margin-bottom: 100px;
  border-bottom: 1px solid ${Color.gray500};
  @media (max-width: 959px) {
    height: auto;
    gap: 6px;
    margin-bottom: 32px;
  }
`

export const CategoryName = styled.h1`
  font-size: 40px;
  color: ${Color.gray100};
  font-weight: bold;

  @media (max-width: 959px) {
    font-size: 32px;
  }
`
export const CountOfPosts = styled.h2`
  font-size: 20px;
  color: ${Color.gray400};
  font-weight: normal;

  @media (max-width: 959px) {
    font-size: 16px;
  }
`
