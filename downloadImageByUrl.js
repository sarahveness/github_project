var request = require("request");
var fs = require('fs');

module.exports = function downloadImageByUrl(url, filePath) {
  request
  .get(url)
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream(filePath))
}