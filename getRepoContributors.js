var request = require("request");
var apiRoot = "https://api.github.com";

module.exports = function getRepoContributors(owner, repo, api_token, cb) {
var options = {
    url: apiRoot + '/repos/' + owner + "/" + repo + '/contributors',
    auth: {
      user: 'sarahveness',
      pass: api_token
    },
    headers: {
      'User-Agent': 'Lighthouse'
    },
    json: true
  };
  request.get(options, cb);
}