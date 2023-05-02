function fetchAPIData() {
    const locationInput = document.getElementById('location');
    const locationValue = locationInput.value;
    const url = `http://tgftp.nws.noaa.gov/data/observations/metar/stations/${locationValue}`
    // do the URL Request
  
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('input[type=submit]').addEventListener('click', fetchAPIData);
  });