const express = require("express");
const { engine } = require("express-handlebars");
const routerProductos = require("./routes/productoRouters");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/api/productos", routerProductos);

app.get("/", (req, res) => {
  res.redirect("/api/productos");
});

app.get("/api/productos", (req, res) => {
  res.render("formProducts");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
