// const https = require("https");
const fs = require("fs");
const path = require("path");
const request = require("request");

// This is the main route of the homepage
const handleHomeRoute = (request, response) => {
  const url = request.url;
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, "Content-Type: text/html");
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, "Content-Type: text/html");
      response.end(file);
    }
  });
};

//this is the route where all of our front end files pass through
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

const apiHandler = (req, res) => {
  request(
    "https://www.coops.tech/wp-json/wp/v2/service",
    { json: true },
    (error, response, body) => {

      //error first response handeling
      if (error) {
        response.writeHead(500, "Content-Type: text/html");
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(body));
      }
    }
  );
};

const apiSplash = (req, res) => {
  request(
    "https://picsum.photos/list",
    { json: true },
    (error, response, body) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(body));
    }
  );
};

module.exports = {
  handleHomeRoute,
  handlePublic,
  apiHandler,
  apiSplash
};
//"https://picsum.photos/200/300?image=20"
