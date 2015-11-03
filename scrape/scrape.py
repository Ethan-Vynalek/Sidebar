import mechanize
import json
import requests
import datetime
from lxml import html
from bs4 import BeautifulSoup

# command to run script every hour
# while sleep 3600; python script.py; done

URL = "https://www.banner.bucknell.edu/BANPRD/hwzkschd.P_Bucknell_SchedbyDept"
JSONURL = "https://api.myjson.com/bins/3vg1s"
CRN = 0
COURSE = 1
TITLE = 2
TIME = 3
ROOM = 4
INSTR = 5
SEATS = 6
WAIT = 7
RES = 8
PRM = 9
CCC = 10

br = mechanize.Browser()
br.set_handle_robots(False)
url = br.open(URL)

# 70 departments
courseSyms = ["ACFM", "ANBE", "ANTH", "ARBC", "ARTH", "ARST", "ASTR", "BIOL",
           "BMEG", "OFFL", "OFFD", "OFFF", "OFFAT", "OFFDC", "CHEG", "CHEM",
           "CHIN", "CEEG", "CLAS", "CSCI", "DANC", "EAST", "ECON", "EDUC",
           "ECEG", "ENGR", "ENGL", "ENST", "FLMS", "FOUN", "FREN", "GEOG",
           "GEOL", "GRMN", "GLBM", "GREK", "HEBR", "HIST", "HUMN", "IDPT",
           "IREL", "ITAL", "JAPN", "LATN", "LAMS", "LEGL", "LING", "MGMT",
           "MSUS", "MIDE", "MATH", "MECH", "MILS", "MUSC", "NEUR", "OFFG",
           "OCST", "PHIL", "PHYS", "POLS", "PSYC", "RELI", "RESC", "RUSS",
           "SIGN", "SOCI", "SPAN", "THEA", "UNIV", "WMST"]

index = 0
courses = {}

for course in courseSyms:
    br.select_form("valform")
    control = br.form.find_control("param1")
    control.value = [course]

    br.submit()

    response = br.response()
    url = response.read()


    soup = BeautifulSoup(url, 'lxml')
    trs = soup.findAll("tr", align="left")
    for tr in trs:
        tds= tr.findChildren("td")
        if (tds[0].get_text().isdigit()):
            # description and guide need the link
            # books needs the value attribute
            courses[index] = {}
            courses[index]["CRN"] = tds[CRN].get_text().strip()
            courses[index]["course"] = tds[COURSE].get_text().strip()
            courses[index]["title"] = tds[TITLE].get_text().strip()
            courses[index]["time"] = tds[TIME].get_text().replace('\n', '|')
            courses[index]["room"] = tds[ROOM].get_text().replace('\n', '|')
            courses[index]["instructor"] = tds[INSTR].get_text().replace('\n', '')
            courses[index]["seatsAvail"] = tds[SEATS].get_text().strip()
            courses[index]["waitList"] = tds[WAIT].get_text().strip();
            courses[index]["seatsRes"] = tds[RES].get_text().strip()
            courses[index]["prm"] = tds[PRM].get_text().strip()
            courses[index]["CCC"] = tds[CCC].get_text().strip()
            index = index + 1

    br.back()

r = requests.put(JSONURL, json=courses)

f = open('scrape/database.log', 'a')

# Success
if(int(r.status_code) == 200):
    output = "updated successfully on "
    output += str(datetime.datetime.now().date())
    output += " at "
    output += str(datetime.datetime.now().time())
    output += "\n"
    f.write(output)

# Failure
else:
    output = "failed update on "
    output += str(datetime.datetime.now().date())
    output += " at "
    output += str(datetime.datetime.now().time())
    output += "\n"
    f.write(output)
