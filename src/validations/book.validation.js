const Joi = require("joi");

/** create book */
const createbook = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    author: Joi.string().required().trim(),
  }),
};

/** GEt book list */
const getbookList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get book details by id */
const getDetails = {
  params: Joi.object().keys({
    bookId: Joi.string().required().trim(),
  }),
};

/** book details update by id */
const updateDetails = {
  params: Joi.object().keys({
    bookId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    author: Joi.string().trim(),
  }),
};

/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};

module.exports = {
  createbook,
  getDetails,
  getbookList,
  updateDetails,
  sendMail,
};
