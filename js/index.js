$(function(){
    $('[data-target]').on('click', function(e){
        e.preventDefault();

        const targetId = $(this).data('target');

        // 모든 콘텐츠 비활성화
        $('.content__item').attr('hidden', true).removeClass('content__item--active');

        // 클릭한 콘텐츠만 활성화
        $('#' + targetId).removeAttr('hidden').addClass('content__item--active');

        // 모든 메뉴 비활성화
        $('.icon-menu__link, .explorer-menu__link, .tab-menu__link').removeClass('icon-menu__link--active explorer-menu__link--active tab-menu__link--active');

        // targetId에 해당하는 메뉴 전부 활성화
        $(`[data-target="${targetId}"]`).each(function(){
            const parent = $(this).closest('li');
            const link = parent.find('a');

            if (link.hasClass('icon-menu__link')) {
                link.addClass('icon-menu__link--active');
            } else if (link.hasClass('explorer-menu__link')) {
                link.addClass('explorer-menu__link--active');
            } else if (link.hasClass('tab-menu__link')) {
                link.addClass('tab-menu__link--active');
            }
        });

        // explorer-menu 클릭 시에만 --click 클래스 추가
        if ($(this).closest('.explorer-menu__item').length > 0) {
            $('.explorer-menu__link').removeClass('explorer-menu__link--click'); // 기존 클릭 제거
            $(this).closest('li').find('.explorer-menu__link').addClass('explorer-menu__link--click');
        } else {
            $('.explorer-menu__link').removeClass('explorer-menu__link--click'); // 다른 메뉴 클릭 시 제거
        }
    });
})