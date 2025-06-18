const Product = require("../../models/Product");

const getFilterProducts = async (req, res) => {
  try {
    const {
      category = [],
      brand = -[],
      sortBy = "price-lowtohigh",
    } = req.query;

    let filters = {};

    if (category > 0) {
      filters.category = { $in: category.split(",") };
    }
    if (brand > 0) {
      filters.brand = { $in: brand.split(",") };
    }

    let sort = {};

    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1;
        break;
      case "price-hightolow":
        sort.price = -1;
        break;
      case "title-atoz":
        sort.title = 1;
        break;
      case "title-ztoa":
        sort.title = -1;
        break;
      default:
        sort.price = 1;
        break;
    }

    const products = await Product.find(filters).sort(sort);
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

const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not Found",
      });
    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some Internal Server Error",
    });
  }
};

module.exports = { getFilterProducts, getProductDetails };
