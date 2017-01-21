"use strict";
var timeDelay = 0;
var time = 1000;
$("#test").click(function(){
	$(this).toggle();
});
$("#intro span").each(function(i, item){
	setTimeout(function timer(){
		$("#"+i+"-span").delay(2000).animate({"opacity": "1"}, 700);
		timeDelay += time + 2000;
		console.log(timeDelay);
	}, 1000*i);
})

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
setTimeout(function timer(){
	$("#typed-strings").removeClass(".hide");
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
}, 5000);

function newTyped(){ /* A new typed object */ }

function foo(){ 
    let test = document.getElementById("content"); 
    console.log(test);
}
