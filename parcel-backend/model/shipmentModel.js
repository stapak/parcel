import mongoose from "mongoose";

const shimpmentModel = new mongoose.Schema({
    fromAddress :{
        type: String,
        required:true
    },
    toAddress:{
        type:String,
        required:true
    },
    currentHub:{
        type:String,
        required:true
    },
    log:{
        type:[String],
        required: true
    }

})

const Shipment = mongoose.model("Shipment",shimpmentModel);

export default Shipment;