const express = require("express");
const app = express();
app.use(express.json());
const p = [];
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/new", (req, res) => {
  const newData = "ddd";
  res.send(newData);
});
app.post("/", (req, res) => {
  const { name } = req.body;
  p.push(name);
  res.send(p);
});
app.put("/", (req,res)=>{
  const {index, name} = req.body;
  if(index > p.length - 1){
    return res.send("Index out of range!");
  }
  p[index] = name;
  res.send(p);
})
app.listen(3000, () => console.log("Servidor em execução!"));
