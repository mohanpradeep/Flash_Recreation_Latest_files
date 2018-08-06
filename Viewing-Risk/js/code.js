$(function() {
    $("#slider-vertical").slider({
        orientation: "vertical",
        range: "min",
        min: 1,
        max: 3,
        value: 10,
        slide: function(event, ui) {
            $("#amount").val(ui.value);
            if (ui.value == 3) {
                $("#amount").val('1/10');
                $("#amount2").val('10%');
                $(".radius-block").css('width', 40);
                $(".radius-block").css('height', 40);
				$(".person").removeClass('twoimg');
            } else if (ui.value == 2) {
                $("#amount").val('1/50');
                $("#amount2").val('2%');
                $(".radius-block").css('width', 30);
                $(".radius-block").css('height', 30);
				$(".person").addClass('twoimg');
				$(".person").removeClass('oneimg');
				
            } else {
                $("#amount").val('1/100');
                $("#amount2").val('0.1%');
                $(".radius-block").css('width', 25);
                $(".radius-block").css('height', 25);
				$(".person").addClass('oneimg');
				$(".person").removeClass('twoimg');
				
            }
        }
    });

    $("#amount").val('1/10');
});