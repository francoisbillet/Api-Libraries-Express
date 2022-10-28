import express from "express";

import libraryController from "./controllers/library-controller.js";
import authorsController from "./controllers/authors-controller.js";
import booksController from "./controllers/books-controller.js";

const router = express.Router();

// Libraries

router
  .route("/library")
  .get(libraryController.getAll)
  .post(libraryController.create);

router
  .route("/library/:libraryId")
  .get(libraryController.getOne)
  .put(libraryController.putOne)
  .patch(libraryController.patchOne);

// Authors

router
  .route("/authors")
  .get(authorsController.getAll)
  .post(authorsController.create);

router
  .route("/authors/:authorId")
  .get(authorsController.getOne)
  .put(authorsController.putOne)
  .patch(authorsController.patchOne)
  .delete(authorsController.deleteOne);

// Books

router.route("/books").get(booksController.getAll).post(booksController.create);

router
  .route("/books/:bookId")
  .get(booksController.getOne)
  .put(booksController.putOne)
  .patch(booksController.patchOne)
  .delete(booksController.deleteOne);

export default router;
