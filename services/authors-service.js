export const authors = {};

const getAll = () => {
  return authors;
};

const create = (newAuthor) => {
  const id = Object.keys(authors).length + 1;
  authors[id] = newAuthor;
  return authors[id];
};

const getOne = (authorId) => {
  return authors[authorId];
};

const putOne = (authorId, author) => {
  authors[authorId] = author;
  return authors[authorId];
};

const patchOne = (authorId, fields) => {
  for (const [key, value] of Object.entries(fields)) {
    authors[authorId][key] = value;
  }
  return authors[authorId];
};

const deleteOne = (authorId) => {
  const authorToDelete = authors[authorId];
  delete authors[authorId];
  return authorToDelete;
};

const updateAuthors = (newBook) => {
  const authorId = newBook["author"];
  authors[authorId]["booksWritten"].push(newBook);
};

export default {
  authors,
  getAll,
  create,
  getOne,
  putOne,
  patchOne,
  deleteOne,
  updateAuthors,
};
