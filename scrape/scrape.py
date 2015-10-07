import mechanize
from bs4 import BeautifulSoup
from lxml import html

URL = "https://www.banner.bucknell.edu/BANPRD/hwzkschd.P_Bucknell_SchedbyDept"

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
print soup.find(id="coursetable")
