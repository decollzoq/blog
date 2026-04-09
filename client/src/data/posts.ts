import { Post } from "../types/post";

export const MOCK_POSTS: Post[] = [
    {
        id: 1,
        thumbnaili: "",
        title: "일 번 포스트",
        date: "2026-04-06",
        category: "개발",
        tags: ["React", "TypeScript", "Tailwind"],
        content: "테일윈드 설치하다가 계속 오류나서 너무 짜증났다 ^_____^",
    },
    {
        id: 2,
        thumbnaili: "",
        title: "이 번 포스트",
        date: "2026-04-07",
        category: "리액트",
        tags: ["React", "TypeScript"],
        content: "두번째 포스팅은 이렇게 될거얌~~",
    },
    {
        id: 3,
        thumbnaili: "",
        title: "삼 번 포스트",
        date: "2026-04-08",
        category: "개발",
        tags: ["React", "TypeScript", "Tailwind"],
        content: "테일윈드 설치하다가 계속 오류나서 너무 짜증났다 ^_____^",
    },
];
