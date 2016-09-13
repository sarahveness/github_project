var request = require("request");
var apiRoot = "https://api.github.com";

module.exports = function getRepoContributors(owner, repo, api_token, cb) {


  console.log("getting repo contributors");

  result = [];
  request.get({
    url: apiRoot + '/repos/' + owner + "/" + repo + '/contributors',
    auth: {
      user: 'sarahveness',
      pass: api_token
    },
    headers: {
      'User-Agent': 'Lighthouse'
    },
    json: true
  }, function (err, incomingMessage, contributors) {
      console.log("got repo contributors");
      debugger;
      if (err) {
        console.log("Error geting cons: " +err);
        return;
      }

      cb(err, contributors);

    });
}