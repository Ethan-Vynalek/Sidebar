console.log("Start of Extension");

// Table Headers
$("tbody th:last").css("padding-left", "20px");


// Add to Calendar Button
$("tr input.button").after('<input type="submit" value="Add to Calendar" class="button calendar"></input>');

var $lastTD = $("tr").find("td:last")
$lastTD[22].children[0].tagName