const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) =>{
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();

    });
    // console.log(req);
    // if(req.url == '/'){
    //     res.writeHead(200, {"Content-Type": "text/html"});
    //     res.write("<h1>This is homepage</h1>");
    // }
    // else{
    //     res.writeHead(200, {"Content-Type": "text/plain"});
    //     const parseURL = url.parse(req.url);
    //     res.write("Welcome to " + parseURL.path);
    // }
});

server.listen(6969, () => {
    console.log('You are running port 6969');
});