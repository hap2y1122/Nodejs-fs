var fs = require('fs');

/* create a file & write sth to it [Async] */
fs.writeFile('./text.js',"Swaraj is a developer",function (err) {
    if(err)
        throw err.message
    console.log("File Created Successfully");
});

console.log("Swaraj");