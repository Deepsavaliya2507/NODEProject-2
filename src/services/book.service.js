const { book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<book>}
 */
const createbook = async (reqBody) => {
  return book.create(reqBody);
};

/**
 * Get book list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<book>}
 */
const getbookList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return book.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get book details by id
 * @param {ObjectId} bookId
 * @returns {Promise<book>}
 */
const getbookById = async (bookId) => {
  return book.findById(bookId);
};

/**
 * book details update by id
 * @param {ObjectId} bookId
 * @param {object} updateBody
 * @returns {Promise<book>}
 */
const updateDetails = async (bookId, updateBody) => {
  return book.findByIdAndUpdate(bookId, { $set: updateBody });
};

/**
 * Delete book
 * @param {ObjectId} bookId
 * @returns {Promise<book>}
 */
const deletebook = async (bookId) => {
  return book.findByIdAndDelete(bookId);
};

module.exports = {
  createbook,
  getbookList,
  getbookById,
  updateDetails,
  deletebook,
};
