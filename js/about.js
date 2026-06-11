$(function () {
    const aboutCode = `<!DOCTYPE html>
<html lang="ko">
<head>
    <title>안녕하세요, ✨8년 5개월의 실전 경험을 바탕으로, 문제 해결 중심 퍼블리싱✨을 실천하는 웹 퍼블리셔 정송희입니다.</title>
</head>
<body>
    <div class="About me">
        2015년부터 2023년까지 다양한 프로젝트에 참여하며 HTML, CSS, 웹표준과 접근성은 물론,
        유지보수성과 협업 효율을 고려한 퍼블리싱 전략을 체득해왔습니다.

        공백기 동안 일본 취업을 목표로 기술과 언어를 학습했고, 이후 5개월간 일본 현지에서 임베디드 개발자로 일하며
        개발자 간 커뮤니케이션과 문제 해결 능력을 더 확장했습니다.

        이후 고속 구축 중심의 웹에이전시 환경에서 다수의 신규 프로젝트를 수행하며 실무 스킬셋을 한 단계 더 극대화했습니다. 

        Cursor AI와 Claude를 단순 활용하는 것을 넘어, 프로젝트 맞춤형 규칙 파일(.mdc)을 직접 설계하여 도구로서 완벽히 통제했습니다. 
        웹 표준 기반의 시맨틱 마크업 규칙을 AI에 엄격히 강제함으로써 마크업 품질의 균일화를 이뤄냈고, 
        퍼블리셔 혼자서도 다인분의 빌드 속도를 내는 효율적인 프로세스를 정립했습니다.

        오랜 시간 다져온 견고한 설계 능력과 자동화 역량을 바탕으로 하여
        프로젝트 전반의 유기적인 연결을 만드는 퍼블리셔로 기여하겠습니다.
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