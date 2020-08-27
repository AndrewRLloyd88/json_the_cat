// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      //tests added with mentor
      console.log(desc.length);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      //tests added with mentor to check out the space issue                                                     ^
      console.log(expectedDesc.length);
      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns Breed does not exist, please check you entered a real breed when the breed is invalid', (done) => {
    fetchBreedDescription('Sibian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      //tests added with mentor
      console.log(desc.length);
      const expectedDesc = "Breed does not exist, please check you entered a real breed";
      console.log(expectedDesc.length);
      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});