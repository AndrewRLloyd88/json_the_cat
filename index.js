//index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    // console.log("in index");
    console.log('Error fetch details:', error);
  } else {
    // console.log("I am returning from the index.js inside of fetchBreedDescription\n")
    console.log(desc);
    // console.log(typeof desc);
    // return desc;
  }
});