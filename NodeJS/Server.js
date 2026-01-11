const fs = require("fs");

const readStream = fs.createReadStream("input.txt", "utf8");
const http = require("http");


const server = http.createServer(async(req, res) => {
    const url = req.url;

    if (url === '/file') {
         res.writeHead(200, { 'content-type': 'text/plain' });
      var datab=""
       readStream.on("data", (chunk) => {
    console.log("Reading Chunk:");
    console.log(chunk);
   datab=chunk
});
        res.end(String(datab));
    }

    else {
     res.writeHead(404, { 'content-type': 'text/plain' });
     res.end('404 Not Found.');
   }
});


server.listen(5000, () => {
    console.log('server is running on http://localhost:5000');
 });