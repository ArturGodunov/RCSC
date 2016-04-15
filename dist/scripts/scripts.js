(function ($) {
    "use strict";

    $(document).ready(function () {
        activateSpeakerText();
        chooseSpeakers();
        scrollToSection();
        countdown();
        validation();
    });

    $(window).scroll(function(){
        checkSection();
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

    function scrollToSection() {
        $('[data-scroll-link]').on('click', function(e) {
            e.preventDefault();
            showSection($(this).data('scroll-link'));
        });
    }

    function showSection(section) {
        var reqSection = $('[data-scroll-section]').filter('[data-scroll-section="' + section + '"]'),
            reqSectionPos = reqSection.offset().top + 1;
        $('body, html').animate({scrollTop: reqSectionPos}, 500);
    }

    function checkSection() {
        $('[data-scroll-section]').each(function(){
            var topEdge = $(this).offset().top,
                bottomEdge = topEdge + $(this).height(),
                wScroll = $(window).scrollTop();
            if (topEdge < wScroll && bottomEdge > wScroll) {
                var currentId = $(this).data('scroll-section'),
                    reqLink = $('.menu').find('[data-scroll-link]').filter('[data-scroll-link="' + currentId + '"]');
                reqLink.addClass('active').siblings().removeClass('active');
            }
        });
    }

    function countdown() {
        var endDate = "May 25, 2016 09:00:00";

        $('.header_time').countdown({
            date: endDate,
            render: function(data) {
                $(this.el).html('<div class="header_time_block">' +
                    '<div class="header_time_number">' + this.leadingZeros(data.days, 2) + '</div>' +
                    '<div class="header_time_text">дней</div>' +
                    '</div>' +
                    '<div class="header_time_block">' +
                    '<div class="header_time_number">' + this.leadingZeros(data.hours, 2) + '</div>' +
                    '<div class="header_time_text">часов</div>' +
                    '</div>' +
                    '<div class="header_time_block">' +
                    '<div class="header_time_number">' + this.leadingZeros(data.min, 2) + '</div>' +
                    '<div class="header_time_text">минут</div>' +
                    '</div>' +
                    '<div class="header_time_block">' +
                    '<div class="header_time_number">' + this.leadingZeros(data.sec, 2) + '</div>' +
                    '<div class="header_time_text">секунд</div>' +
                    '</div>');
            }
        });
    }

    function validation() {
        var $form = $('.form');

        $form
            .on('submit', function() {
                var $inputEmail = $(this).find('input[name="email"]'),
                    $inputRequired = $(this).find('[data-requied]');

                $inputRequired.removeClass('novalid');

                $inputRequired
                    .filter(function() { return !$(this).val(); })
                    .addClass('novalid');

                if ( !validateEmail($inputEmail.val()) ) {
                    $inputEmail
                        .addClass('novalid');
                }

                if ( $inputRequired.hasClass('novalid') ) {
                    return false;
                }

                console.log('Form send');
            });
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /**
     * Google map
     * */
    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(55.7528, 37.6199),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: !1,
            streetViewControl: !1,
            scrollwheel: !1,
            panControl: !1,
            zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_CENTER}
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var styles = [{stylers: [{saturation: -100}]}];
        map.setOptions({styles: styles});
        var marker = new google.maps.Marker({
            map: map,
            draggable: !1,
            position: mapOptions.center
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

})(jQuery);
