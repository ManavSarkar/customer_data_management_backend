const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const dontenv = require("dotenv");
dontenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const customerRoute = require("./customerRoute");
app.use("/api", customerRoute);
app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:" + PORT);
});
