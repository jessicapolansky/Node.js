var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input file ", function(input) {
    rl.question("Output file ", function(output) {
        fs.readFile(input, function (error, buffer) {
            var copy = buffer.toString();
            console.log(copy);
            if (error) {
                console.error(error.message);
                return;
  }
        fs.writeFile(output, copy, function (error) {
            if (error) {
                console.error(error.message);
                return;
  }
                console.log('File Save: ', output);
                rl.close();
        });
        });
    });
});
                