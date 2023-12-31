import userModel from "../models/userModel.js";
import { comparePassword, hashPassword, } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {

    try {

        const { name, email, password, phone, address } = req.body;

        //validation

        if (!email) {
            return res.send({ message: 'email is required' })
        }

        if (!password) {
            return res.send({ message: 'password is required' })
        }

        if (!phone) {
            return res.send({ message: 'phone number is required' })
        }

        if (!address) {
            return res.send({ message: 'address is required' })
        }

        //check user

        const existingUser = await userModel.findOne({ email });

        //exsiting users

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already register, please login'

            })
        }

        //register user 

        const hashedPassword = await hashPassword(password);

        //save

        const user = await new userModel({ name, email, phone, address, password: hashedPassword, }).save()

        res.status(201).send({
            success: true,
            message: 'User registration successful',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'error in registration',
            error
        });

    }
};

//LOGIN

export const loginController = async (req, res) => {

    try {

        const { email, password } = req.body

        //validation

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'invalid email or password'

            })
        }

        //match email, password
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'user not found'
            })
        }

        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid password'
            })
        }

        //token

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, {
            expiresIn: "7d"
        });

        res.status(200).send({
            success: true,
            message: 'Login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address

            },
            token,
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error in login',
            error
        })


    }

};

//testController

export const testController = (req, res) => {
    res.send("protected route");
};
