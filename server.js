const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();

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

 const PORT = process.env.PORT || 3000;
 const HOST = os.hostname();

 app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
})