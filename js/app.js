"use strict";
$("#test").click(function(){
	$(this).toggle();
});
$("#intro span").each(function(i, item){
	setTimeout(function timer(){
		$("#"+i+"-span").delay(2000).animate({"opacity": "1"}, 700);
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

for (let i = 0; i <= 5; i++) {
    setTimeout(function timer(){
        console.log(i)
    }, 1000*i);
};

function CoolModule(){
    var something = "cool";
    var another = [1,2,3];

    function doSomething(){
        console.log(something);
    }

    function doAnother(){
        console.log(another.join("!"))
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}   

var foo = CoolModule();
foo.doSomething();
foo.doAnother();