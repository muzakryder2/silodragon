const express = require("express");
var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();
const port = 3001;

// Body-Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(fileUpload({ useTempFiles: false }));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (request, response) => {
  res.sendfile(__dirname + "/public/index.html");
});

app.listen(3001 || "172.10.201.117");
console.log("Listening on port 3001");
