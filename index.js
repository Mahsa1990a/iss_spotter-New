//It will require and run our main fetch function.

const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip); //It worked! Returned IP: 72.137.57.5
});

fetchCoordsByIP("72.141.45.113", (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned Coords:' , coords);
})