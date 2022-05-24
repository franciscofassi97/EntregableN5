const { Router } = require("express");
const router = Router();

//Controler
const {
  createProduct,
  getAllProductos,
} = require("../controllers/controlerProduct");
//POST
router.post("/create", createProduct);

//GET
router.get("/all", getAllProductos);
module.exports = router;
