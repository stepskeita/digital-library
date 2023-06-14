const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userProtect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (!token) {
        res.status(401).json({
          msg: "Not Authorized: No Token",
        });
      }

      const { id } = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(id);

      if (!user) {
        res.status(401).json({
          msg: "Not Authorized: Invalid Token",
        });
      } else {
        req.user = user._doc;

        next();
      }
    } catch (error) {
      if (error.message && error.message === "jwt expired") {
        res.status(401).json({
          msg: "Session expired. Login Again",
        });
      } else
        res.status(401).json({
          msg: "Not Authorized: Invalid User",
        });
    }
  } else {
    res.status(401).json({
      msg: "Not Authorized: No Token",
    });
  }
};

const passwordChangedProtect = (req, res, next) => {
  try {
    if (req.user && req.user.isPasswordChanged) {
      next();
    } else {
      res.status(401).json({
        msg: "Not authorized you need to change your password",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "Not authorized you need to change your password",
    });
  }
};

const adminProtect = (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401).json({
        msg: "Not authorized as admin",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "Not authorized as admin",
    });
  }
};

module.exports = {
  userProtect,
  adminProtect,
  passwordChangedProtect,
};
