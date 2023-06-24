import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb at ${conn.connection.host}`.bgYellow.black);

    }catch(error){
        console.log(`error in mongoDB is ${erro}`.bgRed.white);
    }
}

export default connectDB;