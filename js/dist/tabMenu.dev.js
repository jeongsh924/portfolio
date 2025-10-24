"use strict";

$(function () {
  var $tabList = $('.tab-menu__list');
  var $scrollbar = $('.tab-menu-scrollbar');
  var $scrollInner = $('.tab-menu-scrollbar__inner');

  function syncWidth() {
    var paddingLeft = 20;
    var contentWidth = $tabList.get(0).scrollWidth;
    $scrollInner.css('width', contentWidth + paddingLeft + 'px');
  } // 초기 동기화 및 리사이즈 대응


  syncWidth();
  $(window).on('resize', syncWidth); // 양방향 스크롤 동기화

  $scrollbar.on('scroll', function () {
    $('.tab-menu').scrollLeft($(this).scrollLeft());
  });
  $('.tab-menu').on('scroll', function () {
    $scrollbar.scrollLeft($(this).scrollLeft());
  });
});