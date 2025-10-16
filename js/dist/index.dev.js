"use strict";

$(function () {
  $('[data-target]').on('click', function (e) {
    e.preventDefault();
    var targetId = $(this).data('target'); // 모든 콘텐츠 비활성화

    $('.content__item').attr('hidden', true).removeClass('content__item--active'); // 클릭한 콘텐츠만 활성화

    $('#' + targetId).removeAttr('hidden').addClass('content__item--active'); // 모든 메뉴 비활성화

    $('.icon-menu__link, .explorer-menu__link, .tab-menu__link').removeClass('icon-menu__link--active explorer-menu__link--active tab-menu__link--active'); // targetId에 해당하는 메뉴 전부 활성화

    $("[data-target=\"".concat(targetId, "\"]")).each(function () {
      var parent = $(this).closest('li');
      var link = parent.find('a');

      if (link.hasClass('icon-menu__link')) {
        link.addClass('icon-menu__link--active');
      } else if (link.hasClass('explorer-menu__link')) {
        link.addClass('explorer-menu__link--active');
      } else if (link.hasClass('tab-menu__link')) {
        link.addClass('tab-menu__link--active');
      }
    }); // explorer-menu 클릭 시에만 --click 클래스 추가

    if ($(this).closest('.explorer-menu__item').length > 0) {
      $('.explorer-menu__link').removeClass('explorer-menu__link--click'); // 기존 클릭 제거

      $(this).closest('li').find('.explorer-menu__link').addClass('explorer-menu__link--click');
    } else {
      $('.explorer-menu__link').removeClass('explorer-menu__link--click'); // 다른 메뉴 클릭 시 제거
    } // footer status-bar language 변경


    var tabText = $(".tab-menu__item[data-target=\"".concat(targetId, "\"]")).find('.tab-menu__text').text().trim();
    var fileExtension;

    if (tabText.includes('.')) {
      var parts = tabText.split('.');
      fileExtension = parts[parts.length - 1]; // css
    } else {
      // '.'이 없으면 기본값을 html로 설정
      fileExtension = 'html';
    }

    var languageMap = {
      html: 'HTML',
      css: 'CSS',
      js: 'JavaScript',
      md: 'Markdown',
      json: 'JSON',
      scss: 'SCSS'
    };
    var language; // fileExtension이 languageMap에 있는지 확인

    if (languageMap.hasOwnProperty(fileExtension)) {
      // 있으면 해당 값을 사용
      language = languageMap[fileExtension];
    } else {
      // 없으면 fileExtension을 대문자로 변환해서 사용
      language = fileExtension.toUpperCase();
    }

    $('.status-bar__item--language .status-bar__text').text(language);
  });
  $('.code-block').each(function () {
    var $wrapper = $(this);
    var codeText = $wrapper.find('code').text();
    var lines = codeText.split('\n').length;
    var $lineNumbers = $wrapper.find('.line-numbers');

    for (var i = 1; i <= lines; i++) {
      $lineNumbers.append('<span>' + i + '</span>');
    }
  });
});