const supabase = require("../config/configSupabase");
const { User } = require("../models");

const formidable = require("formidable");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

async function index(req, res) {
  const users = await User.findAll({ include: "role" });

  return res.json(users);
}

async function show(req, res) {
  const { id } = req.params;
  console.log(id);
  const user = await User.findByPk(id);
  if (user) {
    return res.json({ response: "User found", status: 200, user });
  } else {
    return res.json({ response: "User notfound", status: 400 });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (error, fields, files) => {
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      if (error) {
        console.error(error);
        // return res.status(500).json({ error: "Failed to process form data." });
        return res.json({ response: "Something went wrong. Please try again later", status: 400 });
      }
      const avatar = files.avatar
        ? files.avatar.newFilename
        : "http://localhost:3000/img/defaultProfile.jpg";

      let { firstname, lastname, email, password, address, phone_number } = fields;

      firstname = firstname === "null" ? null : firstname;
      lastname = lastname === "null" ? null : lastname;
      email = email === "null" ? null : email;
      password = password === "null" ? null : password;
      address = address === "null" ? null : address;
      phone_number = phone_number === "null" ? null : phone_number;

      //Check if the user has missed an important field
      if (
        !firstname ||
        !lastname ||
        !email ||
        !validateEmail(email) ||
        !password ||
        !address ||
        !phone_number
      ) {
        return res.json({ response: "Please enter the requested information.", status: 401 });
      }
      const existingUserEmail = await User.findOne({
        where: { email: email },
      });

      //Check if A user already exists with that email in the system.
      if (existingUserEmail) {
        return res.json({
          response:
            "A user with that email already exists in the system. Please choose a different email.",
          status: 402,
        });
      }
      const newUser = new User({
        firstname,
        lastname,
        email,
        password,
        address,
        phone_number,
        roleId: 100,
        avatar,
      });
      const token = jwt.sign({ id: newUser.id }, process.env.TOKEN_SECRET);
      await newUser.save();
      return res.json({
        token,
        data: newUser,
        response: "The user was created successfully",
        status: 200,
      });
    });
  } catch (error) {
    console.log(error);
    return res.json({ response: "Something went wrong. Please try again later", status: 400 });
  }
}

async function update(req, res) {
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (error, fields, files) => {
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      error &&
        res.json({ response: "Something went wrong. Please try again later", status: 400, error });

      let { firstname, lastname, email, password, address, phone_number } = fields;

      firstname = firstname === "null" ? null : firstname;
      lastname = lastname === "null" ? null : lastname;
      email = email === "null" ? null : email;
      password = password === "null" ? null : password;
      address = address === "null" ? null : address;
      phone_number = phone_number === "null" ? null : phone_number;

      if (
        !firstname ||
        !lastname ||
        !email ||
        !validateEmail(email) ||
        !password ||
        !address ||
        !phone_number
      ) {
        return res.json({ response: "Please enter the requested information.", status: 401 });
      }

      const user = await User.findOne({ where: { id: req.params.id } });

      if (!user) {
        return res.json({ response: "User not found.", status: 404 });
      }

      if (files.avatar) {
        const ext = path.extname(files.avatar.filepath);
        const newFileName = `image_${Date.now()}${ext}`;

        const { data, err } = await supabase.storage
          .from("img")
          .upload(newFileName, fs.createReadStream(files.avatar.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.avatar.mimetype,
            duplex: "half",
          });

        const avatar = newFileName;
        user.avatar = avatar;
      }

      user.firstname = firstname;
      user.lastname = lastname;
      user.email = email;
      user.password = password;
      user.address = address;
      user.phone_number = phone_number;

      await user.save();

      return res.json({ response: "User updated successfully", status: 200, user });
    });
  } catch (error) {
    console.log(error);
    return res.json({ response: "Something went wrong. Please try again later", status: 400 });
  }
}

async function edit(req, res) {}

async function destroy(req, res) {
  const user = await User.destroy({ where: { id: req.params.id } });
  return res.json({ response: "The user was deleted successfully" });
}

module.exports = {
  index,
  show,
  store,
  edit,
  update,
  destroy,
};
