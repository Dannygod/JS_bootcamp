const path = require("path");

let newPath = path.join(__dirname, "123.js");
const absolutePath = path.resolve();
const fileName = path.basename(__filename);
const fileExtension = path.extname(__filename);
const pathInfo = path.parse(__filename);
const pathString = path.format(pathInfo);


console.log(newPath);
console.log(absolutePath);
console.log(fileName);
console.log(fileExtension);
console.log(pathInfo); // return an object
console.log(pathString); // return a string (contain dir & base 即可使用)
