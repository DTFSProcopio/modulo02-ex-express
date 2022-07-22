const express = require("express");
const app = express();
app.use(express.json())
app.get("/", (_req, res) => {
  res.send("Olá mundo!");
});
app.get("/new", (_req, res) => {
  const newData = "Olá novo mundo!";
  res.send(newData);
});

app.listen(3001, () => console.log("Servidor em execução!"));
