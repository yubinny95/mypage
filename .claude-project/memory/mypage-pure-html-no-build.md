---
name: mypage-nextjs-stack
description: Next.js 16.2.6 + TypeScript 프로젝트 구조 및 CSS 컨벤션
metadata:
  type: project
created: 2026-05-13
updated: 2026-05-13
---

스택: Next.js 16.2.6, React 19.2.4, TypeScript, ESLint 9, App Router.

구조:
- `app/layout.tsx` — 루트 레이아웃 (메타데이터, globals.css 임포트)
- `app/page.tsx` — 홈 페이지 (모든 섹션 컴포넌트 조합)
- `app/globals.css` — 전역 CSS (CSS 변수 + 모든 컴포넌트 스타일)
- `components/` — Hero.tsx, About.tsx, Skills.tsx, Experience.tsx, Contact.tsx

CSS 컨벤션:
- `app/globals.css` 한 파일에만 작성 — CSS 모듈, Tailwind, 컴포넌트별 `.css` 파일 사용 안 함
- 클래스명은 JSX `className=` 에 plain string으로 사용
- Google Fonts 없음

커맨드: `npm run dev` / `npm run build` / `npm run lint`
Gitignore: `node_modules/`, `.next/`

**Why:** 이전 순수 HTML 구조에서 Next.js로 마이그레이션됨. 미래 변경은 `.tsx` 컴포넌트와 `globals.css` 편집으로 처리.

**How to apply:** 새 섹션 추가 → `components/` 에 PascalCase `.tsx` 파일 생성, `globals.css`에 스타일 추가, `app/page.tsx`에 임포트. 별도 CSS 파일 생성 금지.

[[mypage-design-tokens]]
[[mypage-vercel-deployment]]
