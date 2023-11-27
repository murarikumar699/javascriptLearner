const mongoose = require("mongoose");

const CrudExpressMysqlNode = new mongoose.Schema({
  connection: {
    type: String,
    required: false,
  },
  schema: {
    type: String,
    required: false,
  },
  routes: {
    type: String,
    required: false,
  },
  create: {
    type: String,
    required: false,
  },
  getAll: {
    type: String,
    required: false,
  },
  getById: {
    type: String,
    required: false,
  },
  editAt: {
    type: String,
    required: false,
  },
  deleteUser: {
    type: String,
    required: false,
  },
  controllerExport: {
    type: String,
    required: false,
  },
  image:[{
    type:String,
    required: false,
  }],
  express:{
    type:String,
    required: false,
  }
});


const CrudExpressMysql = mongoose.model("CrudExpressMysql", CrudExpressMysqlNode);
// async function create(){
//   await CrudExpressMysql.create({
//     connection:`const mongoose = require("mongoose");
//     try {
//         mongoose.connect('mongodb://127.0.0.1:27017/javascriptLearner');
//         console.log("Connected to database successfully");
//     } catch (error) {
//         console.log("not connected to db");
//         handleError(error);
//     }
//     module.exports = db;`,
//     schema:`const sequelize = require("sequelize");
//     const db = require("../config/db");
//     var user = db.define(
//     "user",
//     {
//         id:  { type: sequelize.INTEGER, primaryKey: true },
//         name:  { type: sequelize.STRING },
//         email:  { type: sequelize.STRING },
//         password:  { type: sequelize.STRING },
//         mobile:  { type: sequelize.NUMBER },
//         },
//     {,
//         freezeTableName: true,
//         timestamps: false,
//         }
//     );
//     module.exports = user;`,
//     routes:`const express = require("express");
//     const router = express.Router();
//     const userController = require("../controller/userController");
//     router.get("/", userController.getAll);
//     router.get("/:username", userController.getUsername);
//     router.post("/", userController.createNew);
//     router.put("/", userController.editAt);
//     router.delete("/", userController.deleteUser);
//     module.exports = router;`,
//     index:`const express = require("express");
//     const app = express();
//     const db = require("./config/db");
//     const route = require("./routes/route");
//     var bodyParser = require('body-parser')
    
//     // parse application/x-www-form-urlencoded
//     app.use(bodyParser.urlencoded({ extended: false }))
    
//     // parse application/json
//     app.use(bodyParser.json())
//     app.use(route);
//     const PORT=8000;
    
//     app.listen(PORT, () => {
//         console.log(``app is working on port ${PORT}``);
//     })`,
//     create:`async function createNew(req, res){
//       try {
//           // check data has already exists
//           const isUserExists = await User.countDocuments({ email:req.body.email });
//           if (isUserExists > 0) {
//               res.status(500).json({ status:false, message: 'email already exists' });
//           } else {
//               await User.create({
//                       name: req.body.name,
//                       email: req.body.email,
//                       password: req.body.password,
//                       mobile: req.body.mobile,
//                   })
//               .then((result) => {
//                   res.status(201).json({
//                   message: 'user successful created',data: {
//                       name: result.name,
//                       email: result.email,
//                       password: result.password,
//                       mobile: result.mobile,
//                       },
//                   });
//               });
//           }
//           } catch (error) {
//               console.log(error);
//               res.status(404).json({ status:false, message: "Something went wrong" });
//           }
//       }`,
//     getAll:`async function getAll(req,res){
//       try{
//           let data = await User.find();
//           return res.status(200).json({status:true,data:data});
//       }catch(error){
//           //console is for to check what is the error.
//           console.log(error);
//           return res.status(500).json({status:false,message:"Something went wrong"});
//       }
//     }`,
//     getById:`async function getById(req,res){
//       try{
//           let data = await User.findOne({_id:req.params.id});
//           return res.status(200).json({status:true,data:data});
//       }catch(error){
//           //console is for to check what is the error.
//           console.log(error);
//           return res.status(500).json({status:false,message:"Something went wrong"});
//       }
//     }`,
//     editAt:`async function editAt(req,res){
//       try{
//           await User.updateOne({_id:req.params.id},{
//               name: req.body.name,
//               email: req.body.email,
//               password: req.body.password,
//               mobile: req.body.mobile,
//           });
//           return res.status(200).json({status:true,message:"record updated successfully"});
//       }catch(error){
//           //console is for to check what is the error.
//           console.log(error);
//           return res.status(500).json({status:false,message:"Something went wrong"});
//       }
//     }`,
//     deleteUser:`async function deleteUser(req,res){
//       try{
//           await User.deleteOne({_id:req.params.id});
//           return res.status(200).json({status:true,message:"user deleted successfully"});
//       }catch(error){
//           //console is for to check what is the error.
//           console.log(error);
//           return res.status(500).json({status:false,message:"Something went wrong"});
//       }
//     }`
//   })

//   await CrudExpressMysql.updateOne({_id:"65619ad5addf8eeb2846096a"},{
//     image:["http://localhost:8000/expressMongodb/create.png","http://localhost:8000/expressMongodb/getAll.png","http://localhost:8000/expressMongodb/getDeatil.png","http://localhost:8000/expressMongodb/edit.png","http://localhost:8000/expressMongodb/delete.png"]
//   })
// }

// updateOne();
module.exports = CrudExpressMysql;