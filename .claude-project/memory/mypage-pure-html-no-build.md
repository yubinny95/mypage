---
name: mypage-pure-html-no-build
description: Single-file pure HTML/CSS personal intro page — no framework, no npm, no build step
metadata:
  type: project
created: 2026-05-13
---

전체 사이트가 `index.html` 하나로 구성됨. CSS는 `<head>` 내 `<style>` 블록에 인라인. 패키지 매니저, 번들러, 백엔드 없음.

**Why:** 미래 변경 요청(섹션 추가, 스타일 변경, 애니메이션)은 반드시 순수 HTML/CSS/JS 인라인으로 처리해야 함. React, npm 패키지, 외부 빌드 도구 제안 금지.

**How to apply:** `index.html`을 직접 편집. JS가 필요하면 `<body>` 하단에 `<script>` 블록 추가. 새 CSS 파일은 명시 요청 시에만 생성.

[[mypage-design-tokens]]
[[mypage-placeholder-content]]
