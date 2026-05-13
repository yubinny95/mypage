---
name: mypage-design-tokens
description: Purple-primary CSS custom property color system defined in :root
metadata:
  type: project
created: 2026-05-13
---

디자인 토큰 (`:root` CSS 변수):
- `--primary: #6c63ff` — 메인 퍼플 액센트
- `--primary-light: #a29bfe` — 라이트 퍼플
- `--dark: #2d2d2d` — 제목/강조 텍스트
- `--gray: #6b7280` — 본문 텍스트
- `--light: #f8f9fa` — 배경
- `--border: #e5e7eb` — 카드 테두리
- `#f0eeff` — 소프트 퍼플 틴트 (태그/아이콘 배경)

**Why:** 새 UI 요소(버튼, 태그, 카드)는 임의 hex 값 대신 이 변수를 참조해야 시각적 일관성 유지.

**How to apply:** 인터랙티브/액센트 요소 → `var(--primary)`, 본문 → `var(--gray)`, 제목 → `var(--dark)`, 퍼플 틴트 배경 → `#f0eeff`.

[[mypage-pure-html-no-build]]
