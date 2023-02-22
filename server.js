const http = require("http");
const fs = require("fs");
const port = process.env.port || 9001;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("An error has occured", error);
  } else {
    console.log("Server is running on port " + port);
  }
});
