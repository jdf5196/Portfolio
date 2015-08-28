$(function(){
	$("#siteHack").click(function(){
		$("#overlay").addClass("sitehack").removeClass("blank")
		$('.fadeout').html('Close');
		$('.overlaySource').html('');
		$('.overlayDemo').html('');
		$(".overlayText").html("First Thinkful project. Used the Chrome developer tools to change the content of the New York Times front page.");
		$("#overlay").fadeIn(500);
	});
	$("#siteClone").click(function(){
		$("#overlay").addClass("siteclone").removeClass("blank")
		$('.fadeout').html('Close');
		$('.overlaySource').html('');
		$('.overlayDemo').html('');
		$(".overlayText").html("Second Thinkful project. Used HTML and CSS to develop a clone of a startup landing page.");
		$("#overlay").fadeIn(500);
	});
	$("#shoppingList").click(function(){
		$("#overlay").addClass("shoppinglist").removeClass("blank")
		$('.fadeout').html('Close');
		$('.overlaySource').html('Source Code');
		$('.overlayDemo').html('Demo');
		$('.overlaySource')[0].setAttribute("href","https://github.com/jdf5196/Shopping-List");
		$('.overlayDemo')[0].setAttribute("href","http://jdf5196.github.io/Shopping-List/");
		$(".overlayText").html("Third Thinkful project. Used HTML, CSS and jQuery to create a list making app that allows users to add, crossout, and delete items.");
		$("#overlay").fadeIn(500);
	});
	$("#hotorcold").click(function(){
		$("#overlay").addClass("hotorcold").removeClass("blank")
		$('.fadeout').html('Close');
		$('.overlaySource').html('Source Code');
		$('.overlayDemo').html('Demo');
		$('.overlaySource')[0].setAttribute("href","https://github.com/jdf5196/Hot-or-Cold");
		$('.overlayDemo')[0].setAttribute("href","http://jdf5196.github.io/Hot-or-Cold/");
		$(".overlayText").html("Fourth Thinkful project. Used JavaScript to generate a random number and allow users to guess what it is while giving hints as to how close they are.");
		$("#overlay").fadeIn(500);
	});
	$("#quiz").click(function(){
		$("#overlay").addClass("quiz").removeClass("blank")
		$('.fadeout').html('Close');
		$('.overlaySource').html('Source Code');
		$('.overlayDemo').html('Demo');
		$('.overlaySource')[0].setAttribute("href","https://github.com/jdf5196/Quiz-app-final");
		$('.overlayDemo')[0].setAttribute("href","http://jdf5196.github.io/Quiz-app-final/");
		$(".overlayText").html("Fifth Thinkful project. Used HTML, CSS, JavaScript to create a quiz app that gives users feedback as to whether they are right or wrong, and gives them a score when they finish.");
		$("#overlay").fadeIn(500);
	});
	$("#api").click(function(){
		$("#overlay").addClass("api").removeClass("blank")
		$('.fadeout').html('Close');
		$('.overlaySource').html('Source Code');
		$('.overlayDemo').html('Demo');
		$('.overlaySource')[0].setAttribute("href","https://github.com/jdf5196/API-Hack");
		$('.overlayDemo')[0].setAttribute("href","http://jdf5196.github.io/API-Hack/main.html");
		$(".overlayText").html("Sixth Thinkful project. Used HTML, CSS, JavaScript and AJAX to create a weather app that allows users to guess the current temperature using the World Weather Online API.");
		$("#overlay").fadeIn(500);
	});
	$(".fadeout").click(function(){
		$("#overlay").fadeOut(500);
		$('.fadeout').html('');
		$(".overlayText").html("");
		$("#overlay").addClass("blank");
		$("#overlay").removeClass("sitehack");
		$("#overlay").removeClass("shoppinglist");
		$("#overlay").removeClass("hotorcold");
		$("#overlay").removeClass("quiz");
		$("#overlay").removeClass("api");
		$("#overlay").removeClass("siteclone");
	})

});