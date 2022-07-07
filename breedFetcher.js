const request = require("request");

const breed = process.argv[2];

request(
	`http://api.thecatapi.com/v1/breeeds/search?q=${breed}`,
	(error, response, body) => {
		if (error) console.log(error);
		else if (body === "[]") console.log("No breed found!");
		else if ("message" in JSON.parse(body))
			console.log(JSON.parse(body).message);
		else {
			const data = JSON.parse(body);
			console.log(data[0].description);
		}
	}
);
