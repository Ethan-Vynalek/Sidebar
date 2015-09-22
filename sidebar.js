console.log("Start of Extension"); // for debugging purposes

// Highlight Hovered TRs
$("#coursetable tbody tr td:first-child").each(function(index) {
	if(typeof $(this).attr("colspan") == "undefined") {
		$(this).parent().hover(
			function() {
				$(this).css("background-color", "#FEFFCC");
			},
			function() {
				$(this).css("background-color", "");
			}
	);
	}
});

// Table header
$("#coursetable tbody tr:first th:last").after("<th class='ddlabel' scope='row'>Add To<br>Calendar</th>");

// Add to Calendar Button
var $lastTD = $("tr").find("td:last");
$lastTD.each(function(index) {
	if($(this).children(0).prop("tagName") === "FONT") {
		$(this).attr("colspan", "14");
	}
	else if($(this).children(0).prop("tagName") === "FORM"){
		$(this).after("<input type='submit' value='Add to Calendar' class='button'>");
	}
});
