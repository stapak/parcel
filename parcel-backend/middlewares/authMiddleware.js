import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../commonData.js";


export function authMiddleware(req, res, next) {
    try{
        const authHeader = req.headers.authorization; 
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
        try{
        const decoded = jwt.verify(token, JWT_SECRET);
        }catch(error){
    
            return res.status(401).json({
                success:false,
                message:"Invalid token, user unauthorized, by auth middle ware"
            })
        }

        next();

    }catch(error){
        console.error("Error is:",error);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}