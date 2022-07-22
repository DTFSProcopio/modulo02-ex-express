const express = require("express");
let products = require("./products");
const app = express();
app.use(express.json());
app.get("/products", (_req, res) => {
  res.send(products);
});
app.get("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  product = products.find((product) => product.id === id);
  res.send(product);
});
app.post("/product", (req, res) => {
  const content = req.body;
  if (content.length) {
    content.forEach((product) => products.push(product));
  } else {
    products.push(content);
  }
  res.send(products);
});
app.put("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = products.find((product) => product.id === id);
  if (!found) {
    return res.status(404).send({ message: "item não encontrado!" });
  }
  const content = req.body;
  products = products.map((product) => {
    if (product.id === id) {
      return { ...content };
    }
    return product;
  });
  res.send(products);
});
app.patch("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = products.find((product) => product.id === id);
  if (!found) {
    return res.status(404).send({ message: "item não encontrado!" });
  }
  const content = req.body;
  products = products.map((product) => {
    if (product.id === id) {
      return { ...product, ...content };
    }
    return product;
  });
  res.send(products);
});

app.delete("/product/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = products.find((product) => product.id === id);
  if (!found) {
    return res.status(404).send({ message: "item não encontrado!" });
  }
  products = products.filter((product) => product.id !== id);
  res.sendStatus(204);
});

app.listen(3001, () => console.log("Servidor em execução!"));
