const mongoose = require("mongoose");
try {
    mongoose.connect('mongodb://127.0.0.1:27017/javascriptLearner');
    console.log("Connected to database successfully");
} catch (error) {
    console.log("not connected to db");
    handleError(error);
}