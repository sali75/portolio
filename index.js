const express = require("express");
const path = require("path");

const app = express();
const oneHour = 3600000; // 3600000msec == 1hour
const onesecend = 1000;

app.use(express.static("www", { maxAge: onesecend })); // Client-side file caching

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html")).maxage(0);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
