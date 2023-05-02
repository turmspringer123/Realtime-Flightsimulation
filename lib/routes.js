'use strict'

const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')
const mime = require('mime-types')
const store = require('./store')

const ASSETS_FILES = fs.readdirSync(path.join(__dirname, '..', 'assets'))

exports.index = function (req, res) {
  res.setHeader('Content-Type', 'text/html')
  fs.createReadStream(path.join(__dirname, '..', 'assets', 'index.html')).pipe(res)
}

exports.assets = function (req, res) {
  const filename = req.params.file

  if (ASSETS_FILES.indexOf(filename) === -1) {
    res.writeHead(404)
    res.end()
    return
  }

  res.setHeader('Content-Type', mime.lookup(filename))
  fs.createReadStream(path.join(__dirname, '..', 'assets', filename)).pipe(res)
}

exports.airlines = function (req, res) {
  let first = true
  res.setHeader('Content-Type', 'application/json')

  fs.createReadStream(path.join(__dirname, '..', 'data', 'airlines.csv'))
    .pipe(csv(['id', 'name', 'alias', 'IATA', 'ICAO', 'callsign', 'country', 'active']))
    .on('error', function (err) {
      console.error(err.stack)
      if (first) res.writeHead(500)
      res.end()
    })
    .on('data', function (row) {
      Object.keys(row).forEach(function (key) {
        if (row[key] === '\\N') row[key] = null
      })
      row.id = Number.parseInt(row.id, 10)
      row.active = row.active === 'Y'

      // defunct airlines are not flying planes, so no need to return those
      if (!row.active) return

      res.write((first ? '[\n' : ',') + JSON.stringify(row) + '\n')
      first = false
    })
    .on('end', function () {
      res.end(']')
    })
}

exports.airports = function (req, res) {
  let first = true
  res.setHeader('Content-Type', 'application/json')

  fs.createReadStream(path.join(__dirname, '..', 'data', 'airports.csv'))
    .pipe(csv(['id', 'name', 'municipality', 'iso_country',  'ident', 'lat', 'lng', 'altitude', 'DST', 'tz', 'type', 'source']))
    .on('error', function (err) {
      console.error(err.stack)
      if (first) res.writeHead(500)
      res.end()
    })
    .on('data', function (row) {
      Object.keys(row).forEach(function (key) {
        if (row[key] === '\\N') row[key] = null
      })
      row.id = Number.parseInt(row.id, 10)
      row.latitude = row.latitude ? Number.parseFloat(row.latitude) : null
      row.longitude = row.longitude ? Number.parseFloat(row.longitude) : null
     
      res.write((first ? '[\n' : ',') + JSON.stringify(row) + '\n')
      first = false
    })
    .on('end', function () {
      res.end(']')
    })
}

exports.routes = function (req, res) {
  let first = true
  res.setHeader('Content-Type', 'application/json')

  fs.createReadStream(path.join(__dirname, '..', 'data', 'routes.csv'))
    .pipe(csv(['id', 'registration', 'flight', 'callsign', 'origin', 'destination', 'latitude', 'longitude',]))
    .on('error', function (err) {
      console.error(err.stack)
      if (first) res.writeHead(500)
      res.end()
    })
    .on('data', function (row) {
      Object.keys(row).forEach(function (key) {
        if (row[key] === '\\N') row[key] = null
      })
      row.id = Number.parseInt(row.id, 10)
      row.registration = Number.parseInt(row.registration, 10)
      row.destination = Number.parseInt(row.destination, 10)
      row.origin = Number.parseInt(row.origin, 10)

      res.write((first ? '[\n' : ',') + JSON.stringify(row) + '\n')
      first = false
    })
    .on('end', function () {
      res.end(']')
    })
}

exports.aircrafts = function (req, res) {
  const aircrafts = store
    .getAircrafts()
    .filter(function (aircraft) {
      // We only want to plot aircrafts that have a geolocation
      return aircraft.latitude
    })
    .map(function (aircraft) {
      return {
        icao: aircraft.registration,
        count: aircraft.count,
        seen: aircraft.seen,
        lat: aircraft.latitude,
        lng: aircraft.longitude,
        altitude: aircraft.altitude,
        origin: aircraft.origin,
        heading: Math.round(aircraft.bearing),
        speed: Math.round(aircraft.speed),
        callsign: aircraft.callsign
      }
    })
  const body = JSON.stringify(aircrafts)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Content-Length', Buffer.byteLength(body))
  res.end(body)
}
