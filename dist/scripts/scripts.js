$(document).ready(function () {

    /**
     * Popup Welcome
     * */
    if ( $('body').is('[data-welcome]') ) {
        //$.colorbox({
        //    href: 'popup1.html',
        //    opacity: 1,
        //    arrowKey: false,
        //    closeButton: false,
        //    onComplete: function () {
        //        setTimeout(function () {
        //            $.colorbox.close();
        //        }, 1500)
        //    }
        //});
    }

    /**
     * Popup Transaction Details
     * */
    $('[data-popup-small]').colorbox({
        href:'popup2.html',
        opacity: 1,
        arrowKey: false
    });

    /**
     * Popup Processor Details
     * */
    $('[data-popup-big]').colorbox({
        href:'popup3.html',
        opacity: 1,
        arrowKey: false
    });

    /**
     * Custom select
     * don't use tag 'label' - 2 click
     * */
    $('[data-select]').on('click', function() {
        var list = $(this).find('.select_list');
        list.toggleClass('show');
        $('.select_list').not(list).removeClass('show'); /** Close not current selects */
    });
    $('[data-select-item]').on('click', function() {
        var text = $(this).text(),
            label = $(this).parents('.label');
        label.find('[selected]').val(text);
        label.find('.select_pseudo').text(text);
    });
    /** Closing selects after clicking somewhere */
    $(document).on('click touchstart', function(e) {
        if (!$(e.target).closest('[data-select]').is('[data-select]')) {
            $('.select_list').each(function() {
                $(this).removeClass('show');
            });
        }
    });

    /**
     * Toggle slide
     * */
    $('[data-slide-open]').on('click', function(e) {
        e.preventDefault();
        var slideNumber = $(this).data('slide-open');
        $('[data-slide=' + slideNumber + ']').addClass('show').siblings('[data-slide]').removeClass('show');
    });
    $('[data-slide-close]').on('click', function() {
        $('[data-slide]').removeClass('show');
    });
    /** Closing slides after pressing Esc */
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $('[data-slide]').removeClass('show');
        }
    });

   /**
    * Text overflow
    * */
   $('[data-text-overflow]').each(function() {
       var fullText = $(this).text(),
           lastIndex = fullText.lastIndexOf('\\'),
           copyEndText = fullText.slice(lastIndex);
       $(this).text('..' + copyEndText);
   });

    /**
     * Tooltip string
     * */
    $('[data-tooltip-string]').tooltip({
        position: {
            my: 'left bottom-15',
            at: 'left+10% top',
            using: function(position) {
                $(this).css(position);
                $("<div>").addClass("arrow").appendTo(this);
            }
        }
    });

    /**
     * Tooltip block
     * */
    $('[data-tooltip-block]').tooltip({
        position: {
            my: 'left bottom-15',
            at: 'left top',
            using: function(position) {
                $(this).css(position);
                $("<div>").addClass("arrow").appendTo(this);
            }
        },
        items: '[data-tooltip-block]',
        content:
        '<div class="tooltip_content clr">' +
        '<div class="tooltip_col_1">' +
        '<div>Transaction ID:</div>' +
        '<div>Date:</div>' +
        '<div>User:</div>' +
        '<div>Order ID:</div>' +
        '<div>Authorization Code:</div>' +
        '<div>Avs Response:</div>' +
        '<div>Cvv Response:</div>' +
        '<div>Cavv Response:</div>' +
        '</div>' +
        '<div class="tooltip_col_2">' +
        '<div>05daeeab-23a0-487c-a4a5-7e1b9ad7d8e8</div>' +
        '<div>06/22/2015 12:30:54 PM</div>' +
        '<div>Server$</div>' +
        '<div>635705730407243751</div>' +
        '<div>X6TYWJ</div>' +
        '<div>Address and zip five match - Y</div>' +
        '<div>Not processed - P</div>' +
        '<div>Passed - 2</div>' +
        '</div>' +
        '</div>'
    });

    /** Closing tooltips after touch somewhere */
    $(document).on('touchstart', function() {
        $('[data-tooltip-string], [data-tooltip-block]').tooltip('close');
    });

    /**
     * Prevent scroll
     * */
    $('[data-scroll]').hover(
        function() {
            $('[data-prevent-scroll]').addClass('prevent_scroll');
        },
        function() {
            $('[data-prevent-scroll]').removeClass('prevent_scroll');
        }
    );
});