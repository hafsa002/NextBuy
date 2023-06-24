import express from "express";
import colos from 'colors';
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();


//rest object
const app = express();

//database config

connectDB();

app.use(express.json());
app.use(morgan('dev'));

//routes

app.use('/api/v1/auth', authRoutes);

//rest api

app.get('/', (req, res) =>{
    res.send("<h1>Welcome to our NextBuy</h1>");
});

//port
    const PORT = process.env.PORT || 8080;

//run listen 
    app.listen(PORT, () =>{
        console.log(`Server is running under ${process.env.DEV_MODE} in this ${PORT}`.bgCyan.white);
    });