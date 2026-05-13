# CLAUDE.md

## 세션 시작 시 필수
새 세션 시작 시 `.claude-project/HANDOFF.md`를 반드시 읽어 이전 세션 컨텍스트를 파악한다.

## Project
민유빈 개인 소개 페이지 — 단일 파일 정적 웹사이트 (`index.html`).
빌드 도구, 의존성, 패키지 매니저 없음.

## Structure
- `index.html` — 전체 프로젝트: HTML 마크업 + 인라인 `<style>` 블록 + 한국어 콘텐츠

## Key conventions
- 모든 CSS는 `index.html` 내 `<style>` 블록에 인라인으로 작성 — 별도 `.css` 파일 생성 금지 (명시 요청 시 제외)
- 콘텐츠는 한국어로 작성
- CSS 커스텀 프로퍼티(`--primary: #6c63ff` 등)를 사용 — 새 스타일 추가 시 `:root` 변수 참조
- 반응형 레이아웃: `max-width: 720px` 컨테이너, 모바일 우선

## No build step
브라우저에서 `index.html`을 바로 열어 미리보기. `npm`, `vite`, `webpack` 없음.

## Deployment
정적 파일 단독 배포 가능 — GitHub Pages, Netlify 등에 `index.html` 하나만 업로드.
GitHub remote: https://github.com/yubinny95/mypage.git (public)
GitHub Pages URL (Settings → Pages → master / root 활성화 시): https://yubinny95.github.io/mypage/
Vercel project: yubin-s-projects/mypage (dashboard: vercel.com/yubin-s-projects/mypage)
Live URL: https://yubin-page.vercel.app
`vercel.json` 포함됨 — Vercel 설정 파일.
GitHub push → Vercel 자동 재배포 (GitHub 연동됨).
수동 배포: `vercel --prod`

## Branch
기본 브랜치: `master`

## Git
GitHub CLI (`gh`) 사용 가능 — PR, issue, release 작업에 활용.
Push: `git push origin master`
