$(function() {
    'use strict';

    // Header, Footer 로드
    $('#header').load('header.html', function(response, status, xhr) {
        if (status === 'error') {
            console.error('Failed to load header.html:', xhr.status);
        }
    });

    $('#footer').load('footer.html', function(response, status, xhr) {
        if (status === 'error') {
            console.error('Failed to load footer.html:', xhr.status);
        }
    });

    // Highlight.js 초기화
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
});