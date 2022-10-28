import authorService from "../services/authors-service.js";

const getAll = (req, res) => {
  const authors = authorService.getAll();
  return res.send(authors);
};

const create = (req, res) => {
  const authorCreated = authorService.create(req.body);
  return res.status(201).send(authorCreated);
};

const getOne = (req, res) => {
  const author = authorService.getOne(req.params.authorId);
  if (!author) return res.status(404).send("Author not found");
  return res.send(author);
};

const putOne = (req, res) => {
  const author = authorService.putOne(req.params.authorId, req.body);
  if (!author) return res.status(404).send("Author not found");
  return res.send(author);
};

const patchOne = (req, res) => {
  const author = authorService.patchOne(req.params.authorId, req.body);
  if (!author) return res.status(404).send("Author not found");
  return res.send(author);
};

const deleteOne = (req, res) => {
  const author = authorService.deleteOne(req.params.authorId);
  if (!author) return res.status(404).send("Author not found");
  return res.send(author);
};

export default { getAll, create, getOne, putOne, patchOne, deleteOne };
