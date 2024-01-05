const fs = require('fs');

fs.writeFile("./test.txt", "1234567890", (e) => {
    if (e) throw e;
    console.log("File has been written.\n");
})

fs.readFile("./mymath.js", "utf-8", (e, data) => {
    if (e) throw e;
    console.log(data);
})