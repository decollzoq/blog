import { Post } from "../types/post";

export const categoryList: string[] = ["개발", "리액트", "일상"];

export const MOCK_POSTS: Post[] = [
    {
        id: 1,
        thumbnail:
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
        title: "일 번 포스트",
        date: "2026-04-06",
        category: "개발",
        tags: ["React", "TypeScript", "Tailwind"],
        content: `
# React와 TypeScript로 시작하는 웹 개발

React와 TypeScript의 조합은 현대 웹 개발에서 가장 인기 있는 스택 중 하나입니다. 이번 포스트에서는 왜 이 두 기술을 함께 사용하는지, 그리고 어떻게 시작할 수 있는지 알아보겠습니다.

## TypeScript를 사용하는 이유

TypeScript는 JavaScript에 타입 시스템을 추가한 언어입니다. 다음과 같은 장점이 있습니다:

- **타입 안정성**: 컴파일 타임에 오류를 발견할 수 있습니다
- **자동완성**: IDE에서 더 나은 자동완성을 제공받을 수 있습니다
- **리팩토링**: 코드 리팩토링이 훨씬 안전하고 쉬워집니다

## React와 TypeScript 설정하기

Vite를 사용하면 React + TypeScript 프로젝트를 쉽게 시작할 수 있습니다:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## 컴포넌트 작성하기

TypeScript를 사용한 React 컴포넌트는 다음과 같이 작성할 수 있습니다:

\`\`\`tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={\`btn btn-\${variant}\`}>
      {label}
    </button>
  );
}
\`\`\`

## 마치며

React와 TypeScript는 처음에는 학습 곡선이 있을 수 있지만, 프로젝트가 커질수록 그 가치를 발휘합니다. 타입 안정성을 통해 버그를 줄이고, 더 나은 개발 경험을 얻을 수 있습니다.
    `,
    },
    {
        id: 2,
        thumbnail:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
        title: "이 번 포스트",
        date: "2026-04-07",
        category: "리액트",
        tags: ["React", "TypeScript"],
        content: `# 제주도 겨울 여행기

겨울의 제주도는 여름과는 또 다른 매력을 가지고 있습니다. 한적한 해변, 싱그러운 겨울 바다, 그리고 따뜻한 감귤이 기다리고 있었습니다.

## 여행 일정

3박 4일 동안 제주도를 여행했습니다. 주요 일정은 다음과 같았습니다:

- **1일차**: 제주 공항 도착 → 협재 해수욕장 → 애월 카페 거리
- **2일차**: 성산일출봉 → 섭지코지 → 성산 맛집 투어
- **3일차**: 한라산 등반 → 서귀포 올레시장
- **4일차**: 우도 → 공항

## 인상 깊었던 곳

### 협재 해수욕장

겨울의 협재 해수욕장은 관광객이 적어 조용하고 평화로웠습니다. 에메랄드빛 바다와 하얀 모래사장이 인상적이었습니다.

### 성산일출봉

일출을 보기 위해 새벽 일찍 올랐습니다. 날씨가 좋아 멋진 일출을 볼 수 있었고, 정상에서 바라본 풍경은 정말 장관이었습니다.

## 제주 겨울 여행 팁

- 날씨가 변덕스러우니 따뜻한 옷을 꼭 챙기세요
- 겨울에는 일몰이 빨라요 (오후 5시 30분경)
- 감귤 농장에서 직접 따 먹는 체험도 추천합니다
- 렌터카는 필수! 대중교통은 불편합니다

## 마치며

제주도의 겨울은 조용하고 여유로웠습니다. 북적이는 여름 제주도도 좋지만, 한적한 겨울 제주도만의 매력도 있습니다. 다음에는 봄에 유채꽃이 피었을 때 다시 방문하고 싶습니다.
    `,
    },
    {
        id: 3,
        thumbnail:
            "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop",
        title: "삼 번 포스트",
        date: "2026-04-08",
        category: "개발",
        tags: ["React", "TypeScript", "Tailwind"],
        content: `
# CSS Grid 완벽 가이드

CSS Grid는 2차원 레이아웃 시스템으로, 복잡한 레이아웃을 쉽게 구현할 수 있게 해줍니다. 이번 포스트에서는 CSS Grid의 기본부터 고급 기능까지 살펴보겠습니다.

## Grid 기본 구조

Grid 레이아웃을 만들려면 먼저 컨테이너에 \`display: grid\`를 설정해야 합니다:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## 주요 속성

### grid-template-columns / grid-template-rows

열과 행의 크기를 정의합니다:

\`\`\`css
.container {
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: 100px auto;
}
\`\`\`

### gap

아이템 간 간격을 설정합니다:

\`\`\`css
.container {
  gap: 20px; /* row-gap과 column-gap 동시 설정 */
}
\`\`\`

### grid-area

아이템을 특정 영역에 배치합니다:

\`\`\`css
.header {
  grid-area: 1 / 1 / 2 / 4;
}
\`\`\`

## 실전 예제: 대시보드 레이아웃

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  gap: 20px;
  height: 100vh;
}

.header {
  grid-column: 1 / -1;
}

.sidebar {
  grid-row: 2 / -1;
}

.main {
  grid-column: 2;
  grid-row: 2;
}
\`\`\`

## Flexbox vs Grid

- **Flexbox**: 1차원 레이아웃 (행 또는 열)
- **Grid**: 2차원 레이아웃 (행과 열)

둘 중 하나가 더 좋은 것이 아니라, 상황에 맞게 선택해야 합니다.

## 마치며

CSS Grid는 강력하고 유연한 레이아웃 시스템입니다. 처음에는 복잡해 보일 수 있지만, 익숙해지면 Flexbox와 함께 모든 레이아웃을 쉽게 구현할 수 있습니다.
    `,
    },
    {
        id: 4,
        title: "나만의 아침 루틴 만들기",
        date: "2026.03.20",
        category: "일상",
        tags: ["루틴", "습관", "라이프스타일"],
        thumbnail:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
        content: `
# 나만의 아침 루틴 만들기

좋은 하루는 좋은 아침에서 시작됩니다. 지난 6개월간 실천해온 나만의 아침 루틴을 공유합니다.

## 내 아침 루틴 (6:00 - 8:00)

### 6:00 - 기상 및 스트레칭

알람이 울리면 바로 일어납니다. 침대에서 5분간 가벼운 스트레칭을 합니다.

### 6:15 - 물 한 잔 + 명상

따뜻한 물 한 잔을 마시고, 10분간 명상을 합니다. Headspace 앱을 주로 사용합니다.

### 6:30 - 운동

30분간 가벼운 운동을 합니다:
- 월/수/금: 조깅
- 화/목: 요가
- 주말: 자전거

### 7:00 - 샤워 및 아침 식사

운동 후 샤워하고 간단한 아침 식사를 준비합니다. 주로 오트밀, 과일, 요거트를 먹습니다.

### 7:30 - 독서 또는 글쓰기

30분간 책을 읽거나 일기를 씁니다. 하루를 계획하고 중요한 일 3가지를 정합니다.

## 루틴을 만들 때 팁

1. **작게 시작하기**: 한 번에 모든 것을 바꾸려 하지 마세요
2. **일관성 유지**: 주말에도 같은 시간에 일어나세요
3. **유연하게**: 완벽하지 않아도 괜찮습니다
4. **추적하기**: 습관 추적 앱을 사용하세요

## 6개월 후 변화

- 더 많은 에너지
- 생산성 향상
- 스트레스 감소
- 더 나은 수면의 질

## 마치며

아침 루틴은 하루를 통제할 수 있는 힘을 줍니다. 여러분만의 루틴을 만들어보세요. 작은 변화가 큰 차이를 만듭니다.
    `,
    },
    {
        id: 5,
        title: "생산성을 높이는 개발 도구 추천",
        date: "2026.03.18",
        category: "개발",
        tags: ["개발도구", "VSCode", "생산성"],
        thumbnail:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        content: `
# 생산성을 높이는 개발 도구 추천

개발 생산성을 높이는 데 도움이 되는 도구들을 소개합니다.

## VS Code 확장 프로그램

### 필수 확장

- **Prettier**: 코드 포맷팅
- **ESLint**: 코드 품질 검사
- **GitLens**: Git 히스토리 시각화
- **Auto Rename Tag**: HTML/JSX 태그 자동 수정

### 테마 & UI

- **One Dark Pro**: 인기 있는 다크 테마
- **Material Icon Theme**: 파일 아이콘 테마

## CLI 도구

### 필수 도구

- **Oh My Zsh**: 강력한 쉘 프레임워크
- **fzf**: 퍼지 파인더
- **ripgrep**: 빠른 검색 도구
- **tldr**: 간단한 명령어 설명

### 설치 방법

\`\`\`bash
# Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# fzf
brew install fzf

# ripgrep
brew install ripgrep
\`\`\`

## 생산성 앱

- **Raycast**: macOS용 런처 (Spotlight 대체)
- **Rectangle**: 윈도우 관리
- **Notion**: 노트 및 문서 관리

## 개발 환경 설정

### .zshrc 유용한 alias

\`\`\`bash
alias gs='git status'
alias gp='git pull'
alias gc='git commit -m'
alias ll='ls -la'
\`\`\`

## 마치며

좋은 도구는 개발 생산성을 크게 향상시킵니다. 하지만 도구에만 의존하지 말고, 기본기를 탄탄히 하는 것이 더 중요합니다.
    `,
    },
    {
        id: 6,
        title: "처음 시작하는 홈 카페",
        date: "2026.03.15",
        category: "일상",
        tags: ["커피", "홈카페", "취미"],
        thumbnail:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
        content: `
# 처음 시작하는 홈 카페

집에서 맛있는 커피를 내려 마시는 즐거움. 홈 카페를 시작하는 방법을 소개합니다.

## 필요한 도구

### 기본 세트

1. **커피 그라인더**: 원두를 갈아서 사용해야 신선합니다
2. **드립 도구**: 핸드 드립 도구 (V60, 칼리타 등)
3. **저울**: 정확한 계량이 중요합니다
4. **타이머**: 추출 시간 측정
5. **주전자**: 구스넥 주전자 추천

### 예산별 추천

- **입문 (10만원대)**: 핸드 그라인더 + V60 드리퍼
- **중급 (30만원대)**: 전동 그라인더 + 드립 세트
- **고급 (50만원 이상)**: 에스프레소 머신

## 추천 원두

### 초보자용

- **브라질 산토스**: 부드럽고 고소한 맛
- **콜롬비아 수프리모**: 균형 잡힌 산미와 바디

### 로스팅 정도

- **라이트**: 산미가 강함
- **미디엄**: 균형 잡힌 맛
- **다크**: 쓴맛이 강함

## 핸드 드립 레시피

\`\`\`
원두: 15g
물: 250ml
온도: 92-94°C
추출 시간: 2분 30초 - 3분

1. 원두를 중간 굵기로 분쇄
2. 필터 적시기 (린싱)
3. 원두 투입 후 평평하게
4. 30초간 블루밍 (50ml)
5. 천천히 원을 그리며 추출
\`\`\`

## 보관 방법

- 원두는 밀폐 용기에 보관
- 직사광선을 피하고 서늘한 곳에
- 개봉 후 2주 이내 소비 권장

## 마치며

홈 카페는 비용을 절약하면서도 취미 생활을 즐길 수 있는 좋은 방법입니다. 천천히 하나씩 배워가며 나만의 레시피를 찾아보세요.
    `,
    },
];
