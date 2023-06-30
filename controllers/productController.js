const { Product } = require("../models");
const slugify = require("slugify");
const formidable = require("formidable");
const supabase = require("../config/configSupabase");
const fs = require("fs");
const path = require("path");

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

      let photosDefault = [];

      if (Array.isArray(files.photos)) {
        files.photos.forEach((file) => {
          photosDefault.push({ url: file.newFilename });
        });
      } else if (files.photos) {
        photosDefault.push({ url: files.photos.newFilename });
      } else {
        photosDefault.push({ url: "undefined_board.jpg" }, { url: "undefined_board_2.jpg" });
      }

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

async function update(req, res) {
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (error, fields, files) => {
      const { name, description, stock, price, categoryId, highlight } = fields;
      const id = req.params.id;

      const product = await Product.findByPk(id);

      let photos = [];
      for (const photo of product.photos) {
        photos.push(photo);
      }

      if (!product) {
        return res.json({ response: "Product not found", status: 404 });
      }

      if (files.photos) {
        const ext = path.extname(files.photos.filepath);
        const newFileName = `image_${Date.now()}${ext}`;

        const { data, err } = await supabase.storage
          .from("img")
          .upload(newFileName, fs.createReadStream(files.photos.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.photos.mimetype,
            duplex: "half",
          });

        photos.push({ url: newFileName });
      }

      const updatedProduct = await product.update({
        name,
        description,
        highlight,
        stock,
        price,
        photos,
        categoryId,
      });

      return res.json({
        response: "The product was updated successfully",
        product: updatedProduct,
        status: 200,
      });
    });
  } catch (error) {
    console.log(error);
    return res.json({ response: "An error occurred while updating the product", status: 500 });
  }
}

async function destroyImg(req, res) {
  const id = req.params.id;
  const product = await Product.findByPk(id);

  product.photos = product.photos.splice(req.body.index, 1);
  await product.save();
  return res.json({ response: "The product was deleted successfully" });
}

async function destroy(req, res) {
  const product = await Product.destroy({ where: { id: req.params.id } });
  return res.json({ response: "The product was deleted successfully" });
}

module.exports = {
  index,
  show,
  create,
  store,
  update,
  destroy,
  destroyImg,
};
