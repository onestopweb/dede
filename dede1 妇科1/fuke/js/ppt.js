// JavaScript Document

; (function ($) {
    $.fn.extend({
        "ppting": function (t) {
			var num = 4; //共多少张要轮播的
            var $this = $(this), i = 0, $pics = $('.ppt'), autoChange = function () {
                var $currentPic = $pics.find('a:eq(' + (i + 1 === num ? 0 : i + 1) + ')');
                $currentPic.css({
                    display: 'block'
                }).siblings('a').css({
                    display: 'none'
                });
                $pics.find('.pptNum>span:contains(' + (i + 2 > num ? num - i : i + 2) + ')').attr('class', 'cur').siblings('span').attr('class', 'normal');
                i = i + 1 === num ? 0 : i + 1;
            }, st = setInterval(autoChange, t || 2000);
            $this.hover(function () {
                clearInterval(st);
            }, function () { st = setInterval(autoChange, t || 2000) });
            $pics.find('.pptNum>span').click(function () {
                i = parseInt($(this).text(), 10) - 2;
                autoChange();
            });
        }
    });
}(jQuery));

$('.ppt').ppting(1000);
