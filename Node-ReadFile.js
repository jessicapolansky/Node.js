var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What file should I read? ", function(answer) {
  fs.readFile(answer, function (error, buffer) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log('File Data: ', buffer.toString());
  rl.close();
});
});