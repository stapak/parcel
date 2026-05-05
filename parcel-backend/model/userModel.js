import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    email:{
        type: String,
        unique:true,
        required : true,
    },
    password:{
        type:String,
        required: true
    },
    hub:{
        type:String,
        required: true
    },
    userCategory:{
        type:String,
        required : true
    }

})

const User = mongoose.model("User",userModel);

export default User;
