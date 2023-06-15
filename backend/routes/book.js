const router = require("express").Router();
const Book = require("../models/Book");
const path = require("path");
// create
router.post("/", (req, res) => {
  try {
    const details = JSON.parse(req.body.details);
    const coverImage = req.files.coverImage;
    const bookFile = req.files.bookFile;

    const book = new Book({
      ...details,
    });

    if (!coverImage || !bookFile)
      res.status(400).json({ msg: "You need to upload cover image and book" });

    const bookPath = path.join(path.resolve(), "public", "books");
    const coverImagePath = path.join(path.resolve(), "public", "cover-images");
    bookFile.name = `${book._id}${path.parse(bookFile.name).ext}`;
    coverImage.name = `${book._id}${path.parse(coverImage.name).ext}`;

    bookFile.mv(`${bookPath}/${bookFile.name}`, async (err) => {
      if (err) {
        throw err;
      } else {
        coverImage.mv(`${coverImagePath}/${coverImage.name}`, async (mvErr) => {
          if (mvErr) {
            throw mvErr;
          } else {
            book.bookFile = `books/${bookFile.name}`;
            book.coverImage = `cover-images/${coverImage.name}`;

            book.save();

            res.json({ msg: book });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Server Error: Cannot upload book at the moment" });
  }
});

// get all
router.get("/", async (req, res) => {
  try {
    let queryParams = {};
    if (req.query.search) {
      const searchText = req.query.search;
      queryParams = {
        ...queryParams,

        $or: [
          {
            title: {
              $regex: searchText,
              $options: "i",
            },
          },
          {
            isbn: {
              $regex: searchText,
              $options: "i",
            },
          },
          {
            description: {
              $regex: searchText,
              $options: "i",
            },
          },
          {
            authors: {
              $regex: searchText,
              $options: "i",
            },
          },
          {
            categories: {
              $regex: searchText,
              $options: "i",
            },
          },

          {
            keywords: {
              $regex: searchText,
              $options: "i",
            },
          },
        ],
      };
    }

    if (req.query.category) {
      const category = req.query.category;
      queryParams = {
        $or: [
          {
            categories: {
              $regex: category,
              $options: "i",
            },
          },
        ],
      };
    }

    if (req.query.author) {
      const author = req.query.author;
      queryParams = {
        $or: [
          {
            authors: {
              $regex: author,
              $options: "i",
            },
          },
        ],
      };
    }

    if (req.query.keyword) {
      const keyword = req.query.keyword;
      queryParams = {
        $or: [
          {
            keywords: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
      };
    }

    let books;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;

    let total = 1;
    if (req.query.popular) {
      books = await Book.find({})
        .sort("-views")
        .limit(limit * 1)
        .skip((page - 1) * limit);

      total = await Book.countDocuments({});
    } else {
      books = await Book.find({ ...queryParams })
        .sort("-createdAt")
        .limit(limit * 1)
        .skip((page - 1) * limit);
      total = await Book.countDocuments({ ...queryParams });
    }

    res.json({
      msg: {
        books,
        page,
        total: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Server Error: Cannot get books at the moment" });
  }
});

// book catalog
router.get("/catalog", (req, res) => {
  try {
    const alphabets = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    const catalog = {};

    alphabets.forEach(async (alphabet, i) => {
      const regExp = new RegExp(`^${alphabet}`);
      const books = await Book.find({
        title: {
          $regex: regExp,
          $options: "i",
        },
      });

      if (books.length > 0) catalog[alphabet] = books;

      if (alphabets.length - 1 === i) res.json({ msg: catalog });
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Server Error: Cannot get catalog at the moment" });
  }
});

// single book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book.views = book.views + 1;
    book.save();
    res.json({ msg: book });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Server Error: Cannot get book at the moment" });
  }
});

// update book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.json({ msg: book });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Server Error: Cannot update book at the moment" });
  }
});

// delete
router.delete("/", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    res.json({ msg: book });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Server Error: Cannot delete book at the moment" });
  }
});

module.exports = router;
