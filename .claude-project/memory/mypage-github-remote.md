---
name: mypage-github-remote
description: GitHub repo URL and auth context for the mypage project
metadata:
  type: project
created: 2026-05-13
---

리포지터리: https://github.com/yubinny95/mypage (public)
원격 이름: `origin`
프로토콜: HTTPS
GitHub 인증 계정: `yubinny95` (gh CLI, keyring 저장)

**Why:** push/PR/release 작업 시 올바른 원격과 계정을 재확인 없이 바로 사용 가능.

**How to apply:** `git push origin master` (HTTPS). gh CLI는 `yubinny95` 계정으로 인증된 상태. 원격이 이미 설정되어 있으므로 `git remote add` 불필요.

git identity: 글로벌 config 없음 — 로컬 설정만 존재. 새 환경 클론 시 재설정 필요 ([[mypage-git-identity]] 참조).

[[mypage-nextjs-stack]]
