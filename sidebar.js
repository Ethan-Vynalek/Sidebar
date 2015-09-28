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
	classObj.CRN = tds[0].textContent.trim();
	classObj.course = tds[1].textContent.trim();
	classObj.title = tds[2].textContent.trim();
	classObj.time = tds[3].textContent.replace(/\n/g, "|");
	classObj.room = tds[4].textContent.replace(/\n/g, "|");
	classObj.instructor = tds[5].textContent.replace(/\n/g, "");
	classObj.seatsAvail = tds[6].textContent.trim();
	classObj.seatsRes = tds[7].textContent.trim();
	classObj.prm = tds[8].textContent.trim();
	classObj.CCC = tds[9].textContent.trim();
	console.log(JSON.stringify(classObj));
});

// Minified sidebar
// var sidebarHTML = '<div id=sidebar><div class=tabs><ul class=tab-links><li class=active><a href=#calendar>Calendar</a></li><li><a href=#port_controls>Import/Export</a></li><li><a href=#sharing>Share with Friends</a></li></ul><div class=tab-content><div id=port_controls class=tab><input type=submit value=Import class=button> <input type=submit value=Export class=button></div><div id=calendar class=active><div id=timeslot class="weekday timeslot"><div id=mainTime class="timebox timeslot th">Time</div><div id=main7AM class="timebox timeslot">7AM</div><div id=main8AM class="timebox timeslot">8AM</div><div id=main9AM class="timebox timeslot">9AM</div><div id=main10AM class="timebox timeslot">10AM</div><div id=main11AM class="timebox timeslot">11AM</div><div id=main12PM class="timebox timeslot">12PM</div><div id=main1PM class="timebox timeslot">1PM</div><div id=main2PM class="timebox timeslot">2PM</div><div id=main3PM class="timebox timeslot">3PM</div><div id=main4PM class="timebox timeslot">4PM</div><div id=main5PM class="timebox timeslot">5PM</div><div id=main6PM class="timebox timeslot">6PM</div><div id=main7PM class="timebox timeslot">7PM</div><div id=main8PM class="timebox timeslot">8PM</div><div id=main9PM class="timebox timeslot">9PM</div><div id=main10PM class="timebox timeslot">10PM</div></div><div id=sunday class=weekday><div id=mainTime class="timebox th">Sun</div><div id=sun7AM class=timebox></div><div id=sun8AM class=timebox></div><div id=sun9AM class=timebox></div><div id=sun10AM class=timebox></div><div id=sun11AM class=timebox></div><div id=sun12PM class=timebox></div><div id=sun1PM class=timebox></div><div id=sun2PM class=timebox></div><div id=sun3PM class=timebox></div><div id=sun4PM class=timebox></div><div id=sun5PM class=timebox></div><div id=sun6PM class=timebox></div><div id=sun7PM class=timebox></div><div id=sun8PM class=timebox></div><div id=sun9PM class=timebox></div><div id=sun10PM class=timebox></div></div><div id=monday class=weekday><div id=monTime class="timebox th">Mon</div><div id=mon7AM class=timebox></div><div id=mon8AM class=timebox></div><div id=mon9AM class=timebox></div><div id=mon10AM class=timebox></div><div id=mon11AM class=timebox></div><div id=mon12PM class=timebox></div><div id=mon1PM class=timebox></div><div id=mon2PM class=timebox></div><div id=mon3PM class=timebox></div><div id=mon4PM class=timebox></div><div id=mon5PM class=timebox></div><div id=mon6PM class=timebox></div><div id=mon7PM class=timebox></div><div id=mon8PM class=timebox></div><div id=mon9PM class=timebox></div><div id=mon10PM class=timebox></div></div><div id=tuesday class=weekday><div id=tuesTime class="timebox th">Tues</div><div id=tue7AM class=timebox></div><div id=tue8AM class=timebox></div><div id=tue9AM class=timebox></div><div id=tue10AM class=timebox></div><div id=tue11AM class=timebox></div><div id=tue12PM class=timebox></div><div id=tue1PM class=timebox></div><div id=tue2PM class=timebox></div><div id=tue3PM class=timebox></div><div id=tue4PM class=timebox></div><div id=tue5PM class=timebox></div><div id=tue6PM class=timebox></div><div id=tue7PM class=timebox></div><div id=tue8PM class=timebox></div><div id=tue9PM class=timebox></div><div id=tue10PM class=timebox></div></div><div id=wednesday class=weekday><div id=wedTime class="timebox th">Wed</div><div id=wed7AM class=timebox></div><div id=wed8AM class=timebox></div><div id=wed9AM class=timebox></div><div id=wed10AM class=timebox></div><div id=wed11AM class=timebox></div><div id=wed12PM class=timebox></div><div id=wed1PM class=timebox></div><div id=wed2PM class=timebox></div><div id=wed3PM class=timebox></div><div id=wed4PM class=timebox></div><div id=wed5PM class=timebox></div><div id=wed6PM class=timebox></div><div id=wed7PM class=timebox></div><div id=wed8PM class=timebox></div><div id=wed9PM class=timebox></div><div id=wed10PM class=timebox></div></div><div id=thursday class=weekday><div id=thuTime class="timebox th">Thurs</div><div id=thu7AM class=timebox></div><div id=thu8AM class=timebox></div><div id=thu9AM class=timebox></div><div id=thu10AM class=timebox></div><div id=thu11AM class=timebox></div><div id=thu12PM class=timebox></div><div id=thu1PM class=timebox></div><div id=thu2PM class=timebox></div><div id=thu3PM class=timebox></div><div id=thu4PM class=timebox></div><div id=thu5PM class=timebox></div><div id=thu6PM class=timebox></div><div id=thu7PM class=timebox></div><div id=thu8PM class=timebox></div><div id=thu9PM class=timebox></div><div id=thu10PM class=timebox></div></div><div id=friday class=weekday><div id=friTime class="timebox th">Fri</div><div id=fri7AM class=timebox></div><div id=fri8AM class=timebox></div><div id=fri9AM class=timebox></div><div id=fri10AM class=timebox></div><div id=fri11AM class=timebox></div><div id=fri12PM class=timebox></div><div id=fri1PM class=timebox></div><div id=fri2PM class=timebox></div><div id=fri3PM class=timebox></div><div id=fri4PM class=timebox></div><div id=fri5PM class=timebox></div><div id=fri6PM class=timebox></div><div id=fri7PM class=timebox></div><div id=fri8PM class=timebox></div><div id=fri9PM class=timebox></div><div id=fri10PM class=timebox></div></div><div id=saturday class=weekday><div id=satTime class="timebox th">Sat</div><div id=sat7AM class=timebox></div><div id=sat8AM class=timebox></div><div id=sat9AM class=timebox></div><div id=sat10AM class=timebox></div><div id=sat11AM class=timebox></div><div id=sat12PM class=timebox></div><div id=sat1PM class=timebox></div><div id=sat2PM class=timebox></div><div id=sat3PM class=timebox></div><div id=sat4PM class=timebox></div><div id=sat5PM class=timebox></div><div id=sat6PM class=timebox></div><div id=sat7PM class=timebox></div><div id=sat8PM class=timebox></div><div id=sat9PM class=timebox></div><div id=sat10PM class=timebox></div></div></div><div id=sharing class=tab><p>This is where sharing will be</p></div></div></div></div>';

