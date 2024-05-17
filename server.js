const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));


let component = {};
let readings = {};


app.get("/component", (req, res) => {
  console.log(component);
  res.status(200).json(component);
  component = {};
});

app.post("/component", (req, res) => {
  
  console.log(req.body);

  component = req.body;
  
  res.status(200).json({ success: true});
    
 });

app.post("/readings", (req, res) => {
  readings = req.body;

  res.status(200).json({ success: true});
})
 
app.get("/readings", (req, res) => {
  readings = req.body;

  res.status(200).json(readings);
})

 const PORT = process.env.PORT || 3000;
 const HOST = os.hostname();

 app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
})