var exClasses={0:{CRN:"17153",course:"ACFM 220 01",title:"Business Law I",time:"|MWF 2:00-2:52pm|R 7:00-9:52pm|",room:"|TAYL 113||",instructor:"Brann, Paul W.",seatsAvail:"Closed",seatsRes:"",prm:"",CCC:"SLSC"},1:{CRN:"10108",course:"BIOL 121 01",title:"Biology for Non-majors",time:"|MWF 11:00-11:52am|",room:"|VAUG 100|",instructor:"Gates, Julie A.",seatsAvail:"9",seatsRes:"",prm:"",CCC:"FRST LBSC NMLG NSMC"},2:{CRN:"17235",course:"CHIN 101R 42",title:"Recitation-Chinese I",time:"|TR 4:00-4:52pm|",room:"|OLIN 371|",instructor:"STAFF",seatsAvail:"1",seatsRes:"",prm:"",CCC:""},3:{CRN:"18347",course:"EDUC 305 01",title:"Advanced Educational Psych",time:"|TR 1:00-2:22pm|",room:"|OLIN 275|",instructor:"Nottis, Katharyn E.",seatsAvail:"18",seatsRes:"",prm:"",CCC:"SLSC"},4:{CRN:"18350",course:"EDUC 339 01",title:"Inclusive Practices",time:"|TR 1:00-2:22pm|",room:"|OLIN 255|",instructor:"Hoffman, Lynn M.",seatsAvail:"20",seatsRes:"",prm:"",CCC:"SLSC"},5:{CRN:"18641",course:"CSCI 203 04",title:"Intro to Computer Science I",time:"|MWF 3:00-3:52pm|",room:"|BRKI 065|",instructor:"Dancy, Christopher (Chris) L.",seatsAvail:"9",seatsRes:"",prm:"",CCC:"FRST NMLG NSMC"},6:{CRN:"13055",course:"CSCI 479 01",title:"Computer ScienceDesign Project",time:"|MWF 3:00-3:52pm|",room:"|BRKI 165|",instructor:"Meng, Xiannong",seatsAvail:"6",seatsRes:"",prm:"",CCC:"W2"},7:{CRN:"18614",course:"MATH 208 01",title:"Mathematical Explorations",time:"|R 9:30-10:52am|",room:"|OLIN 371|",instructor:"Piggott, Adam",seatsAvail:"15",seatsRes:"",prm:"",CCC:"FRST NSMC"},8:{CRN:"10329",course:"PSYC 209 01",title:"Social Psychology",time:"|MWF 11:00-11:52am|",room:"|OLRY 201|",instructor:"Wade, T. Joel",seatsAvail:"Closed",seatsRes:"",prm:"",CCC:"EGSS SLSC SSLG"},9:{CRN:"17306",course:"SPAN 103 02",title:"Toward Intermediate Spanish",time:"|MWF 3:00-3:52pm|",room:"|VAUG 102|",instructor:"Poust, Alice J.",seatsAvail:"1",seatsRes:"1",prm:"",CCC:"ARHC CCFL EGHU FRST GLSP"}};
console.log(exClasses)
/*
 * Every search function in here returns in one of two ways: a objectionary if successful, an empty objectionary if not
 */

var CRNSearch = function(searchTerm, classes) {
    var returnObject = [];
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].CRN == searchTerm) {
            returnObject[Object.keys(returnObject).length] = classes[i];
            //break b/c only one possible term should be in the objectionary
            break;
        }
    }
    return returnObject;
}

var CCCSearch = function(searchTerm, classes) {
    var returnObject = [];
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].CCC == searchTerm) {
            returnObject[Object.keys(returnObject).length] = classes[i];
        }
    }
    return returnObject;
}

var courseSearch = function(department, course_number, classes) {
    var returnObject = [];
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].course.indexOf(department + " " + course_number.toString()) != -1) {
            returnObject[Object.keys(returnObject).length] = classes[i];
        }
    }
    return returnObject;
}

var departmentSearch = function(department, classes) {
    var returnObject = [];
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].course.indexOf(department) != -1) {
            returnObject[Object.keys(returnObject).length] = classes[i];
        }
    }
    return returnObject;
}

var titleSearch = function(searchTerm, classes) {
    var returnObject = [];
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].title.toUpperCase() == searchTerm.toUpperCase()) {
            returnObject[Object.keys(returnObject).length] = classes[i];
            //break b/c only one possible term should be in the objectionary
            break;
        }
    }
    return returnObject;
}

var andSearch = function(object1, object2) {  
    
    var returnObject = [];

    for ( var i = 0; i < Object.keys(object1).length; i++ ) {
        for ( var q = 0; q < Object.keys(object2).length; q++ ) {
            if(object1[i].CRN == object2[q].CRN) {
                returnObject[Object.keys(returnObject).length] = object1[i];
            }
        }
    }
    return returnObject;
}



var orSearch = function(object1, object2) {  
    var isIn;
    for ( var i = 0; i < Object.keys(object1).length; i++ ) {
        isIn = true;
        for ( var q = 0; q < Object.keys(object2).length; q++ ) {
            if(object1[i].CRN == object2[q].CRN) {
                isIn = true;
                break;
            } else {
                isIn = false;
            }
        }
        if (isIn == false) { 
            object2[Object.keys(object2).length] = object1[i];
        }
    }
    return object2;
}


var notSearch = function(object1, masterObject) {  
    var isIn;
    var object2 = [];
    for ( var i = 0; i < Object.keys(masterObject).length; i++ ) {
        isIn = true;
        
        for ( var q = 0; q < Object.keys(object1).length; q++ ) {
            if(object1[q].CRN == masterObject[i].CRN) {
                isIn = true;
                break;
            } else {
                isIn = false;
            }
        }
        if (isIn == false) { 
            object2[Object.keys(object2).length] = masterObject[i];
        }
    }
    return object2;
}

console.log("CRNSearch");
console.log(CRNSearch(17153, exClasses));

console.log("CCCSearch");
console.log(CCCSearch("SLSC", exClasses));

console.log("CourseSearch");
console.log(courseSearch("ACFM", "220", exClasses));

console.log("DepartmentSearch");
console.log(departmentSearch("CSCI", exClasses));

console.log("CCCSearch");
console.log(CCCSearch("SLSC", exClasses));

console.log("titleSearch");
console.log(titleSearch("Business Law I", exClasses));

console.log("andSearch");
console.log(andSearch(CCCSearch("SLSC", exClasses),CRNSearch(17153, exClasses)))

console.log("orSearch");
console.log(orSearch(CCCSearch("SLSC", exClasses),CRNSearch(17153, exClasses)))

console.log("notSearch");
console.log(notSearch(CCCSearch("SLSC", exClasses), exClasses))
