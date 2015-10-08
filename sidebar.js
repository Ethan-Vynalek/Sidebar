$(document).ready(function(){

    console.log("Document Ready"); // for debugging purposes

    ////////////////////////
    // INSERTING ELEMENTS //
    ////////////////////////

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
            $(this).attr("colspan", "14");
        }
        else if($(this).children(0).prop("tagName") === "FORM"){
            $(this).after("<input type='submit' value='Add to Calendar' class='button atcbutton'>");
        }
    });

    // Minified sidebar
    var sidebarHTML = ' <div id="sidebar"> <h2 class="active">Calendar</h2> <div id="calendar"> <div id="timeslot" class="weekday timeslot"> <div id="mainTime" class="timebox timeslot th">Time</div><div id="main8AM" class="timebox timeslot">8AM</div><div id="main9AM" class="timebox timeslot">9AM</div><div id="main10AM" class="timebox timeslot">10AM</div><div id="main11AM" class="timebox timeslot">11AM</div><div id="main12PM" class="timebox timeslot">12PM</div><div id="main1PM" class="timebox timeslot">1PM</div><div id="main2PM" class="timebox timeslot">2PM</div><div id="main3PM" class="timebox timeslot">3PM</div><div id="main4PM" class="timebox timeslot">4PM</div><div id="main5PM" class="timebox timeslot">5PM</div><div id="main6PM" class="timebox timeslot">6PM</div><div id="main7PM" class="timebox timeslot">7PM</div><div id="main8PM" class="timebox timeslot">8PM</div><div id="main9PM" class="timebox timeslot">9PM</div></div><div id="monday" class="weekday"> <div id="monTime" class="timebox th">Mon</div><div id="mon8AM" class="timebox"></div><div id="mon830AM" class="timebox halfhour"></div><div id="mon9AM" class="timebox"></div><div id="mon930AM" class="timebox halfhour"></div><div id="mon10AM" class="timebox"></div><div id="mon1030AM" class="timebox halfhour"></div><div id="mon11AM" class="timebox"></div><div id="mon1130AM" class="timebox halfhour"></div><div id="mon12PM" class="timebox"></div><div id="mon1230PM" class="timebox halfhour"></div><div id="mon1PM" class="timebox"></div><div id="mon130PM" class="timebox halfhour"></div><div id="mon2PM" class="timebox"></div><div id="mon230PM" class="timebox halfhour"></div><div id="mon3PM" class="timebox"></div><div id="mon330PM" class="timebox halfhour"></div><div id="mon4PM" class="timebox"></div><div id="mon430PM" class="timebox halfhour"></div><div id="mon5PM" class="timebox"></div><div id="mon530PM" class="timebox halfhour"></div><div id="mon6PM" class="timebox"></div><div id="mon630PM" class="timebox halfhour"></div><div id="mon7PM" class="timebox"></div><div id="mon730PM" class="timebox halfhour"></div><div id="mon8PM" class="timebox"></div><div id="mon830PM" class="timebox halfhour"></div><div id="mon9PM" class="timebox"></div><div id="mon930PM" class="timebox halfhour"></div></div><div id="tuesday" class="weekday"> <div id="tuesTime" class="timebox th">Tues</div><div id="tues8AM" class="timebox"></div><div id="tues830AM" class="timebox halfhour"></div><div id="tues9AM" class="timebox"></div><div id="tues930AM" class="timebox halfhour"></div><div id="tues10AM" class="timebox"></div><div id="tues1030AM" class="timebox halfhour"></div><div id="tues11AM" class="timebox"></div><div id="tues1130AM" class="timebox halfhour"></div><div id="tues12PM" class="timebox"></div><div id="tues1230PM" class="timebox halfhour"></div><div id="tues1PM" class="timebox"></div><div id="tues130PM" class="timebox halfhour"></div><div id="tues2PM" class="timebox"></div><div id="tues230PM" class="timebox halfhour"></div><div id="tues3PM" class="timebox"></div><div id="tues330PM" class="timebox halfhour"></div><div id="tues4PM" class="timebox"></div><div id="tues430PM" class="timebox halfhour"></div><div id="tues5PM" class="timebox"></div><div id="tues530PM" class="timebox halfhour"></div><div id="tues6PM" class="timebox"></div><div id="tues630PM" class="timebox halfhour"></div><div id="tues7PM" class="timebox"></div><div id="tues730PM" class="timebox halfhour"></div><div id="tues8PM" class="timebox"></div><div id="tues830PM" class="timebox halfhour"></div><div id="tues9PM" class="timebox"></div><div id="tues930PM" class="timebox halfhour"></div></div><div id="wednesday" class="weekday"> <div id="wedTime" class="timebox th">Wed</div><div id="wed8AM" class="timebox"></div><div id="wed830AM" class="timebox halfhour"></div><div id="wed9AM" class="timebox"></div><div id="wed930AM" class="timebox halfhour"></div><div id="wed10AM" class="timebox"></div><div id="wed1030AM" class="timebox halfhour"></div><div id="wed11AM" class="timebox"></div><div id="wed1130AM" class="timebox halfhour"></div><div id="wed12PM" class="timebox"></div><div id="wed1230PM" class="timebox halfhour"></div><div id="wed1PM" class="timebox"></div><div id="wed130PM" class="timebox halfhour"></div><div id="wed2PM" class="timebox"></div><div id="wed230PM" class="timebox halfhour"></div><div id="wed3PM" class="timebox"></div><div id="wed330PM" class="timebox halfhour"></div><div id="wed4PM" class="timebox"></div><div id="wed430PM" class="timebox halfhour"></div><div id="wed5PM" class="timebox"></div><div id="wed530PM" class="timebox halfhour"></div><div id="wed6PM" class="timebox"></div><div id="wed630PM" class="timebox halfhour"></div><div id="wed7PM" class="timebox"></div><div id="wed730PM" class="timebox halfhour"></div><div id="wed8PM" class="timebox"></div><div id="wed830PM" class="timebox halfhour"></div><div id="wed9PM" class="timebox"></div><div id="wed930PM" class="timebox halfhour"></div></div><div id="thursday" class="weekday"> <div id="thursTime" class="timebox th">Thurs</div><div id="thurs8AM" class="timebox"></div><div id="thurs830AM" class="timebox halfhour"></div><div id="thurs9AM" class="timebox"></div><div id="thurs930AM" class="timebox halfhour"></div><div id="thurs10AM" class="timebox"></div><div id="thurs1030AM" class="timebox halfhour"></div><div id="thurs11AM" class="timebox"></div><div id="thurs1130AM" class="timebox halfhour"></div><div id="thurs12PM" class="timebox"></div><div id="thurs1230PM" class="timebox halfhour"></div><div id="thurs1PM" class="timebox"></div><div id="thurs130PM" class="timebox halfhour"></div><div id="thurs2PM" class="timebox"></div><div id="thurs230PM" class="timebox halfhour"></div><div id="thurs3PM" class="timebox"></div><div id="thurs330PM" class="timebox halfhour"></div><div id="thurs4PM" class="timebox"></div><div id="thurs430PM" class="timebox halfhour"></div><div id="thurs5PM" class="timebox"></div><div id="thurs530PM" class="timebox halfhour"></div><div id="thurs6PM" class="timebox"></div><div id="thurs630PM" class="timebox halfhour"></div><div id="thurs7PM" class="timebox"></div><div id="thurs730PM" class="timebox halfhour"></div><div id="thurs8PM" class="timebox"></div><div id="thurs830PM" class="timebox halfhour"></div><div id="thurs9PM" class="timebox"></div><div id="thurs930PM" class="timebox halfhour"></div></div><div id="friday" class="weekday"> <div id="friTime" class="timebox th">Fri</div><div id="fri8AM" class="timebox"></div><div id="fri830AM" class="timebox halfhour"></div><div id="fri9AM" class="timebox"></div><div id="fri930AM" class="timebox halfhour"></div><div id="fri10AM" class="timebox"></div><div id="fri1030AM" class="timebox halfhour"></div><div id="fri11AM" class="timebox"></div><div id="fri1130AM" class="timebox halfhour"></div><div id="fri12PM" class="timebox"></div><div id="fri1230PM" class="timebox halfhour"></div><div id="fri1PM" class="timebox"></div><div id="fri130PM" class="timebox halfhour"></div><div id="fri2PM" class="timebox"></div><div id="fri230PM" class="timebox halfhour"></div><div id="fri3PM" class="timebox"></div><div id="fri330PM" class="timebox halfhour"></div><div id="fri4PM" class="timebox"></div><div id="fri430PM" class="timebox halfhour"></div><div id="fri5PM" class="timebox"></div><div id="fri530PM" class="timebox halfhour"></div><div id="fri6PM" class="timebox"></div><div id="fri630PM" class="timebox halfhour"></div><div id="fri7PM" class="timebox"></div><div id="fri730PM" class="timebox halfhour"></div><div id="fri8PM" class="timebox"></div><div id="fri830PM" class="timebox halfhour"></div><div id="fri9PM" class="timebox"></div><div id="fri930PM" class="timebox halfhour"></div></div></div><h2>Import/Export</h2> <div id="port_controls"> <button type="button" name="export-button" id="export-button">Export</button> <button type="button" name="import-button" id="import-button">Import</button> </div><h2>Share with Friends</h2> <div id="sharing"> <p>This is where sharing will be</p><div class="fb-send" data-href="https://www.banner.bucknell.edu/BANPRD/hwzkschd.P_Bucknell_SchedDisplay#calendar"></div></div><h2>CRN Clipboard</h2> <div id="CRNs"> <p>This is where CRN clipboard will be</p><div id="CRN" class="CNRlist"></div><ul style="list-style-type:disc"> <li>12345</li><li>55566</li><li>98765</li></ul> </div></div>';
    // Adding the sidebar div
    $("body").wrapInner("<div class='original'></div>");
    $(".original").after(sidebarHTML);
    $("#sidebar").accordion();

    document.getElementById('export-button').onclick = function() {
        window.confirm("You are exporting");
    }

      document.getElementById('import-button').onclick = function() {
        window.confirm("You are importing");
    }

    var obj = {};
    var storage = chrome.storage.sync;

    // Add existing courses to the calendar
    var updateCalendar = function() {
        $(".timebox").css("background-color","white");
        storage.get(function(result){
            var courses = result;
            var i;
            for(i in courses) {
                var course = courses[i];
                if(isNaN(Number(course))) {
                    var courseTime = course.time.substring(1, course.time.length - 1).split("|");
                    var divs = parseTime(courseTime);
                    var div;
                    for(div in divs) {
                        var id = divs[div];
                        $(id).css("background-color","#EA760A");
                   }
                }
            }
        });
    };

    updateCalendar();
    
     // Add existing courses to the calendar
    var updateCRN = function() {
        $(".CRNlist").css("content","");
        storage.get(function(result){
            var courses = result;
            var i;
            for(i in courses) {
                var course = courses[i];
                if(isNaN(Number(course))) {
                    var courseCRN = course.CRN;                   
                    $("CRN").css("content",courseCRN); 
                    document.getElementById("CRNs").innerHTML += courseCRN;
                }
            }
        });
    };
    
    updateCRN();
    
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
        obj = {'classesStored': 0};
        storage.set(obj);
        updateCalendar();
        updateCRN();
    };

    // Prints the sync storage object
    var printStorage = function() {
        storage.get(function(result){console.log(result);});
    };

    // TEMPORARY buttons to show and clear the storage for testing purposes
    $('.page_header').after('<button id="clear">clear storage</button><button id="print">print storage</button>');
    $('#clear').click(function(){
        clearStorage();
        printStorage();
    });
    $("#print").click(function(){
        printStorage();
    });

    // Calculates the difference between two time strings assuming they are in
    // intervals of 30 and that both times are in the same day
    var timeDifference = function(sh, sm, eh, em) {
        var startHour = Number(sh);
        var startMinute = Number(sm);
        var endHour = Number(eh);
        var endMinute = Number(em);
        startHour = (startHour > endHour) ? 12 - startHour : startHour;
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
    // Accepts an array of time strings in the form: ["TR 9:30-10:52am", "T 11:00-11:52am"]
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

                var td = timeDifference(startHour, startMinute, endHour, endMinute);

                while(td !== 0) {
                    if(startHour === endHour && startMinute === endMinute) break;
                    divs.push(prefix + startHour + startMinute + ampm);

                    if(startMinute === "30") {
                        startMinute = "";
                        startHour = addOneHour(startHour);
                    }
                    else {
                        startMinute = "30";
                    }

                    td = timeDifference(startHour, startMinute, endHour, endMinute);
                }

            }

        }
        return divs;
    };

    // Clicking on "Add to Calendar" will create a course object of the current
    // class and then add that object to chrome's sync storage.
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

        storage.get(function(result){
            var classesStored = result.classesStored;
            obj[classesStored] = classObj;
            classesStored++;
            obj.classesStored = classesStored;
            storage.set(obj, function() {
                updateCalendar();
                updateCRN();
            });
        });
    });
    // *** END CHROME SYNC STORAGE ***
});
