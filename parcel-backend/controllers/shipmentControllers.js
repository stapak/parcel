import axios from "axios";
import Shipment from "../model/shipmentModel.js";
import { RECAPTCHA_SECRET_KEY } from "../commonData.js";

// Get the shipment by id route for costomer to search their shipment.
export async function getShipmentById(req, res) {
    try {

        const captchaValue= req.query.captchaValue;
  
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaValue}`
       
        const response = await axios.post(verifyUrl);
        if (!response.data.success){
            return res.status(400).json({
                success:false,
                message:"Captcha verfication falied"
            })
        }

        const shipment = await Shipment.findById(req.query.id);

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found"
            });
        }

        return res.status(200).json({
            success: true,
            shipment
        });

    } catch(error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


// get the shipment using current hub.
export async function getShipmentsByHub( req, res ) {
    try{
        const hub = req.params.hub
        const shipments = await Shipment.find({
          currentHub: hub
        });

        return res.status(200).json({
            success: true,
            message:"Fetched the data successfully",
            shipments:shipments
        })
    } catch (error) {
        console.log("error is ", error);
        return res.status(500).json({
            success: false,
            message:"Internal server error"
        })

    }
}




// Controller Add shipment. 
export async function addShipment( req, res ) {
    const { fromHub, toHub , status } = req.body;

    try{        
        const shipment = await Shipment.create({
                            fromAddress:fromHub,
                            toAddress:toHub,
                            currentHub:fromHub,
                            log: [ status ]
                        })
        return res.status(201).json({
            success:true,
            message:"Shipment created successfully",
            shipment:shipment
        })
        
    }catch(error){
        return res.status(500).json({
            success: false,
            message:"Internal server error."
        })
    }
}







// update shpiment status
export async function updateShipment( req, res ) {
    const { currentHub, id, status } = req.body;

    try{        
        const shipment = await Shipment.findByIdAndUpdate(
                           id,
                           { 
                            $push: { log: status },
                            currentHub: currentHub
                        
                           },
                           { new: true }
                         );

        if(!shipment){
            return res.status(404).json({
                success:false,
                message:"Shipment not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Shipment status updated successfully"
        })
        
    }catch(error){
        console.error("Error is:",error);
        return res.status(500).json({
            success: false,
            message:"Internal server error."
        })
    }

}

// Mark shipment as delivered 
export async function markDelivery ( req, res ) {
    const id = req.params.id;

    try{        
        const shipment = await Shipment.findByIdAndUpdate(
                           id,
                           {
                            currentHub: "Delivered"
                           },
                           { new: true }
                         );

        if(!shipment){
            return res.status(404).json({
                success:false,
                message:"Shipment not found"
            })
        }


        return res.status(200).json({
            success:true,
            message:"Shipment status updated successfully"
        })
        
    }catch(error){
        console.error("Error is:",error);
        return res.status(500).json({
            success: false,
            message:"Internal server error."
        })
    }

}



// delete shipment.
export async function deleteShipment( req, res ) {
    try{
        const id = req.params.id;
        const deleted = await Shipment.findByIdAndDelete(id);

        if ( !deleted ) {
            return res.status(404).json({ 
               message: "Shipment not found"
            });
        }

        return res.status(200).json({ 
            message: "Shipment deleted successfully" 
        });
    }catch(error){
        console.error("Error is:",error);
        return res.status(500).json({
            success: false,
            message:"Internal server error."
        })
    }
}


// to get all the shipments without any condition for sudo and core team.
export async function getAllShipments( req, res ) {
    try{
        
        const shipments = await Shipment.find();

        return res.status(200).json({
            success: true,
            message:"Fetched the data successfully",
            shipments:shipments
        })
    } catch (error) {
        console.log("error is ", error);
        return res.status(500).json({
            success: false,
            message:"Internal server error"
        })

    }
}