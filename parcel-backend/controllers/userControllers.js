/*

This file contains controllers to register different types of users.
Type of Users:
*sudo-user : Master user who can add, remove and update any piece of data in server, 
              created directly in the DATABASE, no registration routes are present for
              this user.
*core-team : Main team of the company which have power to add different distribution hubs, 
             distribution hub owner accounts, manage shipment details etc.
*hub-owner: Owner of a distribution hub can add shipment mark shipment as delivered, update 
            shipment details, update 'hub-worker' details.
*hub-worker: Worker at a distribution hub can add shipment mark shipment as delivered, update 
             shipment details.

*/

import User from '../model/userModel.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';

// Function to register core-team. 
export async function registerCoreTeam(req,res){
    const { name, email, password,hub } = req.body;

    // Checking the input fields.
    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message:"All fields are required"
        })
    }

    if(!validator.isEmail(email)){
        return res.status(400).json({
            success:false,
            message:"Invalid email"
        })
    }

    if(password.length < 8){
        return res.status(400).json({
            success:false,
            message:"Password must be atleast 8 characters"
        })
    }

    // Adding user into database.
    
    try{
        if( await User.findOne({ email })){
            return res.status(409).json({
                success: false,
                message:"User already present"
            });
        }

        const password_hash = await bcrypt.hash(password,10);
        const user = await User.create({ name, 
                                         email, 
                                         password:password_hash,
                                         hub,
                                         userCategory:"hub-team"                                        
                                        });
        return res.status(201).json({
            success: true,
            message:"User registered successffully "
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }

}





// Function to register HubOwner. 
export async function registerHubOwner(req,res){
    const { name, email, password,hub } = req.body;

    // Checking the input fields.
    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message:"All fields are required"
        })
    }

    if(!validator.isEmail(email)){
        return res.status(400).json({
            success:false,
            message:"Invalid email"
        })
    }

    if(password.length < 8){
        return res.status(400).json({
            success:false,
            message:"Password must be atleast 8 characters"
        })
    }

    // Adding user into database.
    
    try{
        if( await User.findOne({ email })){
            return res.status(409).json({
                success: false,
                message:"User already present"
            });
        }

        const password_hash = await bcrypt.hash(password,10);
        const user = await User.create({ name, 
                                         email, 
                                         password:password_hash,
                                         hub,
                                         userCategory:"hub-owner"                                        
                                        });
        return res.status(201).json({
            success: true,
            message:"User registered successffully "
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }

}





// Function to register HubWorker. 
export async function registerHubWroker(req,res){
    const { name, email, password,hub } = req.body;

    // Checking the input fields.
    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message:"All fields are required"
        })
    }

    if(!validator.isEmail(email)){
        return res.status(400).json({
            success:false,
            message:"Invalid email"
        })
    }

    if(password.length < 8){
        return res.status(400).json({
            success:false,
            message:"Password must be atleast 8 characters"
        })
    }

    // Adding user into database.
    
    try{
        if( await User.findOne({ email })){
            return res.status(409).json({
                success: false,
                message:"User already present"
            });
        }

        const password_hash = await bcrypt.hash(password,10);
        const user = await User.create({ name, 
                                         email, 
                                         password:password_hash,
                                         hub,
                                         userCategory:"hub-worker"                                        
                                        });
        return res.status(201).json({
            success: true,
            message:"User registered successffully "
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }

}
