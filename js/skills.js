$(function(){
    const skillsCode = `/* 웹 퍼블리셔 정송희의 기술 역량 */

    /* 🎨 Graphics */

    .photoshop::before {
        content: "UI 컴포넌트 분해 및 상세페이지 제작 실무 경험 보유";
    }

    .illustrator::before {
        content: "벡터 아이콘 정리 능력으로 일관된 비주얼 유지 가능";
    }

    .figma::before {
        content: "개인 프로젝트 활용 경험 기반으로 높은 이해도 보유";
    }


    /* 💻 Coding */

    .html::before {
        content: "<section>, <article> 등 시맨틱 태그로 클린 마크업 구현 가능";
    }

    .css::before {
        content: "SCSS 문법 이해, 스타일 상속 및 변수 활용 능숙";
    }

    .jquery::before {
        content: "슬라이더, 팝업 등 실무 중심 구현 경험 풍부";
    }

    .webFont::before {
        content: "웹폰트 적용 및 최적화 경험 다수";
    }

    .fontIcon::before {
        content: "SVG 기반 벡터를 폰트아이콘으로 활용 가능";
    }


    /* 🎁 기타 */

    .git::before {
        content: "버전 관리 목적의 Git 활용 경험 有";
    }

    .chatGPT::before {
        content: "GPT API와 Notion 연동하여 뉴스 자동화 수집 시스템 구현";
    }

    .cursor::before {
        content: "프로젝트별 Custom MDC 규칙 설계를 통한 마크업 및 CSS 빌드 자동화 생산성 극대화";
    }
    `;

    const skillsHighlighted = hljs.highlight(skillsCode, { language: 'css' }).value;
    const $codeBlock = $('#panel-skills .code-block');
    if (!$codeBlock.length) return;

    const lines = skillsHighlighted.split('\n');
    const html = lines.map((line, i) => `
        <div class="code-line code-line${i + 1}">
        <span class="line-number">${i + 1}</span>
        <span class="code-text">${line || '&nbsp;'}</span>
        </div>
    `).join('');

    $codeBlock.html(html);
})