// Adding the sidebar div
//$("body").wrapInner("<div class='original'></div>");
//$(".original").after(sidebarHTML);

//var exClasses = {
//    0: {"CRN":"17153","course":"ACFM 220 01","title":"Business Law I","time":"|MWF 2:00-2:52pm|R 7:00-9:52pm|","room":"|TAYL 113||","instructor":"Brann, Paul W.","seatsAvail":"Closed","seatsRes":"","prm":"","CCC":"SLSC"},
//    1: {"CRN":"10108","course":"BIOL 121 01","title":"Biology for Non-majors","time":"|MWF 11:00-11:52am|","room":"|VAUG 100|","instructor":"Gates, Julie A.","seatsAvail":"9","seatsRes":"","prm":"","CCC":"FRST LBSC NMLG NSMC"},
//    2: {"CRN":"17235","course":"CHIN 101R 42","title":"Recitation-Chinese I","time":"|TR 4:00-4:52pm|","room":"|OLIN 371|","instructor":"STAFF","seatsAvail":"1","seatsRes":"","prm":"","CCC":""},
//    3: {"CRN":"18347","course":"EDUC 305 01","title":"Advanced Educational Psych","time":"|TR 1:00-2:22pm|","room":"|OLIN 275|","instructor":"Nottis, Katharyn E.","seatsAvail":"18","seatsRes":"","prm":"","CCC":"SLSC"},
//    4: {"CRN":"18350","course":"EDUC 339 01","title":"Inclusive Practices","time":"|TR 1:00-2:22pm|","room":"|OLIN 255|","instructor":"Hoffman, Lynn M.","seatsAvail":"20","seatsRes":"","prm":"","CCC":"SLSC"},
//    5: {"CRN":"18641","course":"CSCI 203 04","title":"Intro to Computer Science I","time":"|MWF 3:00-3:52pm|","room":"|BRKI 065|","instructor":"Dancy, Christopher (Chris) L.","seatsAvail":"9","seatsRes":"","prm":"","CCC":"FRST NMLG NSMC"},
//    6: {"CRN":"13055","course":"CSCI 479 01","title":"Computer ScienceDesign Project","time":"|MWF 3:00-3:52pm|","room":"|BRKI 165|","instructor":"Meng, Xiannong","seatsAvail":"6","seatsRes":"","prm":"","CCC":"W2"},
//    7: {"CRN":"18614","course":"MATH 208 01","title":"Mathematical Explorations","time":"|R 9:30-10:52am|","room":"|OLIN 371|","instructor":"Piggott, Adam","seatsAvail":"15","seatsRes":"","prm":"","CCC":"FRST NSMC"},
//    8: {"CRN":"10329","course":"PSYC 209 01","title":"Social Psychology","time":"|MWF 11:00-11:52am|","room":"|OLRY 201|","instructor":"Wade, T. Joel","seatsAvail":"Closed","seatsRes":"","prm":"","CCC":"EGSS SLSC SSLG"},
//    9: {"CRN":"17306","course":"SPAN 103 02","title":"Toward Intermediate Spanish","time":"|MWF 3:00-3:52pm|","room":"|VAUG 102|","instructor":"Poust, Alice J.","seatsAvail":"1","seatsRes":"1","prm":"","CCC":"ARHC CCFL EGHU FRST GLSP"}
//}