var fs = require('fs');

try {
    /* Delete [Sync] */
    fs.unlinkSync("./test.js");
    console.log("File Deleted Successfully");

} catch (e) {
    console.log(e);

} finally{
    console.log("Swaraj");

}