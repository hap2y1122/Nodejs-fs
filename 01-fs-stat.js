var fs = require('fs'); /* File System */

fs.stat('./README.md',"utf-8",function(err,data){   /* Derives details of README.md */
    if(err)
        throw err.message
    console.log("File exists: "+data.isFile());
    console.log("File Size: "+data.size);
    console.log("File Created On: "+data.ctime);
});