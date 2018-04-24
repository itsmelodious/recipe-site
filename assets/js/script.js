$(document).ready(function() {
	$(".description").addClass("hidden");
})

$(window).load(function()  {
	$("#guide-icon, #guide-caption").click(function() { // jQuery Function Number 1
		$("html, body").animate({ scrollTop: $(".about").offset().top }, 600); // jQuery Function Number 2 + jQuery Function Number 3
	});

	$("#guide-icon > svg, #guide-caption").hover(function() { // jQuery Function Number 4
		$("#guide-caption").addClass("color-hover"); // jQuery Function Number 5
		$("#guide-icon > svg").css("fill", "black"); // jQuery Function Number 6
	}, function() {
		$("#guide-caption").removeClass("color-hover"); // jQuery Function Number 7
		$("#guide-icon > svg").css("fill", "white");
	});

	$(".item").hover(function() {
		$(this).children(".description").removeClass("hidden");
		$(this).children(".description").fadeIn("fast");
	}, function() {
		$(this).children(".description").fadeOut("fast");
	});
})