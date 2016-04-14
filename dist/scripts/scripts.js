(function ($) {
    "use strict";

    $(document).ready(function () {
        activateSpeakerText();
        chooseSpeakers();
    });

    $(window).load(function () {

    });

    $(window).resize(function () {

    });

    function chooseSpeakers() {
        $('.speakers_item_img').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            activateSpeakerText();
        });
    }

    function activateSpeakerText() {
        var indexSpeaker = $('.speakers_item_img.active').index();
        $('.speakers_item_text').eq(indexSpeaker).addClass('active').siblings().removeClass('active');
    }

})(jQuery);
