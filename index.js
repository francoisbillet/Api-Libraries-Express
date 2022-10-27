const express = require("express");
const app = express();
const port = 3000;

const router = require("./router");

app.use(express.json()); // for parsing application/json

app.use("/", router);

// Serving static files from public/ folder :
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
