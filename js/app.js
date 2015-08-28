$(function(){
	$("#siteHack").click(function(){
		$("#overlay").addClass("sitehack").removeClass("blank")
		$('.fadeout').html('Close');
		$(".overlayText").html("First Thinkful project. Used the Chrome developer tools to change the content of the New York Times front page.");
		$("#overlay").fadeIn(500);
	});
	$("#siteClone").click(function(){
		$("#overlay").addClass("siteclone").removeClass("blank")
		$('.fadeout').html('Close');
		$(".overlayText").html("Second Thinkful project. Used HTML and CSS to develope a clone of a startup landing page.");
		$("#overlay").fadeIn(500);
	});
	$(".fadeout").click(function(){
		$("#overlay").fadeOut(500);
		$('.fadeout').html('');
		$(".overlayText").html("");
		$("#overlay").addClass("blank")
		$("#overlay").removeClass("sitehack")
		$("#overlay").removeClass("siteclone")
	})

});