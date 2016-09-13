require('dotenv').config();

var getRepoContributors = require('./getRepoContributors.js');
var downloadImageByURL = require('./downloadImageByUrl.js')

var request = require("request");
var fs = require('fs');

var api_token = process.env['GITHUB_API_TOKEN'];

var inputs = process.argv.slice(2);
var owner = inputs[0];
var repo = inputs[1];

var apiRoot = "https://api.github.com";


getRepoContributors(owner, repo, api_token, function(err, contributors) {
  contributors.forEach(function(value, index) {
    var filename = "./avatars/"+value.login+".jpg";
    downloadImageByURL(value.avatar_url, filename);
  })
});
