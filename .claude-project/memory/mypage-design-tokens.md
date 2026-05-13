---
name: mypage-design-tokens
description: Blue-primary CSS custom property color system (DMATE branding) defined in :root
metadata:
  type: project
created: 2026-05-13
updated: 2026-05-13
---

위치: `app/globals.css` `:root` 블록.

디자인 토큰 (`:root` CSS 변수):
- `--primary: #0057B8` — 메인 DMATE 블루
- `--primary-dark: #003A85` — 다크 블루 (호버 등)
- `--primary-light: #4D94FF` — 라이트 블루
- `--accent: #00C4FF` — 시안 액센트
- `--dark: #0A1628` — 제목/강조 텍스트
- `--gray: #6B7280` — 본문 텍스트
- `--light-gray: #F4F7FB` — 섹션 교대 배경
- `--light: #F7FAFF` — 밝은 배경
- `--white: #FFFFFF` — 흰색
- `--border: #DDE5F0` — 카드 테두리

**Why:** 이전 퍼플(#6c63ff) 테마에서 DMATE 블루(#0057B8) 테마로 전환됨.
새 UI 요소는 임의 hex 대신 이 변수를 참조해야 시각적 일관성 유지.

**How to apply:** 인터랙티브/액센트 → `var(--primary)`, 그라디언트 → `linear-gradient(90deg, var(--primary), var(--accent))`, 본문 → `var(--gray)`, 제목 → `var(--dark)`, 교대 섹션 배경 → `var(--light-gray)`.

[[mypage-nextjs-stack]]
