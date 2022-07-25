const express = require("express");

const app = express();
const routeProducts = require("./routes/route.product");

app.use(express.json());
app.use("/products", routeProducts);

app.listen(3001, () => console.log("Servidor em execução!"));
