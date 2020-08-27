const request = require("request");

//we are exporting fetchBreedDescriptoin as an OBJ to index.js with the properties breedName, callback
const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
    if (error) {
    //working
      callback(error, null);
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
        const error = ("Breed does not exist, please check you entered a real breed");
        callback(null, error);
      } else {
      // console.log(data);
      // console.log(typeof data);
      // console.log(data[0].description)
      result = data[0].description;
      console.log(typeof result);
        callback(null, result);
      }
    }
  });

};

module.exports = {fetchBreedDescription};