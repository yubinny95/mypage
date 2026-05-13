# HANDOFF.md — 민유빈 개인 소개 페이지

## Session Digest

민유빈(judy@dmate.kr)의 한국어 개인 소개 웹페이지를 순수 HTML/CSS만으로 처음부터 제작했습니다.
프레임워크나 빌드 도구 없이 단일 파일(`index.html`)로 완성되었으며, Git 초기 커밋(525daab)까지 완료된 상태입니다.
현재 Git 리모트가 없어 외부 배포는 아직 되지 않은 상태입니다.

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
- [x] Git 저장소 초기화 및 최초 커밋 (`525daab`)

### 미완료 / 플레이스홀더 상태

- [ ] 실제 프로필 사진 (현재 `👤` 이모지 플레이스홀더)
- [ ] 실제 회사명 (Experience 섹션에 `○○○ 회사`로 표기)
- [ ] LinkedIn / GitHub 실제 URL 연결 (`#`로 임시 처리)
- [ ] Git 리모트 설정
- [ ] 배포 (GitHub Pages, Netlify 등)

---

## Next Steps (우선순위 순)

1. **콘텐츠 실제화** — Experience의 `○○○ 회사`를 실제 회사명/직책으로 교체, LinkedIn·GitHub URL 실제 주소로 수정
2. **프로필 이미지 교체** — `👤` 플레이스홀더를 실제 사진(`<img>` 태그)으로 변경
3. **Git 리모트 연결** — GitHub/GitLab에 새 저장소 생성 후 아래 명령으로 연결:
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin master
   ```
4. **배포** — GitHub Pages 활성화(Settings → Pages → Branch: master / root) 또는 Netlify 드래그앤드롭으로 즉시 배포 가능
5. **(선택) 추가 기능** — 다크 모드 토글, 스크롤 애니메이션, OG 메타태그(SNS 공유 미리보기)

---

## Blockers

| 항목 | 이유 | 해결 방법 |
|------|------|-----------|
| **Git push 불가** | 리모트(origin)가 설정되지 않음 | GitHub 등에 빈 저장소를 만들고 `git remote add origin <url>` 실행 |
| **배포 불가** | 리모트 없으므로 GitHub Pages/Netlify 연동 불가 | 위 Blocker 해결 후 배포 진행 |

---

## Watch Out

- **Experience 섹션 날짜** — `2024 — 현재` 및 `2022 — 2024`는 실제 경력과 다를 수 있으므로 반드시 확인·수정 필요
- **LinkedIn / GitHub URL** — 현재 `href="#"`로 처리되어 클릭 시 이동하지 않음. 배포 전 실제 URL로 교체 필수
- **아바타 이미지** — `<img>` 태그로 교체 시 CSS `.avatar` 클래스에 `overflow: hidden` 추가 필요 (원형 클리핑 유지)
- **브랜치 이름** — 현재 기본 브랜치가 `master`임. GitHub 기본값(`main`)과 다를 수 있으니 push 시 브랜치명 확인
- **빌드 도구 없음** — 순수 HTML/CSS 단일 파일이므로 npm, node_modules 등 불필요. 배포 시 `index.html` 하나만 업로드하면 됨

---

## Files Touched

| 파일 | 상태 | 설명 |
|------|------|------|
| `index.html` | 신규 생성 | 전체 소개 페이지 (HTML + 인라인 CSS, 289줄) |
| `.git/` | 초기화 | `git init` + 최초 커밋 `525daab` |
| `HANDOFF.md` | 신규 생성 | 이 파일 |
