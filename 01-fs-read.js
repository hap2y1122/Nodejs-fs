var fs = require('fs');

/* Reading README.md [Async] */
fs.readFile('./README.md',"utf-8",function (err,data) {
    if(err)
        throw err.message
    console.log(data)
});

console.log("Swaraj");
/*  Reading the file would take some time that's why 
    Swaraj is printed first in the terminal & then the data.
    Asynchronous -> Non blocking IO Model
 */