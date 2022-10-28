import authorsService from "./services/authors-service.js";
import libraryService from "./services/library-service.js";

export const validateBook = (newBook) => {
  const authorId = newBook["author"];
  const authorExists = authorsService.authors[authorId];

  const libraryId = newBook["library"];
  const libraryExists = libraryService.libraries[libraryId];

  return authorExists && libraryExists;
};
