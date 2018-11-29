const https = require("https");
const fs = require("fs");
const path = require("path");
const nasa = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

const handleHomeRoute = (request, response) => {
  const url = request.url;
  console.log(url);
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, "Content-Type: text/html");
      response.end(file);
    }
  });
};

const handlePublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    //ico: 'image/x-icon',
    jpg: "image/jpeg",
    png: "image/png"
  };

  const filePath = path.join(__dirname, "..", url);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, "Content-Type: text/html");
      response.end("<h1>404 file not found</h1>");
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file);
    }
  });
};

const apiHandler = (request, response, url) => {
  https.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", res => {
    let result = "";
    response.on("data", chunk => {
      result += chunk;
    });
    response.on("error", () => {
      console.log("error in the apiHandler");
    });
    response.on("end", () => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(JSON.parse(result));
    });
  });
};

// handler.apiHandler();

module.exports = {
  handleHomeRoute,
  handlePublic,
  apiHandler
};
