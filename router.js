const express = require("express");
const router = express.Router();

const libraryController = require("./controllers/library-controller");

router
  .route("/library")
  .get(libraryController.getAll)
  .post(libraryController.create);

router
  .route("/library/:libraryId")
  .get(libraryController.getOne)
  .put(libraryController.putOne)
  .patch(libraryController.patchOne);

module.exports = router;
