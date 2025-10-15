"use strict";

$(function () {
  var $tabs = $('[role="tab"]');
  var $panels = $('[role="tabpanel"]');
  $tabs.on('click', function () {
    e.preventDefault();
    var $targetTab = $(this);
    var panelId = $targetTab.attr('aria-controls');
    var $targetPanel = $('#' + panelId);
    $panels.each(function () {
      $(this).attr('hidden', true).removeClass('content__item--active');
    });
  });
});