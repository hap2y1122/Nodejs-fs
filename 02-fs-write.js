var fs = require('fs');

try {
    /* create & write sth to it [Sync] */
    fs.writeFileSync("./test.js","Swaraj is a developer","utf-8");
    console.log("File Created Successfully");

} catch (e) {

    console.log(e);
} finally{

    console.log("Swaraj");
}