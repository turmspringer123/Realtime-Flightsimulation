

from bs4 import BeautifulSoup
import schedule
import re
from http.client import ACCEPTED
import urllib.parse
import requests
import json
import csv
import time
from time import sleep


from collections import OrderedDict



def update():
    
 schedule.every(2).seconds.do(update)
 
 
f=[]
def to_geojson():
    data=json.load(open("flightradar.json", "r", encoding="utf-8"))
    
    f = [
            OrderedDict(
            type='Feature',
            id=ac[0],
            geometry=OrderedDict(type='Point', coordinates=[ac[6],ac[7]]),
            
        ) for ac in data.get([data])
    ]

    f.append(data)

data = OrderedDict()
data['type'] = 'FeatureCollection'
data['features'] = f

with open('flightradar2.json','w') as u:
    json.dump(f,u,indent=4)
    
         

if __name__ == "__main__":
 update(), 
        
 while True:
     schedule.run_pending()
 time.sleep(1)
