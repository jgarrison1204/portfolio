"use strict";

$("#test").click(function(){
	$(this).toggle();
});
$("#intro span").each(function(i, item){
	setTimeout(function timer(){
		$("#"+i+"-span").delay(2000).animate({"opacity": "1"}, 700);
	}, 1000*i);
})

var expertiseText = $("#expertise").height();
console.log($("#categories").height())
$("#expertise-text").css("margin-bottom", (expertiseText/2 + 10));

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
    // console.log(test);
}
//Attempting to implement smoothscrolling with jQUery for a single anchor tag. May refactor to 
//implement smooth scrolling for all <a>;
$("a").click(function(e){
	//setting binding context for this. Probably unnessecarry but making sure we can explain everything that's going on.
	var self = this;
	//this.hash returns the href from an <a> and returns the part of the URL begining with a #
	//if there is a # in the href (e.g. its an internal reference) then do stuff.
	if (self.hash) {
		//prevent default behavior of <a> to immediately scroll to #	
		e.preventDefault();
		//store self.hash in varable with lexical scope.
		var idHash = self.hash;
		// Use jQuery's animate() to set the scrolltop (number of pixels from the top of window) to
		//to top of categories section.
		//jQuery verison of offsetTop which returns the top position in pixels relative to the parent element in this case body.
		//set speed in miliseconds to 1500 could use plug-ins to adjust easing speeds http://jqueryui.com/
		$('body').animate({
			scrollTop: $(idHash).offset().top
		}, 1500);
	}
})