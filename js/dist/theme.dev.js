"use strict";

$(function () {
  // 테마 매핑 정의
  var themes = {
    'dark': {
      hljs: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/vs2015.min.css',
      dataTheme: 'dark'
    },
    'light': {
      hljs: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/vs.min.css',
      dataTheme: 'light'
    },
    'sublime-dark': {
      hljs: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/monokai.min.css',
      dataTheme: 'sublime-dark'
    }
  }; // 버튼 클릭 시 테마 변경

  $('.setting-card__btn').on('click', function () {
    var themeKey = $(this).data('theme');
    var theme = themes[themeKey];
    if (!theme) return; // highlight.js 테마 적용

    $('#hljs-theme').attr('href', theme.hljs); // body 테마 속성 적용

    $('body').attr('data-theme', theme.dataTheme); // 테마 저장

    localStorage.setItem('selected-theme', themeKey);
  }); // 저장된 테마 적용

  var savedTheme = localStorage.getItem('selected-theme');

  if (savedTheme && themes[savedTheme]) {
    $('#hljs-theme').attr('href', themes[savedTheme].hljs);
    $('body').attr('data-theme', themes[savedTheme].dataTheme);
  }
});