$(function () {
    const logsCode = `{
    "name": "000",
    "email": "000@mail.com",
    "social": {
        "github": "000",
        "notion": "000",
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