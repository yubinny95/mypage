# CLAUDE.md

## 세션 시작 시 필수
새 세션 시작 시 `.claude-project/HANDOFF.md`를 반드시 읽어 이전 세션 컨텍스트를 파악한다.

## Project
민유빈 개인 소개 페이지 — Next.js 16.2.6 App Router + TypeScript.
React 19.2.4, ESLint 9.

## Commands
```
npm run dev    # 개발 서버 (http://localhost:3000)
npm run build  # 프로덕션 빌드
npm run start  # 빌드 결과 실행
npm run lint   # ESLint 검사
```

## Structure
```
app/
  layout.tsx      — 루트 레이아웃 (HTML/body 래퍼, 전역 폰트·메타데이터)
  page.tsx        — 홈 페이지 (모든 섹션 컴포넌트 조합)
  globals.css     — 전역 CSS (CSS 커스텀 프로퍼티, 공통 클래스)
  favicon.ico
components/
  Hero.tsx        — 히어로 섹션
  About.tsx       — 소개 섹션
  Skills.tsx      — 기술 스택 섹션
  Experience.tsx  — 경력 섹션
  Contact.tsx     — 연락처 섹션
public/           — 정적 에셋
logo.png          — 프로젝트 루트에 위치한 로고 이미지 (커밋됨)
next.config.ts    — Next.js 설정
tsconfig.json     — TypeScript 설정
eslint.config.mjs — ESLint 설정
```

## Key conventions
- **CSS**: `app/globals.css` 한 파일에만 작성 — CSS 모듈(`.module.css`) 및 Tailwind 사용 안 함
- 컴포넌트별 별도 `.css` 파일 생성 금지 (명시 요청 시 제외)
- CSS 커스텀 프로퍼티(`--primary: #6c63ff` 등)를 사용 — 새 스타일 추가 시 `:root` 변수 참조
- 콘텐츠는 한국어로 작성
- 반응형 레이아웃: `max-width: 720px` 컨테이너, 모바일 우선
- 컴포넌트는 `components/` 디렉터리에 PascalCase `.tsx` 파일로 작성

## Ignored paths
`node_modules/`, `.next/` — gitignore 대상, 수정 불가

## Deployment
GitHub remote: https://github.com/yubinny95/mypage.git (public)
Vercel project: yubin-s-projects/mypage (dashboard: vercel.com/yubin-s-projects/mypage)
Live URL: https://yubin-page.vercel.app
GitHub push → Vercel 자동 재배포 (Next.js 빌더 사용, GitHub 연동됨).
수동 배포: `vercel --prod`

## Branch
기본 브랜치: `master`

## Git
GitHub CLI (`gh`) 사용 가능 — PR, issue, release 작업에 활용.
Push: `git push origin master`
로컬 git identity 설정됨 (`user.name=민유빈`, `user.email=judy@dmate.kr`) — 글로벌 설정 없음, 이 레포에만 적용.
