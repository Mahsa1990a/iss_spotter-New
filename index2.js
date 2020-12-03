const { fetchMyIP, fetchCoordsByIP } = require("./iss_promised");

fetchMyIP()
.then(fetchCoordsByIP)
.then(body => console.log(body));
//body will now be the response body (JSON string) returned from our second API call, to ipvigilante,
//containing geographical information for the given IP address.


