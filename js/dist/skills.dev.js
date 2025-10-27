"use strict";

$(function () {
  var skillsCode = "/* \uC6F9 \uD37C\uBE14\uB9AC\uC154 \uC815\uC1A1\uD76C\uC758 \uAE30\uC220 \uC5ED\uB7C9 */\n\n    /* \uD83C\uDFA8 Graphics */\n\n    .photoshop::before {\n        content: \"UI \uCEF4\uD3EC\uB10C\uD2B8 \uBD84\uD574 \uBC0F \uC0C1\uC138\uD398\uC774\uC9C0 \uC81C\uC791 \uC2E4\uBB34 \uACBD\uD5D8 \uBCF4\uC720\";\n    }\n\n    .illustrator::before {\n        content: \"\uBCA1\uD130 \uC544\uC774\uCF58 \uC815\uB9AC \uB2A5\uB825\uC73C\uB85C \uC77C\uAD00\uB41C \uBE44\uC8FC\uC5BC \uC720\uC9C0 \uAC00\uB2A5\";\n    }\n\n    .figma::before {\n        content: \"\uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8 \uD65C\uC6A9 \uACBD\uD5D8 \uAE30\uBC18\uC73C\uB85C \uB192\uC740 \uC774\uD574\uB3C4 \uBCF4\uC720\";\n    }\n\n\n    /* \uD83D\uDCBB Coding */\n\n    .html::before {\n        content: \"<section>, <article> \uB4F1 \uC2DC\uB9E8\uD2F1 \uD0DC\uADF8\uB85C \uD074\uB9B0 \uB9C8\uD06C\uC5C5 \uAD6C\uD604 \uAC00\uB2A5\";\n    }\n\n    .css::before {\n        content: \"SCSS \uBB38\uBC95 \uC774\uD574, \uC2A4\uD0C0\uC77C \uC0C1\uC18D \uBC0F \uBCC0\uC218 \uD65C\uC6A9 \uB2A5\uC219\";\n    }\n\n    .jquery::before {\n        content: \"\uC2AC\uB77C\uC774\uB354, \uD31D\uC5C5 \uB4F1 \uC2E4\uBB34 \uC911\uC2EC \uAD6C\uD604 \uACBD\uD5D8 \uD48D\uBD80\";\n    }\n\n    .webFont::before {\n        content: \"\uC6F9\uD3F0\uD2B8 \uC801\uC6A9 \uBC0F \uCD5C\uC801\uD654 \uACBD\uD5D8 \uB2E4\uC218\";\n    }\n\n    .fontIcon::before {\n        content: \"SVG \uAE30\uBC18 \uBCA1\uD130\uB97C \uD3F0\uD2B8\uC544\uC774\uCF58\uC73C\uB85C \uD65C\uC6A9 \uAC00\uB2A5\";\n    }\n\n\n    /* \uD83C\uDF81 \uAE30\uD0C0 */\n\n    .git::before {\n        content: \"\uBC84\uC804 \uAD00\uB9AC \uBAA9\uC801\uC758 Git \uD65C\uC6A9 \uACBD\uD5D8 \u6709\";\n    }\n\n    .chatGPT::before {\n        content: \"GPT API\uC640 Notion \uC5F0\uB3D9\uD558\uC5EC \uB274\uC2A4 \uC790\uB3D9\uD654 \uC218\uC9D1 \uC2DC\uC2A4\uD15C \uAD6C\uD604\";\n    }";
  var skillsHighlighted = hljs.highlight(skillsCode, {
    language: 'css'
  }).value;
  var $codeBlock = $('#panel-skills .code-block');
  if (!$codeBlock.length) return;
  var lines = skillsHighlighted.split('\n');
  var html = lines.map(function (line, i) {
    return "\n        <div class=\"code-line code-line".concat(i + 1, "\">\n        <span class=\"line-number\">").concat(i + 1, "</span>\n        <span class=\"code-text\">").concat(line || '&nbsp;', "</span>\n        </div>\n    ");
  }).join('');
  $codeBlock.html(html);
});