$(function () {
    const logsCode = `# 작업 로그

## 2015~2016 : 퍼블리싱 입문
- HTML/CSS 기초 문법 숙달, 퍼블리셔로 업무 시작
- IE 대응 및 반응형 기초 작업 다수 경험
- 이벤트성 단발 페이지 위주의 제작

## 2017~2019 : 반복 작업 최적화 중심
- 수십 건의 유사한 레이아웃 제작 작업
- jQuery 기반 공통 스크립트 패턴 파악 및 템플릿화
- 코드 복붙이 아닌 구조 재사용 관점으로 사고 전환
- 사내에서 퍼블리싱 전면 담당

## 2020~2022 : 유지보수 및 구조화 주도
- 레거시 HTML 정리 및 공통화
- ASP.NET 변수 구조 분석 및 C# 이해도 향상
- SCSS 도입 제안 및 시범 적용 (디자인 팀 협업 기반)

## 2023~2024 : 자동화 및 도전
- 일본 임베디드 개발자로 취직 성공
- Notion API + ChatGPT 기반 뉴스 수집 자동화 시스템 개발`;

    const aboutHighlighted = hljs.highlight(logsCode, { language: 'markdown' }).value;
    const $codeBlock = $('#panel-logs .code-block');
    if (!$codeBlock.length) return;

    const lines = aboutHighlighted.split('\n');
    const html = lines.map((line, i) => `
        <div class="code-line code-line${i + 1}">
        <span class="line-number">${i + 1}</span>
        <span class="code-text">${line || '&nbsp;'}</span>
        </div>
    `).join('');

    $codeBlock.html(html);
});