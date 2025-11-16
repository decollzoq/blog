import React from 'react'
import styled from '@emotion/styled'
import { Color } from 'src/models/color'

type Props = {
  categories: Record<string, number>
}

export default function SideBar({ categories }: Props) {
  const totalCount = Object.values(categories).reduce((sum, count) => sum + count, 0)

  return (
    <SideBarWrapper>
      <CategoryListWrapper>
        <CategoryItem data-active='true'>
          All Posts
          <Badge data-active='true'> {totalCount}</Badge>
        </CategoryItem>

        {Object.entries(categories).map(([category, count]) => (
          <CategoryItem key={category} data-active='false'>
            {category}
            <Badge data-active='false'>{count}</Badge>
          </CategoryItem>
        ))}
      </CategoryListWrapper>
    </SideBarWrapper>
  )
}

const SideBarWrapper = styled.aside`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  width: 272px;
  height: 100%;
  background-color: ${Color.background};
  border: 1px solid ${Color.gray600};
`

const CategoryListWrapper = styled.div`
  position: relative;
  width: 232px;
  max-height: 768px;
  overflow-y: auto;
  border: 1px solid ${Color.gray600};
`

const CategoryItem = styled.button`
  box-sizing: border-box;

  position: relative;
  display: flex;
  border-radius: 8px;
  width: 100%;
  height: 52px;
  padding: 14px 12px;
  background-color: ${Color.background};
  justify-content: space-between;
  align-items: center;
  &[data-active='true'] {
    font-size: 20px;
    color: ${Color.primary0};
  }
  font-size: 16px;
  font-weight: bold;
  color: ${Color.gray400};
  cursor: pointer;
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
