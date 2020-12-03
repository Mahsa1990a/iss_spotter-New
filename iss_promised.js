const request = require('request-promise-native'); //we use this becuase request does not use promises

const fetchMyIP = function() {
  //fetch the IP address from the API, using the request function
  //and return the promise that is returned by request
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
}
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };