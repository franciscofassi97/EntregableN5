const express = require("express");
const pug = require("pug");
const app = express();
const PORT = 8080;
const routerProductos = require("./routes/productoRouters");
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/api/productos", routerProductos);

app.get("/", (req, res) => {
  res.redirect("/api/productos");
});

app.get("/api/productos", (req, res) => {
  res.render("formProductos");
});

app.listen(PORT, () => {
  console.log(`Server is running on por ${PORT}`);
});
