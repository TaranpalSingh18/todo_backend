const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    
    category:{
        type : String,
        required : true
    },

    priority:{
        type : Number,
        required: true,
    },
    id:{
        type: Number,
        required: true,
        unique: true
    }
})

const model = mongoose.model("tasks",schema);

module.exports= model;
