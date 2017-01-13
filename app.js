$("#test").click(function(){
	$(this).toggle();
});
$("#crm-project").click(function(){
	// document.getElementById("overlay").style.width = "100%";
	// document.getElementById("overlay").style.height = "100%";
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
$("#logo").click(function(){
	$(".test").fadeToggle("ease");
})