const express = require("express");
const app = express();
const PORT = 8080;
const routerProductos = require("./routes/productoRouters");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/api/productos", routerProductos);

app.get("/", (req, res) => {
  res.redirect("/api/productos");
});

app.get("/api/productos", (req, res) => {
  res.render("partials/formProductos");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
