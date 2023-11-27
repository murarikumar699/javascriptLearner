const express = require("express");
const route = express.Router();
const crudController = require("../controller/api/expressCrud");

route.get("/crudExpressMongo",crudController.crudExpressMongo);
route.get("/crudExpressMysql",crudController.crudExpressMysql);
route.get("/authNode",crudController.authNode);
module.exports = route