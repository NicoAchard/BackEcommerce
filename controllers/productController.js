const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (e) {
    return console.log(e);
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findOne({ where: { slug: req.params.slug } });
    return res.json(product);
  } catch (e) {
    return console.log(e);
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

async function destroy(req, res) {
  const product = await Product.destroy({ where: { id: req.params.id } });
  return res.json({ response: "The product was deleted successfully" });
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
