const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create book */
router.post(
  "/create-book",
  validate(bookValidation.createbook),
  bookController.createbook
);

/** Get book list */
router.get(
  "/list",
  validate(bookValidation.getbookList),
  bookController.getbookList
);

/** Get book details by id */
router.get(
  "/get-details/:bookId",
  validate(bookValidation.getDetails),
  bookController.getbookDetails
);

/** book details update by id */
router.put(
  "/update-details/:bookId",
  validate(bookValidation.updateDetails),
  bookController.updateDetails
);

/** Delete book */
router.delete(
  "/delete-book/:bookId",
  validate(bookValidation.getDetails),
  bookController.deletebook
);

/** Send mail */
router.post(
  "/send-mail",
  validate(bookValidation.sendMail),
  bookController.sendMail
);

module.exports = router;
