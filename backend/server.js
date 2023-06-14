const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const fileUpload = require("express-fileupload");
const connectDB = require("./config/db");

// require routes
const user = require("./routes/user");
const book = require("./routes/book");

connectDB();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", user);
app.use("/api/v1/book", book);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Running at ${PORT}`));
