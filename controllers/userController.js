const { User } = require("../models");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll({ include: "role" });
  console.log(users);
  return res.json(users);
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    let newUser = null;
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (error, fields, files) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to process form data." });
      }

      const { firstname, lastname, email, password, address, phone_number } = fields;
      newUser = new User({
        firstname,
        lastname,
        email,
        password,
        address,
        phone_number,
        roleId: 100,
        avatar: files.avatar.newFilename,
      });
      const token = jwt.sign({ id: newUser.id }, process.env.TOKEN_SECRET);
      await newUser.save();
      return res.json({
        token,
        data: newUser,
      });
    });
  } catch (error) {
    return console.log("error");
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

async function destroy(req, res) {
  const user = await User.destroy({ where: { id: req.params.id } });
  return res.json({ response: "The user was deleted successfully" });
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
