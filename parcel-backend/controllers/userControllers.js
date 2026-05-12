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

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../commonData.js";

// Function to fetch the user
export async function getUser( req, res ){
    const authHeader = req.headers.authorization;
    try{
        if(!authHeader){
            return res.status(401).json({
                message:"Token Missing"
            })
        }
        let token; 
        if(authHeader.startsWith("Bearer ")){
            token = authHeader.split(" ")[1];
        }else{
            token = authHeader;
        }
        // to verify token        
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id);
        console.log("user is ",user.email,"",user.name,"",user.hub,"user category",user.userCategory);
        
        return res.status(200).json({
            success:true,
            message:"User fetched successfully",
            user
        })

    }catch(error){
        console.error("error is ",error);
        return res.status(500).json({
            success:false,
            message:"Internal Sever Error"
        })
    }
}

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
                                         userCategory:"core-team"                                        
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
export async function registerHubWoker(req,res){
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


// Function to modify user details.
export async function modifyUser(req, res) {
    const { name, password, newPassword, id } = req.body;
    try {
        if(!id){
            return res.status(400).json({
                success:false,
                message:"User id not provided"
            })
        }

        const user = await User.findById(id);

        if(!user){
               return res.status(404).json({
                   success:false,
                   message: "User not found"
               })
        }

        if(name){
            user.name = name;
        }

        if(password ){
            if(!newPassword){
                return res.status(400).json({
                   success:false,
                   message: "Incomeplete Details sent"
               })
            }

            const matched = await bcrypt.compare( password, user.password);
            if ( !matched ){
                return res.status(401).json({
                    success:false,
                    message:"Wrong Password"
                })
            }

            const password_hash = await bcrypt.hash(newPassword,10);
            user.password = password_hash;          
        }
        await user.save();

        return res.status(200).json({
                   success: true,
                   message: "User details updated successfully."
               })

    }catch(error){
        console.error("Error is:",error);
        return res.status(500).json({
            success: false,
            message:" Internal Sever Error"
        })
    }


}

// Function to delete user.
export async function deleteUser(req, res ) {
    try{
        const { email } = req.body;
        const deleted = await User.findOneAndDelete({
            email: email
        })

        if(!deleted){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            message:"User deleted successfully"
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message:"Internal Server Error"
        })
    }
}
