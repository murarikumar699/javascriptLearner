const mongoose = require("mongoose");

const CrudExpressMongodb = new mongoose.Schema({
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

const CrudExpressMongo = mongoose.model("CrudExpressMongodb", CrudExpressMongodb);


// async function create(){
//   await CrudExpressMongo.updateOne({_id:"65619ad5addf8eeb2846096a"},{
//     image:["http://localhost:8000/expressMongodb/create.png","http://localhost:8000/expressMongodb/getAll.png","http://localhost:8000/expressMongodb/getDeatil.png","http://localhost:8000/expressMongodb/edit.png","http://localhost:8000/expressMongodb/delete.png"]
//   })
// }

// create();
module.exports = CrudExpressMongo;