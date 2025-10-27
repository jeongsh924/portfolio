"use strict";

$(function () {
  var logsCode = "{\n    \"name\": \"\uC815\uC1A1\uD76C\",\n    \"email\": \"jeong.sh924@gmail.com\",\n    \"social\": {\n        \"github\": \"https://github.com/jeongsh924\",\n        \"notion\": \"https://www.notion.so/298a67e9ff3a805ebc46cd934d1389c9\",\n    }\n  }";
  var aboutHighlighted = hljs.highlight(logsCode, {
    language: 'json'
  }).value;
  var $codeBlock = $('#panel-contact .code-block');
  if (!$codeBlock.length) return;
  var lines = aboutHighlighted.split('\n');
  var html = lines.map(function (line, i) {
    return "\n        <div class=\"code-line code-line".concat(i + 1, "\">\n        <span class=\"line-number\">").concat(i + 1, "</span>\n        <span class=\"code-text\">").concat(line || '&nbsp;', "</span>\n        </div>\n    ");
  }).join('');
  $codeBlock.html(html);
});