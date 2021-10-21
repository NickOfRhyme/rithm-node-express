const fs = require("fs");
const process = require("process");
const request = require("request");

const searchTerm = process.argv.slice(2).join(" ");

request(
  {
    url: `https://icanhazdadjoke.com/search?term=${searchTerm}`,
    headers: {
      Accept: "application/json",
    },
  },
  (err, res, body) => {
    if (!err && res.statusCode == 200) {
      const jokes = JSON.parse(body).results.map((jokeObj) => jokeObj.joke);
      const jokeNum = Math.floor(Math.random() * jokes.length) + 1;
      const jokeFile = fs.openSync("jokes.txt", "a");
      console.log(jokes);
      fs.writeSync(jokeFile, `${jokes[jokeNum]}\n`);
    }
  }
);
