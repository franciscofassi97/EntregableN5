const Contenedor = require("../models/Contenedor");
const contenedor = new Contenedor("productos.json");

const createProduct = async (req, res) => {
  try {
    const { title, price, thumbnail } = req.body;
    const producto = {
      title,
      price,
      thumbnail,
    };
    const id = await contenedor.save(producto);
    if (id) {
      res.redirect("/");
    }
  } catch (error) {
    console.error(`Error al guardar el objeto: ${error.message}`);
  }
};

const getAllProductos = async (req, res) => {
  try {
    const products = await contenedor.getAll();
    res.render("partials/listTable", { products });
  } catch (error) {
    console.error(`Error al leer todos los objetos: ${error.message}`);
  }
};

module.exports = {
  createProduct,
  getAllProductos,
};
