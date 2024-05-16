const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
const host = os.hostname();

app.use(express.json());

app.use(cors({ origin: "*" }));


let component = {};


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

app.listen(8080, () => {
  console.log(`Server is running on port 8080 on ${host}`);
});
