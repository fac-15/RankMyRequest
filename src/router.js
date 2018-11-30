const handler = require("./handler.js");

const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    handler.handleHomeRoute(request, response);
  } else if (url.indexOf("public") !== -1) {
    handler.handlePublic(request, response, url);
  } else if (url === "/onload") {
    console.log("I have been reached");
    handler.apiHandler(request, response, url);
  } else if (url === "/onload2") {
    console.log("onload2 has been reached");
    handler.apiHandler2(request, response);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>404 file not found</h1>");
  }
};

module.exports = router;
