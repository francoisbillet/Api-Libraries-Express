const libraryService = require("./../services/library-service");

exports.getAll = (req, res) => {
  const libraries = libraryService.getAll();
  res.send(libraries);
};

exports.create = (req, res) => {
  const newLibrary = libraryService.create(req.body);
  res.status(201).send(newLibrary);
};

exports.getOne = (req, res) => {
  const library = libraryService.getOne(req.params.libraryId);
  if (!library) res.status(404).send("This library does not exist");
  res.send(library);
};

exports.putOne = (req, res) => {
  const library = libraryService.putOne(req.params.libraryId, req.body);
  if (!library) res.status(404).send("This library does not exist");
  res.send(library);
};

exports.patchOne = (req, res) => {
  const library = libraryService.patchOne(req.params.libraryId, req.body);
  if (!library) res.status(404).send("This library does not exist");
  res.send(library);
};
