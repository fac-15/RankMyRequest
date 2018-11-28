const handler = (module.exports = {});
const request = require('request');
const http = require('http');
const fs = require('fs');
const path = require('path');

const headers = {
  html: { "content-type": "text/html" },
  css: { "content-type": "text/css" },
  js: { "content-type": "application/javascript" },
}

handler.home = function(req, res) {
    const filePath = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        console.log(err);
        res.writeHead(500, headers.html);
        res.end("<h1>Sorry, html file is not working.</h1>");
      } else {
        res.writeHead(200, headers.html);
        res.end(file);
      }
    });
  };

  handler.apiHandler =

  