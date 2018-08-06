// JavaScript Document

$(document).ready(function(){
    $("#show").hover(function(){
        $("span.redball").fadeTo( "slow", 1 );

    });
	
	  $("#disp").hover(function(){
        $("span.lftredball").fadeTo( "slow", 1 );
    });
});