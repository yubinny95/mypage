---
name: mypage-git-identity
description: Local git identity (user.name/user.email) set at repo level — no global config
metadata:
  type: project
created: 2026-05-13
---

이 리포지터리의 로컬 git 사용자 설정:
- `user.name = 민유빈`
- `user.email = judy@dmate.kr`

전역 git config에는 identity가 없으므로 이 프로젝트는 로컬 설정에만 의존한다.
새 머신이나 클론 후 작업 시 다음 명령을 먼저 실행:
```
git config user.name "민유빈"
git config user.email "judy@dmate.kr"
```

**Why:** 글로벌 identity 없이 커밋 시 "Author identity unknown" 오류 발생.

**How to apply:** 새 체크아웃 환경에서 커밋 전 위 두 명령 실행.

[[mypage-github-remote]]
