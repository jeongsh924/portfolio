$(function () {
    const logsCode = `{
    "name": "정송희",
    "email": "jeong.sh924@gmail.com",
    "social": {
        "github": "https://github.com/jeongsh924",
        "notion": "https://www.notion.so/298a67e9ff3a805ebc46cd934d1389c9",
    }
  }`;

    const aboutHighlighted = hljs.highlight(logsCode, { language: 'json' }).value;
    const $codeBlock = $('#panel-contact .code-block');
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