$(function () {
    var currentTheme = 'vs2015';
    $('#switch-theme').on('click', function () {
    var themeLink = $('#hljs-theme');

    if (currentTheme === 'vs2015') {
        themeLink.attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css');
        currentTheme = 'github';
    } else {
        themeLink.attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/vs2015.min.css');
        currentTheme = 'vs2015';
    }
    });
});