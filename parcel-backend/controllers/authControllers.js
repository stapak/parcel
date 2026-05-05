import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET,TOKEN_EXPIRES } from "../commonData.js";


// Function to check user and send JWT token.
export async function login(req,res) {
    const { email, password } = req.body;
    if( !email || !password ){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success: false,
                message:"User not found"
            })
        }
        const token = jwt.sign(  { id : user._id }, 
                                 JWT_SECRET,
                                 { expiresIn: TOKEN_EXPIRES })
        return res.status(200).json({
            success: true,
            message:"User found",
            token
        })
        

    }catch(error){
        console.error("Error occured:",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}
