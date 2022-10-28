const books = {};

const getAll = () => {
  return books;
};

const create = (newBook) => {
  const id = Object.keys(books).length + 1;
  books[id] = newBook;
  return books[id];
};

const getOne = (bookId) => {
  return books[bookId];
};

const putOne = (bookId, author) => {
  books[bookId] = author;
  return books[bookId];
};

const patchOne = (bookId, fields) => {
  for (const [key, value] of Object.entries(fields)) {
    books[bookId][key] = value;
  }
  return books[bookId];
};

const deleteOne = (bookId) => {
  const bookToDelete = books[bookId];
  delete books[bookId];
  return bookToDelete;
};

export default { getAll, create, getOne, putOne, patchOne, deleteOne };
