var fs = require('fs');

/* Reading README.md [Sync] */
var content = fs.readFileSync('./README.md',"utf-8");

console.log(content);
console.log("Swaraj");
/*  Even reading the file would take some time, the content is bound to print first & then Swaraj
    Synchronous -> Blocking IO Model
*/
