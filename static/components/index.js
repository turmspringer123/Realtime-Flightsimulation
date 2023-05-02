
require('dotenv').config();
const fs = require("fs");
const qs = require('querystring')
const {fetch} = require('fetch-ponyfill')({Promise: require('pinkie-promise')})
const parse = require('parse-jsonp');
const isObj = o => 'object' === typeof o && o !== null && !Array.isArray(o)

const endpoint = 'https://data-live.flightradar24.com/zones/fcgi/feed.js'
const headers = {
	       "accept-encoding": "gzip, br",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "max-age=0",
        "origin": "https://www.flightradar24.com",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "content-type" : "application/json",
        'User-Agent': 'https://github.com/derhuerst/fetch-flightradar24-flights'
    }


const query = {
    
    callback: 'jsonp',
    // options
    
}


const url = endpoint + '?' + qs.stringify(query)
return fetch(url, {
    mode: 'cors',
    redirect: 'follow',
    headers,
    referrer: 'no-referrer',
    referrerPolicy: 'no-referrer'
})
.then((res) => {
    if (!res.ok) {
        const err = new Error(res.statusText)
        err.statusCode = res.status
        throw err
    }
    return res.text()
})
.then((jsonp) => {
    const data = parse('jsonp', jsonp)
    if (!isObj(data)) throw new Error('response data must be an object')

    const aircraft = []
    for (let id in data) {
        const d = data[id]
        if (!Array.isArray(d)) continue
        aircraft.push({
            id,
            registration: d[9] || !null,
            flight: d[13]|| !null ,
            callsign: d[16] || !null, // ICAO ATC call signature
            origin: d[11] || !null, // airport IATA code
            destination: d[12] || !null, // airport IATA code
            latitude: d[1],
            longitude: d[2],
            altitude: d[4],  // in feet
            bearing: d[3], // in degrees
            speed: d[5] || null, // in knots
            rateOfClimb: d[15], // ft/min
            isOnGround: !!d[14],
            squawkCode: d[6], // https://en.wikipedia.org/wiki/Transponder_(aeronautics)
            model: d[8] || !"GLID", // ICAO aircraft type designator
            modeSCode: d[0] || null, // ICAO aircraft registration number
            radar: d[7], // F24 "radar" data source ID
            isGlider: !!d[17],
            timestamp: d[10] || null
        })
    }
    
        

     {
    fs.writeFile('flightradar.json', JSON.stringify(aircraft), (err) => {
        if (err) {
            throw new Error('Something went wrong.')
        }
       

        console.log(fs.readFileSync('flightradar.json', 'utf-8'))
    })

   

}})

	
	