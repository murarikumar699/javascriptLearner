const CrudExpressMongodb = require("../../models/crudExpressMongodb");
const CrudExpressMysql = require("../../models/crudExpressMysql");
const AuthNode = require("../../models/authNode");

async function crudExpressMongo(req,res){
    try{
        let data = await CrudExpressMongodb.findOne();
        return res.status(200).json({status:true,data:data});
    }catch(error){
        console.log(error)
        return res.statue(500).json({status:false,message:"Something went wrong"});
    }
}

async function crudExpressMysql(req,res){
    try{
        let data = await CrudExpressMysql.findOne();
        return res.status(200).json({status:true,data:data});
    }catch(error){
        console.log(error)
        return res.statue(500).json({status:false,message:"Something went wrong"});
    }
}

async function authNode(req,res){
    try{
        let data = await AuthNode.findOne();
        return res.status(200).json({status:true,data:data});
    }catch(error){
        console.log(error)
        return res.statue(500).json({status:false,message:"Something went wrong"});
    }
}



module.exports = {
    crudExpressMongo,
    crudExpressMysql,
    authNode
}