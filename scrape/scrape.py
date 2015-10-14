import mechanize
from bs4 import BeautifulSoup
from lxml import html

URL = "https://www.banner.bucknell.edu/BANPRD/hwzkschd.P_Bucknell_SchedbyDept"
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

br.select_form("valform")
control = br.form.find_control("param1")
control.value = ['CSCI']

br.submit()

response = br.response()
url = response.read()

soup = BeautifulSoup(url, 'lxml')
trs = soup.findAll("tr", align="left")
for tr in trs:
    tds= tr.findChildren("td")
    line = ""
    if (tds[0].get_text().isdigit()):
        line +=  tds[CRN].get_text().strip()
        line += " [] " + tds[COURSE].get_text().strip()
        line += " [] " + tds[TITLE].get_text().strip()
        line += " [] " + tds[TIME].get_text().replace('\n', '|')
        line += " [] " + tds[ROOM].get_text().replace('\n', '|')
        line += " [] " + tds[INSTR].get_text().replace('\n', '')
        line += " [] " + tds[SEATS].get_text().strip()
        line += " [] " + tds[RES].get_text().strip()
        line += " [] " + tds[PRM].get_text().strip()
        line += " [] " + tds[CCC].get_text().strip()
        print line
