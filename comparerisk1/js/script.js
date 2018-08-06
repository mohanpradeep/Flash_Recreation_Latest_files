$(document).ready(function() {
    $('.val-box').hover(function() {
        var tab_id = $(this).attr('data-tab');
        $('.val-box').removeClass('current');
        $('.val-box').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
	$('.circle img').addClass('demo');
});

