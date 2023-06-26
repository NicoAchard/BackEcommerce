const { Category } = require("../models");

async function index(req, res) {
  try {
    const categories = await Category.findAll();
    return res.json({ status: 200, categories });
  } catch (e) {
    console.log(error);
    return res.json({ response: "Something went wrong. Please try again later", status: 400 });
  }
}

async function show(req, res) {}

async function store(req, res) {
  try {
    const { name, description } = req.body;
    if (name && description) {
      await Category.create({
        name,
        description,
      });

      return res.json({ response: "The category was created successfully", status: 200 });
    } else {
      return res.json({ response: "Please enter the requested information.", status: 401 });
    }
  } catch (error) {
    console.log(error);
    return res.json({ response: "Something went wrong. Please try again later", status: 400 });
  }
}

async function update(req, res) {}

async function destroy(req, res) {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    return res.json({ response: "The category was deleted successfully", status: 200 });
  } catch (error) {
    console.log(error);
    return res.json({ response: "Something went wrong. Please try again later", status: 400 });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};