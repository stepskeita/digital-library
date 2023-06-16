const router = require("express").Router();
const mongoose = require("mongoose");
const generator = require("generate-password");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { sendSingleEmail } = require("../utils/sendEmail");
const { userProtect, adminProtect } = require("../middlewares/protect");
// register user

router.post("/register", userProtect, adminProtect, async (req, res) => {
  try {
    const password = generator.generate({
      length: 10,
      numbers: true,
    });
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ msg: "This user is already in the system" });

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    user = await User.create({
      name,
      email,
      password: passwordHash,
      modifiedBy: [
        {
          reason: "User creation",
          user: req.user._id,
        },
      ],
    });

    sendSingleEmail({
      email,
      subject: `Your registration credentials`,
      message: `
      <p>Dear ${name}</p>
      <p>You are successfully registered as an admin to <a href="${process.env.FRONTEND_URL}">${process.env.PRODUCT_NAME}</a></p>
      <p>Use the credentials below to login. You will be prompted to change your password but that is part of completing the registration</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Password:</b> ${password}</p>

      `,
    });
    res.json("User is successfully created");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Server Error: Cannot register user at the moment" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid email" });

    if (!bcrypt.compareSync(password, user.password))
      return res.status(400).json({ msg: "Invalid password" });

    const details = { ...user._doc };
    delete details.password;

    res.json({
      msg: {
        ...details,
        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error: Cannot login at the moment" });
  }
});

module.exports = router;
