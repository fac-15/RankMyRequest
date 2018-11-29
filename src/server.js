const http = require("http");
const router = require("./router");
const port = process.env.PORT || 4040;

const server = http.createServer(router);

server.listen(port, function() {
  console.log("Server is working");
});
