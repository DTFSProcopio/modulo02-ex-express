const express = require("express");
const routes = express.Router();
let products = require("../products");

routes.get("/", (_req, res) => {
  res.send(products);
});
routes.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  product = products.find((product) => product.id === id);
  res.send(product);
});
routes.post("/", (req, res) => {
  const content = req.body;
  if (content.length) {
    content.forEach((product) => products.push(product));
  } else {
    products.push(content);
  }
  res.send(products);
});
routes.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = products.find((product) => product.id === id);
  if (!found) {
    return res.status(404).send({ message: "Item not found!" });
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
routes.patch("/:id", (req, res) => {
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

routes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = products.find((product) => product.id === id);
  if (!found) {
    return res.status(404).send({ message: "item não encontrado!" });
  }
  products = products.filter((product) => product.id !== id);
  res.sendStatus(204);
});

module.exports = routes;
