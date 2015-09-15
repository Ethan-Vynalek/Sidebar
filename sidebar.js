console.log("Start of Extension"); // for debugging purposes

// Table Headers
// $("tbody th:last").css("padding-left", "20px");

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
