---
name: mypage-placeholder-content
description: Experience company names and social links are placeholders — must be replaced before publishing
metadata:
  type: project
created: 2026-05-13
---

현재 플레이스홀더 상태인 항목:
- `components/Experience.tsx`: `○○○ 회사` × 2 (실제 회사명으로 교체 필요)
- `components/Contact.tsx`: LinkedIn `href="#"` (실제 LinkedIn URL 교체 필요)
- `components/Hero.tsx`: `👤` 이모지 아바타 (실제 사진으로 교체 권장)

해결된 항목:
- ~~GitHub 링크~~: `https://github.com/yubinny95` 로 업데이트 완료 ✅

**Why:** 배포/공유 전 실제 정보로 채워야 함.

**How to apply:** 사용자가 배포·공유를 요청하면 위 항목 교체 여부를 먼저 확인. 아바타를 `<img>`로 교체 시 `.avatar { overflow: hidden; }` (globals.css)에 추가 필요.

[[mypage-nextjs-stack]]
