const express = require("express");

const app = express();
const routeProducts = require("./routes/route.product");

app.use(express.json());
app.use("/api/products", routeProducts);
app.use((req, res, next)=>{
    res.status(404).send("Page not found!");
    next();
})

app.listen(3001, () => console.log("Servidor em execução!"));
