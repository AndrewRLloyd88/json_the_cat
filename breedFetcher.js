const request = require("request")
breedName = process.argv[2];
let emptyArray = [];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  //we dont need the status code at this stage
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  //wensite is still returning something
  // console.log(body)
  //do a methood to find out if array is empty we cant use ===

  if (error) {
    console.log("I am error")
    console.log(error);
  } else {

    //body is a string at this point so no equality checks will help
    // if (body === emptyArray) {
    //   //run logic to return check your spelling message
    //   console.log("Breed does not exist, please check you entered a real breed")
    // } else {
    // catInfo = body
    
    //PARSE THE DATA
    const data = JSON.parse(body);
    //at this point data is now an object and if it has data in it the length will be more than 0
    if (data.length === 0) {
      console.log("Breed does not exist, please check you entered a real breed")
    } else {
      console.log(data);
      console.log(typeof data);
      console.log(data[0].description)
    }
  }
});