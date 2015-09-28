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
		$(this).after("<input type='submit' value='Add to Calendar' class='button atcbutton'>");
	}
});

// Clicking on "Add to Calendar"
$(".atcbutton").click(function(){
	var tds = $(this).parent("tr").children();
	var classObj = {};
	classObj.CRN = tds[0].textContent;
	classObj.course = tds[1].textContent;
	classObj.title = tds[2].textContent;
	classObj.time = tds[3].textContent.split("\n");
	classObj.room = tds[4].textContent;
	classObj.instructor = tds[5].textContent;
	classObj.seatsAvail = tds[6].textContent;
	classObj.seatsRes = tds[7].textContent;
	classObj.prm = tds[8].textContent;
	classObj.CCC = tds[9].textContent;
	console.log(classObj);
});

// Minified sidebar
// var sidebarHTML = '<div id=sidebar><div class=tabs><ul class=tab-links><li class=active><a href=#calendar>Calendar</a></li><li><a href=#port_controls>Import/Export</a></li><li><a href=#sharing>Share with Friends</a></li></ul><div class=tab-content><div id=port_controls class=tab><input type=submit value=Import class=button> <input type=submit value=Export class=button></div><div id=calendar class=active><div id=timeslot class="weekday timeslot"><div id=mainTime class="timebox timeslot th">Time</div><div id=main7AM class="timebox timeslot">7AM</div><div id=main8AM class="timebox timeslot">8AM</div><div id=main9AM class="timebox timeslot">9AM</div><div id=main10AM class="timebox timeslot">10AM</div><div id=main11AM class="timebox timeslot">11AM</div><div id=main12PM class="timebox timeslot">12PM</div><div id=main1PM class="timebox timeslot">1PM</div><div id=main2PM class="timebox timeslot">2PM</div><div id=main3PM class="timebox timeslot">3PM</div><div id=main4PM class="timebox timeslot">4PM</div><div id=main5PM class="timebox timeslot">5PM</div><div id=main6PM class="timebox timeslot">6PM</div><div id=main7PM class="timebox timeslot">7PM</div><div id=main8PM class="timebox timeslot">8PM</div><div id=main9PM class="timebox timeslot">9PM</div><div id=main10PM class="timebox timeslot">10PM</div></div><div id=sunday class=weekday><div id=mainTime class="timebox th">Sun</div><div id=sun7AM class=timebox></div><div id=sun8AM class=timebox></div><div id=sun9AM class=timebox></div><div id=sun10AM class=timebox></div><div id=sun11AM class=timebox></div><div id=sun12PM class=timebox></div><div id=sun1PM class=timebox></div><div id=sun2PM class=timebox></div><div id=sun3PM class=timebox></div><div id=sun4PM class=timebox></div><div id=sun5PM class=timebox></div><div id=sun6PM class=timebox></div><div id=sun7PM class=timebox></div><div id=sun8PM class=timebox></div><div id=sun9PM class=timebox></div><div id=sun10PM class=timebox></div></div><div id=monday class=weekday><div id=monTime class="timebox th">Mon</div><div id=mon7AM class=timebox></div><div id=mon8AM class=timebox></div><div id=mon9AM class=timebox></div><div id=mon10AM class=timebox></div><div id=mon11AM class=timebox></div><div id=mon12PM class=timebox></div><div id=mon1PM class=timebox></div><div id=mon2PM class=timebox></div><div id=mon3PM class=timebox></div><div id=mon4PM class=timebox></div><div id=mon5PM class=timebox></div><div id=mon6PM class=timebox></div><div id=mon7PM class=timebox></div><div id=mon8PM class=timebox></div><div id=mon9PM class=timebox></div><div id=mon10PM class=timebox></div></div><div id=tuesday class=weekday><div id=tuesTime class="timebox th">Tues</div><div id=tue7AM class=timebox></div><div id=tue8AM class=timebox></div><div id=tue9AM class=timebox></div><div id=tue10AM class=timebox></div><div id=tue11AM class=timebox></div><div id=tue12PM class=timebox></div><div id=tue1PM class=timebox></div><div id=tue2PM class=timebox></div><div id=tue3PM class=timebox></div><div id=tue4PM class=timebox></div><div id=tue5PM class=timebox></div><div id=tue6PM class=timebox></div><div id=tue7PM class=timebox></div><div id=tue8PM class=timebox></div><div id=tue9PM class=timebox></div><div id=tue10PM class=timebox></div></div><div id=wednesday class=weekday><div id=wedTime class="timebox th">Wed</div><div id=wed7AM class=timebox></div><div id=wed8AM class=timebox></div><div id=wed9AM class=timebox></div><div id=wed10AM class=timebox></div><div id=wed11AM class=timebox></div><div id=wed12PM class=timebox></div><div id=wed1PM class=timebox></div><div id=wed2PM class=timebox></div><div id=wed3PM class=timebox></div><div id=wed4PM class=timebox></div><div id=wed5PM class=timebox></div><div id=wed6PM class=timebox></div><div id=wed7PM class=timebox></div><div id=wed8PM class=timebox></div><div id=wed9PM class=timebox></div><div id=wed10PM class=timebox></div></div><div id=thursday class=weekday><div id=thuTime class="timebox th">Thurs</div><div id=thu7AM class=timebox></div><div id=thu8AM class=timebox></div><div id=thu9AM class=timebox></div><div id=thu10AM class=timebox></div><div id=thu11AM class=timebox></div><div id=thu12PM class=timebox></div><div id=thu1PM class=timebox></div><div id=thu2PM class=timebox></div><div id=thu3PM class=timebox></div><div id=thu4PM class=timebox></div><div id=thu5PM class=timebox></div><div id=thu6PM class=timebox></div><div id=thu7PM class=timebox></div><div id=thu8PM class=timebox></div><div id=thu9PM class=timebox></div><div id=thu10PM class=timebox></div></div><div id=friday class=weekday><div id=friTime class="timebox th">Fri</div><div id=fri7AM class=timebox></div><div id=fri8AM class=timebox></div><div id=fri9AM class=timebox></div><div id=fri10AM class=timebox></div><div id=fri11AM class=timebox></div><div id=fri12PM class=timebox></div><div id=fri1PM class=timebox></div><div id=fri2PM class=timebox></div><div id=fri3PM class=timebox></div><div id=fri4PM class=timebox></div><div id=fri5PM class=timebox></div><div id=fri6PM class=timebox></div><div id=fri7PM class=timebox></div><div id=fri8PM class=timebox></div><div id=fri9PM class=timebox></div><div id=fri10PM class=timebox></div></div><div id=saturday class=weekday><div id=satTime class="timebox th">Sat</div><div id=sat7AM class=timebox></div><div id=sat8AM class=timebox></div><div id=sat9AM class=timebox></div><div id=sat10AM class=timebox></div><div id=sat11AM class=timebox></div><div id=sat12PM class=timebox></div><div id=sat1PM class=timebox></div><div id=sat2PM class=timebox></div><div id=sat3PM class=timebox></div><div id=sat4PM class=timebox></div><div id=sat5PM class=timebox></div><div id=sat6PM class=timebox></div><div id=sat7PM class=timebox></div><div id=sat8PM class=timebox></div><div id=sat9PM class=timebox></div><div id=sat10PM class=timebox></div></div></div><div id=sharing class=tab><p>This is where sharing will be</p></div></div></div></div>';

// Adding the sidebar div
//$("body").wrapInner("<div class='original'></div>");
//$(".original").after(sidebarHTML);
