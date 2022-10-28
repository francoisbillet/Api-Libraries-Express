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

const putOne = (libraryId, library) => {
  libraries[libraryId] = library;
  return libraries[libraryId];
};

const patchOne = (libraryId, fields) => {
  for (const [key, value] of Object.entries(fields)) {
    libraries[libraryId][key] = value;
  }
  return libraries[libraryId];
};

export default { libraries, getAll, create, getOne, putOne, patchOne };
