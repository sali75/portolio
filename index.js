const express = require("express");
const path = require("path");

const app = express();

// const onesecend = 1000;

// app.use(express.static(__dirname, { maxAge: onesecend }));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
