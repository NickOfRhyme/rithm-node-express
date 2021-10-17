const request = require("request");

request("https://api.chucknorris.io/jokes/random", (err, res, body) => {
  if (!err && res.statusCode == 200) {
    console.log(JSON.parse(body));
  }
});
