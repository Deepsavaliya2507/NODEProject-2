const { bookService } = require("../services");

/** create book */
const createBook = async (req, res) => {
  try {
    const reqBody = req.body;

    const bookExists = await bookService.getBookByEmail(reqBody.email);
    if (bookExists) {
      throw new Error("book already created by this email!");
    }

    const book = await bookService.createBook(reqBody);
    if (!book) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Book create successfully!",
      data: { book },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get book list */
const getbookList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await bookService.getbookList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get book list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get book details by id */
const getbookDetails = async (req, res) => {
  try {
    const getDetails = await bookService.getbookById(req.params.bookId);
    if (!getDetails) {
      throw new Error("book not found!");
    }

    res.status(200).json({
      success: true,
      message: "book details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** book details update by id */
const updateDetails = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const bookExists = await bookService.getbookById(bookId);
    if (!bookExists) {
      throw new Error("book not found!");
    }

    await bookService.updateDetails(bookId, req.body);

    res
      .status(200)
      .json({ success: true, message: "book details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete book */
const deletebook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const bookExists = await bookService.getbookById(bookId);
    if (!bookExists) {
      throw new Error("book not found!");
    }

    await bookService.deletebook(bookId);

    res.status(200).json({
      success: true,
      message: "book delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBook,
  getbookList,
  getbookDetails,
  updateDetails,
  deletebook,
};
