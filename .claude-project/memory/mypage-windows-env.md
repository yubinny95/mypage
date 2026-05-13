---
name: mypage-windows-env
description: Windows 11 개발 환경 — Node, npm, PowerShell 실행 정책 주의사항
metadata:
  type: user
created: 2026-05-13
---

이 개발 환경 (Windows 11):
- Node.js: v24.15.0 (winget으로 설치)
- npm: v11.12.1 — PowerShell에서 `npm` 단독 실행 시 ps1 정책 오류 발생 가능 → `npm.cmd` 사용
- PowerShell 실행 정책: `RemoteSigned` (CurrentUser 범위 설정 완료)
- Vercel CLI: `vercel` 명령 정상 동작

**Why:** CLI 명령 실행 시 `npm` vs `npm.cmd` 구분 및 실행 정책 오류를 사전 방지.

**How to apply:** PowerShell에서 npm 스크립트 실행 시 `npm.cmd` 사용. 실행 정책 오류 재발 시 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force` 재적용.
