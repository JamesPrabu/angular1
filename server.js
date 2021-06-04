const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(__dirname + '/dist/angular1', {
  maxAge: '1d',
  setHeaders: response => {
    response.setHeader('Expires', new Date(Date.now() + 86400000 * 1).toUTCString());
  }
}));

app.get("/*", (request, response) => {
  response.sendFile(path.join(__dirname + '/dist/angular1/index.html'));
});

app.listen(process.env.PORT || 8080);
