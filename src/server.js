const http = require("http");
const router = require("./router");

const port = process.env.PORT || 4020;

const server = http.createServer(router);

server.listen(port, function() {
  console.log(`The server is running on port: ${port}`");
});
