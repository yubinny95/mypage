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
- builder: Next.js 빌더 (Vercel 자동 감지, vercel.json 없음)
- Vercel CLI: v53.4.0 (전역 설치)

**Why:** 배포 요청 시 URL, 계정, 명령어를 재조회 없이 즉시 참조 가능.

**How to apply:** `git push origin master` → Vercel이 Next.js 빌드 자동 실행 후 배포. 수동 배포는 `vercel --prod`. vercel.json 별도 불필요 (Next.js 자동 감지).

[[mypage-github-remote]]
[[mypage-nextjs-stack]]
