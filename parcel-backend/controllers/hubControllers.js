/**
    Hubs are the main point of the shipment service in every city 
    this file has controllers to add hubs to the database and 

*/

import Hub from "../model/hubModel.js";

// Function to add hub.
export async function addHub(req, res){
    try{
        const { hubName, Address } = req.body;
        if( !hubName || !Address ){
            return res.status(400).json({
                success: false,
                message:"All fields are required"
            })
        }
        
        if( await Hub.findOne({ hubName }) ){
            return res.status(409).json({
                success: false,
                message:" Hub name conflicting with alredy present hub "
            })
        }

        const hub = await Hub.create({
            hubName: hubName,
            address: Address
        })

        return res.status(201).json({
            success: true,
            message:" Hub added successfully "
        })

    }catch(error){
        console.error("Error is:",error);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

// Function to modify hub
export async function modifyHub( req, res ) {
    try{
        const { name, address, id } = req.body;

        if(!id){
            return res.status(400).json({
                success:false,
                message:" hub id not provided"
            })
        }

        const hub = await Hub.findById(id);

        if(!hub){
            return res.status(404).json({
                success: false,
                message:" Hub not found "
            })
        }
        
        if(name){
            hub.hubName = name
        }

        if ( address ){
            hub.address = address
        }

        await hub.save();

        return res.status(200).json({
            success: true,
            message:"Hub Modification Updated"
        })


    }catch(error){
        return res.status(500).json({
            success: false,
            message:" Internal Sever Error "
        })
    }
}

// Function Delete hub
export async function deleteHub( req, res ) {
    try{
        const id = req.params.id;
        const deleted = await Hub.findByIdAndDelete(id);

        if(!deleted){
            return res.status(404).json({
                success:false,
                message:"Hub not found or id wrong"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Hub deleted successfully"
        })

    }catch(error){
        console.error("Error is:",error);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
    
}