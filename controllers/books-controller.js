import booksService from "../services/books-service.js";
import authorsService from "../services/authors-service.js";
import { validateBook } from "../validator.js";

const getAll = (req, res) => {
  const books = booksService.getAll();
  return res.send(books);
};

const create = (req, res) => {
  const newBook = req.body;
  const bookValidated = validateBook(newBook);
  if (!bookValidated) return res.status(400).send("Bad request");

  const bookCreated = booksService.create(newBook);

  // Update author's books
  authorsService.updateAuthors(bookCreated);
  // Update library's books

  return res.status(201).send(bookCreated);
};

const getOne = (req, res) => {
  const book = booksService.getOne(req.params.bookId);
  if (!book) return res.status(404).send("Book not found");
  return res.send(book);
};

const putOne = (req, res) => {
  const book = booksService.putOne(req.params.bookId, req.body);
  if (!book) return res.status(404).send("Book not found");
  return res.send(book);
};

const patchOne = (req, res) => {
  const book = booksService.patchOne(req.params.bookId, req.body);
  if (!book) return res.status(404).send("Book not found");
  return res.send(book);
};

const deleteOne = (req, res) => {
  const book = booksService.deleteOne(req.params.bookId);
  if (!book) return res.status(404).send("Book not found");
  return res.send(book);
};

export default { getAll, create, getOne, putOne, patchOne, deleteOne };
