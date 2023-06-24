import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";


//protected route tokenbase

export const requiredSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_TOKEN);
        req.user = decode;
        next();
        
    } catch (error) {
        console.log(error);
        
    }
}

//admin access 

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)

        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message: "unauthorized access"
            })
        }else{
            next();
        }

        
    } catch (error) {
        console.log(error);
        
    }
}