const handler = require("./handler.js");

const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    handler.handleHomeRoute(request, response);
  } else if (url.indexOf("public") !== -1) {
    handler.handlePublic(request, response, url);
  } else if (url === "/create-post") {
    console.log("TEST, Setup of post request");
    // handler.apiHandler(request, response, url);
  } else if (url === "/apiHandler") {
    handler.apiHandler(request, response, url);
  } else if (url === "/splash") {
    console.log("onload2 has been reached");
    handler.apiSplash(request, response);
  } else {
    response.writeHead(404, "Content-Type: text/html");
    response.end("<h1>404 file not found</h1>");
  }
};

module.exports = router;
