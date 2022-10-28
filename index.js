import express from "express";
const app = express();
const port = 3000;

import router from "./router.js";

app.use(express.json()); // for parsing application/json

app.use("/", router);

// Serving static files from public/ folder :
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
