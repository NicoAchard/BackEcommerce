const Order = require("../models/Order");

async function store(req, res) {
  try {
    const { products } = req.body;
    await Order.create({
      userId: req.auth.id,
      products,
      status: "payment pending",
    });
    return res.json({ response: "order created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating order", details: error.message });
  }
}

module.exports = { store };
