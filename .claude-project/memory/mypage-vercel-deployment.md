---
name: mypage-vercel-deployment
description: Vercel project config, production URL, and deploy command for mypage
metadata:
  type: project
created: 2026-05-13
---

Vercel 배포 정보:
- 계정: `yubinny95-9561`
- 프로젝트: `yubin-s-projects/mypage`
- Production URL: https://yubin-page.vercel.app
- builder: `@vercel/static` (vercel.json)
- Vercel CLI: v53.4.0 (전역 설치)

**Why:** 배포 요청 시 URL, 계정, 명령어를 재조회 없이 즉시 참조 가능.

**How to apply:** `git push origin master` → GitHub 연동으로 자동 재배포. 수동 배포는 `vercel --prod`. 정적 파일 전용이므로 빌드 단계 없음. vercel.json의 builder는 `@vercel/static` 유지.

[[mypage-github-remote]]
[[mypage-pure-html-no-build]]
