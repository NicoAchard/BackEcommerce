const Order = require("../models/Order");
const User = require("../models/User");

async function index(req, res) {
  const orders = await Order.findAll({ include: { model: User, paranoid: false } });

  return res.json(orders);
}
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

module.exports = { index, store };
