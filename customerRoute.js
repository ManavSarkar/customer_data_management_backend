const express = require("express");
const route = express.Router();

const customerController = require("./customerConstroller");

route.get("/", customerController.getAll);
route.get("/:id", customerController.getOne);
route.post("/", customerController.create);
route.put("/:id", customerController.update);
route.delete("/:id", customerController.delete);

module.exports = route;
