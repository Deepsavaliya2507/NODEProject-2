const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

bookSchema.pre("save", async function (next) {
  const book = this;

  if (book.isModified("password")) {
    book.password = hash(book.password, 8);
  }
  next();
});

const book = mongoose.model("books", bookSchema);
module.exports = book;
