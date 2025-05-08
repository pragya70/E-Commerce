const Product = require("../../models/Product");

const getFilterProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some Internal Server Error",
    });
  }
};

module.exports = { getFilterProducts };
