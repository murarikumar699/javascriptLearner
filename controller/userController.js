const User = require("../models/user")
async function createNew(req, res){
try {
    // check data has already exists
    const isUserExists = await User.countDocuments({ email:req.body.email });
    if (isUserExists > 0) {
        res.status(500).json({ status:false, message: 'email already exists' });
    } else {
        await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
            })
        .then((result) => {
            res.status(201).json({
            message: 'user successful created',data: {
                name: result.name,
                email: result.email,
                password: result.password,
                mobile: result.mobile,
                },
            });
        });
    }
    } catch (error) {
        console.log(error);
        res.status(404).json({ status:false, message: "Something went wrong" });
    }
};

async function getAll(req,res){
    try{
        let data = await User.find();
        return res.status(200).json({status:true,data:data});
    }catch(error){
        //console is for to check what is the error.
        console.log(error);
        return res.status(500).json({status:false,message:"Something went wrong"});
    }
}

async function getById(req,res){
    try{
        let data = await User.findOne({_id:req.params.id});
        return res.status(200).json({status:true,data:data});
    }catch(error){
        //console is for to check what is the error.
        console.log(error);
        return res.status(500).json({status:false,message:"Something went wrong"});
    }
}

async function editAt(req,res){
    try{
        await User.updateOne({_id:req.params.id},{
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
        });
        return res.status(200).json({status:true,message:"record updated successfully"});
    }catch(error){
        //console is for to check what is the error.
        console.log(error);
        return res.status(500).json({status:false,message:"Something went wrong"});
    }
}

async function deleteUser(req,res){
    try{
        await User.deleteOne({_id:req.params.id});
        return res.status(200).json({status:true,message:"user deleted successfully"});
    }catch(error){
        //console is for to check what is the error.
        console.log(error);
        return res.status(500).json({status:false,message:"Something went wrong"});
    }
}

module.exports = {
    createNew,
    getAll,
    getById,
    editAt,
    deleteUser
}