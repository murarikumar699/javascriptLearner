const mongoose = require("mongoose");

const AuthNodeMongo = new mongoose.Schema({
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
  index: {
    type: String,
    required: false,
  },
  image:[{
    type:String,
    required: false,
  }],
  directory: {
    type: String,
    required: false,
  },
  controllerExport: {
    type: String,
    required: false,
  },
  checkAuth: {
    type: String,
    required: false,
  },
  logIn: {
    type: String,
    required: false,
  },
  response: {
    type: String,
    required: false,
  },
  signUp:{
    type:String,
    required: false,
  },
  validate:{
    type:String,
    required: false,
  },
  message:{
    type:String,
    required: false,
  },
  dashboard:{
    type:String,
    required: false,
  }
});

const AuthNode = mongoose.model("AuthNode", AuthNodeMongo);


// async function create(){
//   await AuthNode.create({
//     image:["http://localhost:8000/expressMongodb/create.png","http://localhost:8000/expressMongodb/getAll.png","http://localhost:8000/expressMongodb/getDeatil.png","http://localhost:8000/expressMongodb/edit.png","http://localhost:8000/expressMongodb/delete.png"]
//   })
// }

// create();
module.exports = AuthNode;