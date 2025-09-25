import React from 'react'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'
import { Title } from './Header'

type Category = { name: string; count: number; icon: string; active: boolean }

// TODO : 하드코딩 -> 데이터 연결로 변경, active -> 클릭 이벤트로 변경
const DUMMY_CATEGORY: Category[] = [
  { name: '카테고리 1', count: 1, icon: '⭐️', active: false },
  { name: '카테고리 2', count: 99, icon: '💡', active: false }
]

const calcTotal = (items: Category[]) => items.reduce((sum, c) => sum + c.count, 0)
const formatCount = (n: number) => (n > 99 ? '99+' : String(n))
const hasActiveCategory = (items: Category[]) => items.some((it) => it.active)

export default function SideBar() {
  const totalCount = calcTotal(DUMMY_CATEGORY)
  const isAnyActive = hasActiveCategory(DUMMY_CATEGORY)

  return (
    <SideBarWrapper>
      <CategoryListWrapper>
        <CategoryItem data-active={!isAnyActive}>
          <Title>🏠️ All Posts</Title>
          <Badge data-active={!isAnyActive}> {formatCount(totalCount)}</Badge>
        </CategoryItem>

        {DUMMY_CATEGORY.map((c) => (
          <CategoryItem key={c.name} data-active={c.active}>
            <Title>
              {c.icon} {c.name}
            </Title>
            <Badge data-active={c.active}>{formatCount(c.count)}</Badge>
          </CategoryItem>
        ))}
      </CategoryListWrapper>
    </SideBarWrapper>
  )
}

const SideBarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 12px;
  width: 272px;
  background-color: ${Color.background};
`

const CategoryListWrapper = styled.div`
  position: relative;
  width: 232px;
  max-height: 768px;
  overflow-y: auto;
`

// TODO : 버튼으로 변경해서, 선택된 카테고리 기준으로 포스트 필터링
const CategoryItem = styled.div`
  position: relative;
  display: flex;
  border-radius: 8px;
  width: 100%;
  height: 52px;
  padding: 14px 12px;
  background-color: ${Color.background};
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  &[data-active='true'] {
    background-color: ${Color.gray500};
  }
`

const Badge = styled.div`
  min-width: 28px;
  height: 20px;
  padding: 0px 8px;
  border-radius: 9999px;
  background-color: ${Color.gray600};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: ${Color.gray100};
  line-height: 1;

  &[data-active='true'] {
    background-color: ${Color.gray100};
    color: ${Color.gray600};
  }
`
