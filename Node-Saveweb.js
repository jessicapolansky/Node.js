var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var request = require('request');

rl.question("Webpage to save? ", function(page) {
    rl.question("Where to save? ", function(filename) {
    
    request.get(page, function (error, response, html) {
        if (error) {
            console.error(error.message);
            return;
  }
  
        fs.writeFile(filename, html, function (error) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log('File Save: ', filename);
  rl.close();
});
});
});
});