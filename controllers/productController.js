const { Product } = require("../models");
const slugify = require("slugify");
const formidable = require("formidable");

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

async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (error, fields, files) => {
      const { name, description, stock, price, categoryId, highlight } = fields;

      let photosDefault = files.photos
        ? [{ url: files.photos.newFilename }]
        : [{ url: "undefined_board.jpg" }, { url: "undefined_board_2.jpg" }];

      // if (photos) {
      //   photosDefault = [{ url: photos }];
      // }

      const products = await Product.findAll();

      if (products.find((product) => product.slug === slugify(name))) {
        return res.json({
          response:
            "There is already a product with that name in the System. Please change the name of the product",
          status: 401,
        });
      } else {
        const product = await Product.create({
          name,
          description,
          slug: slugify(name),
          highlight,
          stock,
          price,
          photos: photosDefault,
          categoryId,
        });

        return res.json({ response: "The product was successfully created", product, status: 200 });
      }
    });
  } catch (error) {
    console.log(error);
    return res.json({ response: "An error occurred while creating the product", status: 500 });
  }
}

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
