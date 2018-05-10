var request = require('request');
var options = {
  url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  encoding: null
};
var sharp = require('sharp');
request(options, function(error, response, imageData) {
    sharp(imageData).resize(2400, 240);
    sharp(imageData).toFile('output.jpg', function(error) {
  });
});
