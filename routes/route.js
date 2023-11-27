const express = require("express");
const router = express.Router();
// const crudController = require("../controller/crudController");

const userController = require("../controller/userController");

router.get("/getAll", userController.getAll);
router.get("/:id", userController.getById);
router.post("/createNew", userController.createNew);
router.put("/editAt/:id", userController.editAt);
router.delete("/delete/:id", userController.deleteUser);


// router.get("/",crudController.showFile);
// router.post("/addCrudFunction",crudController.addCrudFunction);
module.exports = router