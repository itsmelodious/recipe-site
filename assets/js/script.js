$(window).load(function()  {

	$("#guide-icon").click(function() { // jQuery Function Number 1
		$("html, body").animate({ scrollTop: $("#list").offset().top }, 600); // jQuery Function Number 2 + jQuery Function Number 3
	})
})