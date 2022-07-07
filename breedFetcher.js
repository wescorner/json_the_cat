const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `http://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) callback(error, null);
      else if (body === "[]") callback("No breed found!", null);
      else if ("message" in JSON.parse(body))
        callback(JSON.parse(body).message, null);
      else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
