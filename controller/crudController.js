const CrudExpressMysql = require("../models/crudExpressMysql");

async function showFile(req,res){
    try{
        return res.render('index');
    }catch(error){
        console.log(error)
        return res.send("Something went wrong");
    }
}


async function addCrudFunction(req,res){
    try{
        console.log(req.body.editor1);
        await CrudExpressMysql.create({
            create:req.body.editor1
        })
        return res.render('index');
    }catch(error){
        console.log(error)
        return res.send("Something went wrong");
    }
}

module.exports = {
    showFile,
    addCrudFunction
}