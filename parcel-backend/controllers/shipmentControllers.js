import Shipment from "../model/shipmentModel.js";


// Get the shipment by id route for costomer to search their shipment.
export async function getShipmentById(req, res) {
    try {
        const shipment = await Shipment.findById(req.params.id);

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
export async function getShipments( req, res ) {
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
            message:"Shipment created successfully"
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