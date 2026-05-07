import mongoose from "mongoose";

const hubModel = new mongoose.Schema({
    hubName:{
        type: String,
        unique:true,
        required: true
    },
    address:{
        type: String,
        required:true
    }
})

const Hub = mongoose.model("Hub",hubModel);

export default Hub;