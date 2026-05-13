# HANDOFF.md — 민유빈 개인 소개 페이지

## Session Digest

두 번째 세션에서 순수 HTML/CSS 단일 파일 구조를 **Next.js 16.2.6 + TypeScript** 풀스택으로 전면 마이그레이션했습니다.
App Router 구조로 전환하고, 섹션별 컴포넌트 분리, 전역 CSS 변수 체계 도입, 빌드·배포 검증까지 완료한 상태입니다.

- 원격 저장소: https://github.com/yubinny95/mypage.git
- 라이브 URL: **https://yubin-page.vercel.app**
- 브랜치: `master` (Vercel 프로덕션 추적 중)

---

## Progress

### 완료된 작업

- [x] `index.html` 단일 파일 생성 (인라인 CSS 포함)
- [x] Hero 섹션 — 이름, 직함, 한 줄 소개, 아바타 플레이스홀더
- [x] About Me 섹션 — 자기소개 텍스트
- [x] Skills 섹션 — HTML/CSS, JavaScript, React, TypeScript, Node.js, Git, Figma 태그
- [x] Experience 섹션 — 타임라인 레이아웃 (플레이스홀더 회사명 포함)
- [x] Contact 섹션 — 이메일, LinkedIn, GitHub 링크
- [x] 반응형 레이아웃 (max-width 720px, 모바일 대응)
- [x] Git 저장소 초기화 및 최초 커밋
- [x] GitHub 리모트 설정 → `origin/master` 동기화 완료
- [x] Node.js + Vercel CLI 설치
- [x] Vercel 배포 완료 — https://yubin-page.vercel.app (라이브 상태)
- [x] GitHub push → Vercel 자동 재배포 연동 활성화
- [x] **Next.js 16.2.6 마이그레이션** — App Router + TypeScript + ESLint
- [x] 섹션 컴포넌트 분리 — `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Contact.tsx`
- [x] `app/globals.css` — 전역 CSS 변수 체계 도입 (Tailwind·CSS Modules 미사용)
- [x] `next build` 성공 — 정적 사전 렌더링(static prerender) 통과
- [x] Contact 섹션 GitHub 링크를 실제 URL(https://github.com/yubinny95)로 업데이트

### 미완료 / 플레이스홀더 상태

- [ ] 실제 프로필 사진 (현재 `👤` 이모지 플레이스홀더)
- [ ] 실제 회사명 (Experience 섹션에 `○○○ 회사` × 2개)
- [ ] LinkedIn 실제 URL 연결 (현재 `href="#"`)
- [ ] Experience 섹션 직책명·날짜 확인 및 수정

---

## Next Steps (우선순위 순)

1. **콘텐츠 실제화** — `components/Experience.tsx`에서 `○○○ 회사`(2곳)를 실제 회사명·직책·날짜로 교체; `components/Contact.tsx`의 LinkedIn `href="#"`를 실제 프로필 URL로 수정 → `git push`하면 Vercel 자동 재배포
2. **프로필 이미지 교체** — `components/Hero.tsx`의 `👤` 플레이스홀더를 `<Image>` 컴포넌트(`next/image`)로 교체; 원형 클리핑 유지를 위해 `.avatar`에 `overflow: hidden` 확인
3. **(선택) 다크 모드** — `app/globals.css`의 CSS 변수를 `@media (prefers-color-scheme: dark)` 블록에 오버라이드하여 구현 가능
4. **(선택) 스크롤 애니메이션** — Intersection Observer API 또는 `framer-motion` 라이브러리로 섹션 진입 시 페이드인 효과 추가
5. **(선택) 추가 섹션/기능** — 프로젝트 포트폴리오 섹션, OG 메타태그(SNS 공유 미리보기, `app/layout.tsx`의 `metadata` 객체에 추가), 커스텀 도메인(Vercel 대시보드 → Settings → Domains)

---

## Blockers

현재 해결되지 않은 블로커 없음.

| 항목 | 상태 | 비고 |
|------|------|------|
| ~~Git push 불가~~ | **해결됨** | `origin/master`에 전체 커밋 푸시 완료 |
| ~~배포 불가~~ | **해결됨** | Vercel 배포 완료 — https://yubin-page.vercel.app 라이브 |
| ~~프레임워크 없음~~ | **해결됨** | Next.js 16.2.6 + TypeScript 마이그레이션 완료, 빌드 통과 |

---

## Watch Out

- **CSS는 전역 스코프** — 현재 `app/globals.css` 하나에 모든 스타일이 정의되어 있음. 새 페이지나 컴포넌트 추가 시 클래스명이 겹치지 않도록 주의 (예: 새 섹션 추가 시 `.hero-`, `.about-` 등 접두사 패턴 유지). CSS Modules(`.module.css`)나 Tailwind로 전환하면 충돌 위험을 근본적으로 제거할 수 있음
- **아바타 이미지 교체** — `<img>` 또는 `next/image`로 교체 시 `.avatar` 클래스에 `overflow: hidden` 확인 필수 (원형 클리핑 유지)
- **LinkedIn URL** — `components/Contact.tsx`에서 `href="#"` 상태. 클릭 시 이동하지 않으므로 실제 URL로 교체 필수
- **Experience 플레이스홀더** — `components/Experience.tsx`에 `○○○ 회사`가 2군데 존재. 날짜·직책도 실제 경력 기준으로 반드시 확인·수정 필요
- **브랜치 이름** — 기본 브랜치가 `master`임. Vercel도 `master`를 프로덕션으로 추적 중. 브랜치명 변경 시 Vercel 설정도 함께 변경해야 함
- **Vercel 자동 재배포** — `origin/master`에 push하면 Vercel이 `next build`를 실행 후 자동 배포함. 별도 배포 명령 불필요
- **next/image 사용 권장** — 외부 이미지 사용 시 `next.config.ts`의 `images.domains` 또는 `images.remotePatterns`에 도메인 추가 필요

---

## 프로젝트 구조

```
mypage/
├── app/
│   ├── layout.tsx        # 루트 레이아웃 (메타데이터, 전역 폰트)
│   ├── page.tsx          # 메인 페이지 — 섹션 컴포넌트 조립
│   └── globals.css       # 전역 CSS (CSS 변수, 리셋, 공통 스타일)
├── components/
│   ├── Hero.tsx          # 이름·직함·아바타·소개
│   ├── About.tsx         # 자기소개 텍스트
│   ├── Skills.tsx        # 기술 스택 태그 목록
│   ├── Experience.tsx    # 경력 타임라인 (플레이스홀더 포함)
│   └── Contact.tsx       # 이메일·LinkedIn·GitHub 링크
├── public/               # 정적 파일 (이미지 등)
├── next.config.ts
├── tsconfig.json
├── package.json
└── HANDOFF.md            # 이 파일
```

---

## Files Touched (이번 세션)

| 파일 | 상태 | 설명 |
|------|------|------|
| `app/layout.tsx` | 신규 생성 | 루트 레이아웃, HTML 메타데이터 |
| `app/page.tsx` | 신규 생성 | 메인 페이지 — 컴포넌트 조립 |
| `app/globals.css` | 신규 생성 | 전역 CSS 변수·스타일 (기존 `index.html` 인라인 CSS에서 분리) |
| `components/Hero.tsx` | 신규 생성 | Hero 섹션 컴포넌트 |
| `components/About.tsx` | 신규 생성 | About 섹션 컴포넌트 |
| `components/Skills.tsx` | 신규 생성 | Skills 섹션 컴포넌트 |
| `components/Experience.tsx` | 신규 생성 | Experience 섹션 컴포넌트 |
| `components/Contact.tsx` | 신규 생성 | Contact 섹션 컴포넌트 (GitHub URL 실제 주소로 업데이트) |
| `next.config.ts` | 신규 생성 | Next.js 설정 |
| `tsconfig.json` | 신규 생성 | TypeScript 컴파일러 설정 |
| `package.json` | 갱신 | Next.js 16.2.6 의존성 추가 |
| `HANDOFF.md` | 갱신 | 이 파일 — Next.js 마이그레이션 완료 후 상태 반영 |
| `index.html` | 레거시 | 순수 HTML 원본 (Next.js 전환 후 불필요, 삭제 가능) |
| `vercel.json` | 유지 | Vercel 배포 설정 |
| `.gitignore` | 유지 | `.vercel/`, `node_modules/` 등 제외 목록 |

---

## Tech Stack

| 항목 | 버전/내용 |
|------|-----------|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript |
| Linter | ESLint |
| Styling | 전역 CSS (`app/globals.css`) — CSS 변수 기반, Tailwind·CSS Modules 미사용 |
| Build | `next build` — 정적 사전 렌더링(static prerender) |
| Hosting | Vercel (GitHub `master` 브랜치 자동 배포) |
| Node.js | ≥18 권장 |
