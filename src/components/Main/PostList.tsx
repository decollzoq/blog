import React from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import RecentPostSection from './RecentPost'

const DUMMY_POST = Array.from({ length: 6 }).map((_, i) => ({
  title: `포스트 제목 ${i + 1}`,
  category: i % 2 ? '카테고리1' : '카테고리2',
  date: '2025년 9월 20일'
}))

const RecentFull = styled(RecentPostSection)`
  grid-column: 1 / -1;
  margin-bottom: 48px;
`

export default function PostList() {
  return (
    <Wrap>
      <RecentFull />
      {DUMMY_POST.map((p) => (
        <PostItem key={p.title} title={p.title} category={p.category} date={p.date} thumb />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
  grid-auto-rows: minmax(200px, auto);
`
