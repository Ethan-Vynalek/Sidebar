$(document).ready(function(){

    console.log("Document Ready"); // for debugging purposes

    // Highlight Hovered TRs
    $("#coursetable tbody tr td:first-child").each(function(index) {
        if(typeof $(this).attr("colspan") === "undefined") {
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

    // Table header for AtC button
    $("#coursetable tbody tr:first th:last").after("<th class='ddlabel' scope='row'>Add To<br>Calendar</th>");

    // Add to Calendar Button
    var $lastTD = $("tr").find("td:last");
    $lastTD.each(function(index) {
        if($(this).children(0).prop("tagName") === "FONT") {
            $(this).attr("colspan", String(parseInt($(this).attr("colspan")) - 3));
        }
        else if($(this).children(0).prop("tagName") === "FORM"){
            $(this).after("<input type='submit' value='Add to Calendar' class='button atcbutton'>");
        }
    });

    // Minified sidebar
    var sidebarHTML = ' <div id="sidebar"> <h2 class="active">Calendar</h2> <div id="calendar"> <div id="timeslot" class="weekday timeslot"> <div id="mainTime" class="timebox timeslot th">Time</div><div id="main8AM" class="timebox timeslot">8AM</div><div id="main9AM" class="timebox timeslot">9AM</div><div id="main10AM" class="timebox timeslot">10AM</div><div id="main11AM" class="timebox timeslot">11AM</div><div id="main12PM" class="timebox timeslot">12PM</div><div id="main1PM" class="timebox timeslot">1PM</div><div id="main2PM" class="timebox timeslot">2PM</div><div id="main3PM" class="timebox timeslot">3PM</div><div id="main4PM" class="timebox timeslot">4PM</div><div id="main5PM" class="timebox timeslot">5PM</div><div id="main6PM" class="timebox timeslot">6PM</div><div id="main7PM" class="timebox timeslot">7PM</div><div id="main8PM" class="timebox timeslot">8PM</div><div id="main9PM" class="timebox timeslot">9PM</div></div><div id="monday" class="weekday"> <div id="monTime" class="timebox th">Mon</div><div id="mon8AM" class="timebox"></div><div id="mon830AM" class="timebox halfhour"></div><div id="mon9AM" class="timebox"></div><div id="mon930AM" class="timebox halfhour"></div><div id="mon10AM" class="timebox"></div><div id="mon1030AM" class="timebox halfhour"></div><div id="mon11AM" class="timebox"></div><div id="mon1130AM" class="timebox halfhour"></div><div id="mon12PM" class="timebox"></div><div id="mon1230PM" class="timebox halfhour"></div><div id="mon1PM" class="timebox"></div><div id="mon130PM" class="timebox halfhour"></div><div id="mon2PM" class="timebox"></div><div id="mon230PM" class="timebox halfhour"></div><div id="mon3PM" class="timebox"></div><div id="mon330PM" class="timebox halfhour"></div><div id="mon4PM" class="timebox"></div><div id="mon430PM" class="timebox halfhour"></div><div id="mon5PM" class="timebox"></div><div id="mon530PM" class="timebox halfhour"></div><div id="mon6PM" class="timebox"></div><div id="mon630PM" class="timebox halfhour"></div><div id="mon7PM" class="timebox"></div><div id="mon730PM" class="timebox halfhour"></div><div id="mon8PM" class="timebox"></div><div id="mon830PM" class="timebox halfhour"></div><div id="mon9PM" class="timebox"></div><div id="mon930PM" class="timebox halfhour"></div></div><div id="tuesday" class="weekday"> <div id="tuesTime" class="timebox th">Tues</div><div id="tues8AM" class="timebox"></div><div id="tues830AM" class="timebox halfhour"></div><div id="tues9AM" class="timebox"></div><div id="tues930AM" class="timebox halfhour"></div><div id="tues10AM" class="timebox"></div><div id="tues1030AM" class="timebox halfhour"></div><div id="tues11AM" class="timebox"></div><div id="tues1130AM" class="timebox halfhour"></div><div id="tues12PM" class="timebox"></div><div id="tues1230PM" class="timebox halfhour"></div><div id="tues1PM" class="timebox"></div><div id="tues130PM" class="timebox halfhour"></div><div id="tues2PM" class="timebox"></div><div id="tues230PM" class="timebox halfhour"></div><div id="tues3PM" class="timebox"></div><div id="tues330PM" class="timebox halfhour"></div><div id="tues4PM" class="timebox"></div><div id="tues430PM" class="timebox halfhour"></div><div id="tues5PM" class="timebox"></div><div id="tues530PM" class="timebox halfhour"></div><div id="tues6PM" class="timebox"></div><div id="tues630PM" class="timebox halfhour"></div><div id="tues7PM" class="timebox"></div><div id="tues730PM" class="timebox halfhour"></div><div id="tues8PM" class="timebox"></div><div id="tues830PM" class="timebox halfhour"></div><div id="tues9PM" class="timebox"></div><div id="tues930PM" class="timebox halfhour"></div></div><div id="wednesday" class="weekday"> <div id="wedTime" class="timebox th">Wed</div><div id="wed8AM" class="timebox"></div><div id="wed830AM" class="timebox halfhour"></div><div id="wed9AM" class="timebox"></div><div id="wed930AM" class="timebox halfhour"></div><div id="wed10AM" class="timebox"></div><div id="wed1030AM" class="timebox halfhour"></div><div id="wed11AM" class="timebox"></div><div id="wed1130AM" class="timebox halfhour"></div><div id="wed12PM" class="timebox"></div><div id="wed1230PM" class="timebox halfhour"></div><div id="wed1PM" class="timebox"></div><div id="wed130PM" class="timebox halfhour"></div><div id="wed2PM" class="timebox"></div><div id="wed230PM" class="timebox halfhour"></div><div id="wed3PM" class="timebox"></div><div id="wed330PM" class="timebox halfhour"></div><div id="wed4PM" class="timebox"></div><div id="wed430PM" class="timebox halfhour"></div><div id="wed5PM" class="timebox"></div><div id="wed530PM" class="timebox halfhour"></div><div id="wed6PM" class="timebox"></div><div id="wed630PM" class="timebox halfhour"></div><div id="wed7PM" class="timebox"></div><div id="wed730PM" class="timebox halfhour"></div><div id="wed8PM" class="timebox"></div><div id="wed830PM" class="timebox halfhour"></div><div id="wed9PM" class="timebox"></div><div id="wed930PM" class="timebox halfhour"></div></div><div id="thursday" class="weekday"> <div id="thursTime" class="timebox th">Thurs</div><div id="thurs8AM" class="timebox"></div><div id="thurs830AM" class="timebox halfhour"></div><div id="thurs9AM" class="timebox"></div><div id="thurs930AM" class="timebox halfhour"></div><div id="thurs10AM" class="timebox"></div><div id="thurs1030AM" class="timebox halfhour"></div><div id="thurs11AM" class="timebox"></div><div id="thurs1130AM" class="timebox halfhour"></div><div id="thurs12PM" class="timebox"></div><div id="thurs1230PM" class="timebox halfhour"></div><div id="thurs1PM" class="timebox"></div><div id="thurs130PM" class="timebox halfhour"></div><div id="thurs2PM" class="timebox"></div><div id="thurs230PM" class="timebox halfhour"></div><div id="thurs3PM" class="timebox"></div><div id="thurs330PM" class="timebox halfhour"></div><div id="thurs4PM" class="timebox"></div><div id="thurs430PM" class="timebox halfhour"></div><div id="thurs5PM" class="timebox"></div><div id="thurs530PM" class="timebox halfhour"></div><div id="thurs6PM" class="timebox"></div><div id="thurs630PM" class="timebox halfhour"></div><div id="thurs7PM" class="timebox"></div><div id="thurs730PM" class="timebox halfhour"></div><div id="thurs8PM" class="timebox"></div><div id="thurs830PM" class="timebox halfhour"></div><div id="thurs9PM" class="timebox"></div><div id="thurs930PM" class="timebox halfhour"></div></div><div id="friday" class="weekday"> <div id="friTime" class="timebox th">Fri</div><div id="fri8AM" class="timebox"></div><div id="fri830AM" class="timebox halfhour"></div><div id="fri9AM" class="timebox"></div><div id="fri930AM" class="timebox halfhour"></div><div id="fri10AM" class="timebox"></div><div id="fri1030AM" class="timebox halfhour"></div><div id="fri11AM" class="timebox"></div><div id="fri1130AM" class="timebox halfhour"></div><div id="fri12PM" class="timebox"></div><div id="fri1230PM" class="timebox halfhour"></div><div id="fri1PM" class="timebox"></div><div id="fri130PM" class="timebox halfhour"></div><div id="fri2PM" class="timebox"></div><div id="fri230PM" class="timebox halfhour"></div><div id="fri3PM" class="timebox"></div><div id="fri330PM" class="timebox halfhour"></div><div id="fri4PM" class="timebox"></div><div id="fri430PM" class="timebox halfhour"></div><div id="fri5PM" class="timebox"></div><div id="fri530PM" class="timebox halfhour"></div><div id="fri6PM" class="timebox"></div><div id="fri630PM" class="timebox halfhour"></div><div id="fri7PM" class="timebox"></div><div id="fri730PM" class="timebox halfhour"></div><div id="fri8PM" class="timebox"></div><div id="fri830PM" class="timebox halfhour"></div><div id="fri9PM" class="timebox"></div><div id="fri930PM" class="timebox halfhour"></div></div></div><h2>Import/Export</h2> <div id="port_controls"> <button type="button" name="export-button" id="export-button">Export</button> <button type="button" name="import-button" id="import-button">Import</button> </div><h2>Share with Friends</h2> <div id="sharing"> <p>Send your schedule to a friend through Facebook messenger:</p><div class="fb-send" data-href="https://www.banner.bucknell.edu/BANPRD/hwzkschd.P_Bucknell_SchedDisplay#calendar"></div></div><h2>CRN Clipboard</h2> <div id="CRNs"> <div id="CRN" class="CNRlist"></div></div></div>';
    // Adding the sidebar div
    $("body").wrapInner("<div class='original'></div>");
    $(".original").after(sidebarHTML);
    $("#sidebar").accordion();
    // Adding the logo
    imageURL = chrome.extension.getURL('images/icon.png');
    $("#sidebar").prepend("<img id='cseIcon' src='" + imageURL + "' height='80' width='80'>");
    $("#cseIcon").after("<h3 class='iconTitle'>Course Selection<br>Sidebar</h3>");
    document.getElementById('export-button').onclick = function() {
        window.confirm("You are exporting");
    };

      document.getElementById('import-button').onclick = function() {
        window.confirm("You are importing");
    };

    // Adding "More Info" and removing irrelevant information
    $("tr[align='center']").children("th:nth-child(13)").after("<th class='ddlabel' scope='row'>More Info</th>");
    $("tr[align='center']").children("th:nth-child(13)").remove();
    $("tr[align='center']").children("th:nth-child(12)").remove();
    $("tr[align='center']").children("th:nth-child(10)").remove();
    $("tr[align='center']").children("th:nth-child(9)").remove();
    $("tr[align='center']").children("th:nth-child(8)").remove();
    $("tr[align='left']").children("td:nth-child(13)").after("<td class='more'><a>More</a><div class='popup'><ul class='popupul'><li class='wl'></li><li class='rs'></li><li class='prm'></li><li class='cd'></li><li class='cg'></li></ul></div></td>");
    $("tr[align='left']").each(function(){
        var guide = $(this).children("td:nth-child(13)").children("a:nth-child(1)").attr("href");
        $(this).children("td:nth-child(13)").remove();
        var desc = $(this).children("td:nth-child(12)").children("a:nth-child(1)").attr("href");
        $(this).children("td:nth-child(12)").remove();
        var prm = $(this).children("td:nth-child(10)").text();
        $(this).children("td:nth-child(10)").remove();
        var resSeats = $(this).children("td:nth-child(9)").text();
        $(this).children("td:nth-child(9)").remove();
        var waitList = $(this).children("td:nth-child(8)").text();
        $(this).children("td:nth-child(8)").remove();
        $(this).find(".wl").text("Wait List: " + waitList);
        $(this).find(".rs").text("Reserved Seats: " + resSeats);
        $(this).find(".prm").text("Permission: " + prm);
        if(typeof desc === "undefined") $(this).find(".cd").text("No Description");
        else $(this).find(".cd").append("<a href='" + desc + "'>Description</a>");
        if(typeof guide === "undefined") $(this).find(".cg").text("No Guide");
        else $(this).find(".cg").append("<a href='" + guide + "'>Guide</a>");
    });
    $(".more").mouseover(function() {
        $(this).children(".popup").show();
    }).mouseout(function() {
        $(this).children(".popup").hide();
    });

    var obj = {};
    var storage = chrome.storage.sync;

    // Checking for first time user
    storage.get(function(result) {
        if(Object.keys(result).length === 0) {
            clearStorage();
        }
    });

    // Updates the button values ("Add to Calendar" or "Remove")
    var updateBtnVals = function() {
        storage.get(function(result){
            var courses = result;
            var crns = [];
            var i;
            for(i in courses) {
               crns.push(courses[i].CRN);
            }
            $("tr[align='left']").each(function() {
                var td = $(this);

                var crn = $(this).children()[0].textContent;
                if(crns.indexOf(crn) >= 0) {
                    td.children(".atcbutton").val("Remove");
                }
                else {
                    td.children(".atcbutton").val("Add to Calendar");
                }
            });
        });
    };

    // Add existing courses to the calendar
    var updateCalendar = function() {
        $(".timebox").css("background-color","white");
        $(".timebox").not(".th").not(".timeslot").text("");
        storage.get(function(result){
            var colors = ["#EA760A", "#FECA3D", "#9F1926", "#561857", "#0090B8", "#005E2C", "#CDD57B", "#A08326"];
            var courses = result;
            var i;
            var colorIndex = 0;
            for(i in courses) {
                var course = courses[i];
                if(isNaN(Number(course))) {
                    var courseColor = colors[colorIndex%8];
                    colorIndex += 1;
                    var courseTime = course.time.substring(1, course.time.length - 1).split("|");
                    var divs = parseTime(courseTime);

                    var div;
                    var text = false;
                    var num = false;
                    for(div in divs) {
                        var id = divs[div];
                        if(id[0] === "#") {
                            $(id).css("background-color",courseColor);
                            if(text) {
                                $(id).text(course.course.split(" ")[0]);
                                num = true;
                                text = false;
                            }
                            else if(num) {
                                $(id).text(course.course.split(" ")[1]);
                                num = false;
                            }
                        }
                        else {
                            text = true;
                        }
                   }

                }
            }
            updateCRN();    //want to update CRN every time a course is added
            updateBtnVals();
        });
    };

    updateCalendar();

     // Add existing courses to the calendar
    var updateCRN = function() {
        document.getElementById("CRNs").innerHTML = "";
        storage.get(function(result){
            var courses = result;
            var i;
            for(i in courses) {
                var courseCRN = "";
                var course = courses[i];
                if(isNaN(Number(course))) {
                    courseCRN = course.CRN + "<br>";
                    $("CRN").css("content",courseCRN);
                    document.getElementById("CRNs").innerHTML += courseCRN;
                }
            }
        });
    };

    // For Facebook sharing?
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Clears the sync storage
    var clearStorage = function() {
        storage.clear();
        obj = {};
        storage.set(obj);
        //$(".timebox").not(".th").not(".timeslot").text("");
        updateCalendar();
    };

    // Prints the sync storage object
    var printStorage = function() {
        storage.get(function(result){console.log(result);});
    };

    // TEMPORARY buttons to show and clear the storage for testing purposes
    $("#calendar").prepend("<button id='clear'>Clear Calendar</button><br>");
    $('#clear').click(function(){
        clearStorage();
        printStorage();
    });

    // Calculates the difference between two time strings assuming they are in
    // intervals of 30 and that both times are in the same day
    var timeDifference = function(sh, sm, eh, em) {
        var startHour = Number(sh);
        var startMinute = Number(sm);
        var endHour = Number(eh);
        var endMinute = Number(em);
        startHour = (startHour > endHour) ? 0 - (12 - startHour) : startHour;
        var difference;

        if(startHour === endHour && startMinute === endMinute) return 0;
        else if(startHour === endHour && startMinute !== endMinute) return 0.5;
        else {
            difference = endHour - startHour;
            if(startMinute === endMinute) return difference;
            else if(startMinute > endMinute) return difference - 0.5;
            else return difference + 0.5;
        }
    };

    // Adds one hour to a string number
    var addOneHour = function(h) {
        var hour = Number(h);
        hour = (hour === 12) ? 1 : hour + 1;
        return hour.toString();
    };

    // Parses an array of time strings and returns an array of strings corresponding to the
    // ids of the div elements for that time string.
    // Accepts an "New text!"array of time strings in the form: ["TR 9:30-10:52am", "T 11:00-11:52am"]
    var parseTime = function(timeStrings) {
        var i;
        var divs = [];
        for (i in timeStrings) {
            var timeString = timeStrings[i].split(" ");
            var days = timeString[0];
            var times = timeString[1];
            var char, prefix, startHour, startMinute, endHour, endMinute, ampm;
            for (char in days){
                var day = days[char];
                switch (day) {
                    case "M":
                        prefix = "#mon";
                        break;
                    case "T":
                        prefix = "#tues";
                        break;
                    case "W":
                        prefix = "#wed";
                        break;
                    case "R":
                        prefix = "#thurs";
                        break;
                    case "F":
                        prefix = "#fri";
                        break;
                }
                var start = times.split("-")[0];
                startHour = start.split(":")[0];
                startMinute = (start.split(":")[1] === "30") ? "30" : "";
                var end = times.split("-")[1].substring(0, times.split("-")[1].length - 2);
                endHour = end.split(":")[0];
                var eM = end.split(":")[1];
                if(eM === "52") {
                    endMinute = "";
                    endHour = (endHour === "12") ? "1" : (Number(endHour) + 1).toString();
                }
                else {
                    endMinute = "30";
                }
                ampm = times.split("-")[1].slice(-2).toUpperCase();

                // use this timeDifference value to figure out the middle
                // to put the course name
                var td = timeDifference(startHour, startMinute, endHour, endMinute);

                var mid = Math.floor(td);

                while(td !== 0) {
                    if(startHour === endHour && startMinute === endMinute) break;
                    if(td*2 === mid + 1) {
                        divs.push("text");
                    }
                    if (ampm === "PM" &&
                       (Number(startHour) > Number(endHour) || Number(endHour) === 12) &&
                       Number(startHour) !== 12) {
                        divs.push(prefix + startHour + startMinute + "AM");
                    }
                    else {
                        divs.push(prefix + startHour + startMinute + ampm);
                    }

                    if(startMinute === "30") {
                        startMinute = "";
                        startHour = addOneHour(startHour);
                    }
                    else startMinute = "30";
                    td = timeDifference(startHour, startMinute, endHour, endMinute);
                }
            }
        }
        return divs;
    };

    // Clicking on "Add to Calendar" will create a course object of the current
    // class and then add that object to chrome's sync storage.
    // Clicking on "Remove" will remove that course object from the storage.
    $(".atcbutton").click(function(){
        if($(this).val() === "Add to Calendar") {
            var tds = $(this).parent("tr").children();
            var classObj = {};
            classObj.CRN = tds[0].textContent.trim();
            classObj.course = tds[1].textContent.trim();
            classObj.title = tds[2].textContent.trim();
            classObj.time = tds[3].textContent.replace(/\n/g, "|");
            classObj.room = tds[4].textContent.replace(/\n/g, "|");
            classObj.instructor = tds[5].textContent.replace(/\n/g, "");
            classObj.seatsAvail = tds[6].textContent.trim();
            classObj.waitList = tds[7].textContent.trim();
            classObj.seatsRes = tds[8].textContent.trim();
            classObj.prm = tds[9].textContent.trim();
            classObj.CCC = tds[10].textContent.trim();

            var conflict = false;
            var cTimes = parseTime(classObj.time.substring(1, classObj.time.length - 1).split("|"));
            for (i in cTimes) {
                var cTime = cTimes[i];
                if (cTime.trim() !== "text" && $(cTime).css("background-color").trim() !== "rgb(255, 255, 255)") {
                    alert("Cannot add " + classObj.course + " because another class is already scheduled for that time.");
                    conflict = true;
                    break;
                }
            }

            if(!conflict) {
                storage.get(function(result){
                    obj[classObj.CRN] = classObj;
                    storage.set(obj, function() {
                        updateCalendar();
                    });
                });
            }
        }
        else if($(this).val() === "Remove") {
            var crn = $(this).parent("tr").children()[0].textContent;
            delete obj[crn];
            storage.remove(String(crn), function() {
                updateCalendar();
            });
        }
   });
   
   // http://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
    // Compile schedule data into an ObjectURL, return the URL used to download it
    var schedule_data = null,
        make_file = function(schedule_data) {
            var blob = new Blob([schedule_data], {type: 'text/plain'});
            
            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if ( schedule_data !== null ) {
                window.URL.revokeObjectURL(blob);
            }
            
            url = window.URL.createObjectURL(blob);
            
            //returns a URL you can use as an href
            return url;
        };
        
    var data = "Subject,Start Date,Start Time,End Date,End Time,All Day Event,Description,Location,Private\n";
    storage.get( function(result) {
       var courses = result;
       console.log( Object.getOwnPropertyNames( courses ) );
       for ( var i=0; i<courses["classesStored"]; i++ ) {
           var temp = courses[i].course + "," + "1/1/16" + "," + courses[i].time + "," + courses[i].time + "," + "False" + "," + courses[i].title + "," + courses[i].room + "," + "False" + "," + "False" + "\n";
           data += temp;
       }
       console.log(data);
    });
    
    var link = document.createElement("a"); 
    document.getElementById("export-button").onclick = function () {
	link.download = "ScheduleData.csv";
	link.href = make_file(data);
	link.click();
    }; 
   
});
