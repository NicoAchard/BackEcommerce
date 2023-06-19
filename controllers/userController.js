const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    //profilePicture
    const { firstname, lastname, email, password, address, phone_number } = req.body;
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      address,
      phone_number,
    });
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
    return res.json({
      token,
      data: user,
    });
  } catch (error) {
    return console.log("error");
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
