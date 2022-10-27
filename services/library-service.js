const libraries = {};

const getAll = () => {
  return libraries;
};

const create = (newLibrary) => {
  const id = Object.keys(libraries).length + 1;
  libraries[id] = newLibrary;
  return libraries[id];
};

const getOne = (libraryId) => {
  return libraries[libraryId];
};

const putOne = (libraryId, body) => {
  const libraryToModify = libraries[libraryId];
  libraries[libraryId] = body;
  return libraries[libraryId];
};

const patchOne = (libraryId, body) => {
  const libraryToModify = libraries[libraryId];
  for (const [key, value] of Object.entries(body)) {
    libraries[libraryId][key] = value;
  }
  return libraries[libraryId];
};

module.exports = { getAll, create, getOne, putOne, patchOne };
