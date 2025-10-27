$(function () {
    const aboutCode = `<!DOCTYPE html>
<html lang="ko">
<head>
    <title>안녕하세요, ✨7년 10개월의 실전 경험을 바탕으로, 문제 해결 중심 퍼블리싱✨을 실천하는 웹 퍼블리셔 정송희입니다.</title>
</head>
<body>
    <div class="About me">
        2015년부터 2023년까지 다양한 프로젝트에 참여하며 HTML, CSS, 웹표준과 접근성은 물론,
        유지보수성과 협업 효율을 고려한 퍼블리싱 전략을 체득해왔습니다.

        공백기 동안 일본 취업을 목표로 기술과 언어를 학습했고, 이후 5개월간 일본 현지에서 임베디드 개발자로 일하며
        개발자 간 커뮤니케이션과 문제 해결 능력을 더 확장했습니다.

        이 때의 경험을 바탕으로 디자인, 사용자 경험, 개발 흐름 사이의 유기적 연결을 만드는 퍼블리셔로 지속적으로 성장하고자 합니다.
    </div>
</body>
</html>`;

    const aboutHighlighted = hljs.highlight(aboutCode, { language: 'html' }).value;
    const $codeBlock = $('#panel-about .code-block');
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