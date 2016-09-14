require('dotenv').config();

var getRepoContributors = require('./getRepoContributors.js');
var downloadImageByURL = require('./downloadImageByUrl.js')

var request = require("request");
var fs = require('fs');

var api_token = process.env['GITHUB_API_TOKEN'];

var owner = process.argv[2];
var repo = process.argv[3];
var apiRoot = "https://api.github.com";

if (api_token === undefined) {
  console.log("Please check that you have a .env file");
  process.exit(1);
} else if (process.argv.length !== 4) {
  console.log("Please pass only two arguments, first: repo owner, second: repo name");
  process.exit(1);
}

getRepoContributors(owner, repo, api_token, function(err, incomingMessage, contributors) {
  if (err) {
    console.log(err);
  } else if (incomingMessage.caseless.dict.status !== '200 OK') {
    console.log("Your credentials are incorrect");
  } else if (!Array.isArray(contributors)) {
    console.log(owner, 'is not a valid owner, or', repo, 'is not a valid repo. Check your input and try again');
  } else {
    contributors.forEach(function(value, index) {
      var directory = "./avatars";
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
        console.log(`Directory ${directory} has been created`);
      }
        var filename = directory + '/' + value.login + ".jpg";
      downloadImageByURL(value.avatar_url, filename);
    });
  }
});

