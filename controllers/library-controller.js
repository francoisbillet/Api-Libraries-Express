import libraryService from "../services/library-service.js";

const getAll = (req, res) => {
  const libraries = libraryService.getAll();
  res.send(libraries);
};

const create = (req, res) => {
  const newLibrary = libraryService.create(req.body);
  res.status(201).send(newLibrary);
};

const getOne = (req, res) => {
  const library = libraryService.getOne(req.params.libraryId);
  if (!library) res.status(404).send("This library does not exist");
  res.send(library);
};

const putOne = (req, res) => {
  const library = libraryService.putOne(req.params.libraryId, req.body);
  if (!library) res.status(404).send("This library does not exist");
  res.send(library);
};

const patchOne = (req, res) => {
  const library = libraryService.patchOne(req.params.libraryId, req.body);
  if (!library) res.status(404).send("This library does not exist");
  res.send(library);
};

export default { getAll, create, getOne, putOne, patchOne };
