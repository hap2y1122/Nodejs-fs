var fs = require('fs');

/* file deletion [Async] */
fs.unlink("./test.js",function (err) {
    if(err)
        throw err.message
    console.log("File Deleted Successfully");
});

console.log("Swaraj");