"use strict";
$("#test").click(function(){
	$(this).toggle();
});
$("#crm-project").click(function(){
	$(".overlay").fadeIn(2000);
	$("#close-btn-wrapper").removeClass("spin");
})
$("#close-btn-wrapper").click(function(){
	$(this).addClass("spin");
	$("#overlay").delay(1000).animate({
		width: 'hide'
	});
})
$('.carousel').carousel({
  interval: 2000
})
//jQuery plug in 
$(function(){
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 30,
        backDelay: 500,
        loop: true,
        contentType: 'html',
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });
});

function newTyped(){ /* A new typed object */ }

function foo(){ 
    let test = document.getElementById("content"); 
    console.log(test);
}
