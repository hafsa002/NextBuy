import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setphone] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();
    //form funtion 

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/api/v1/auth/register",
                { name, email, password, phone, address, });

            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login')
            } else {
                toast.error(res.data.message);

            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");

        }

    }
    return (
        <Layout title="Register - NextBuy">

            <div className="register">
                <h1>Registeration From</h1>
                <form onSubmit={handleSubmit} class="registration-form">
                    <div className="mb-3">

                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your Name"
                            aria-describedby="emailHelp"
                            required />

                    </div>

                    <div className="mb-3">

                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your Email"
                            aria-describedby="emailHelp"
                            required />

                    </div>

                    <div className="mb-3">

                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your Password"
                            required />
                    </div>

                    <div className="mb-3">

                        <input type="text"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your Phone Number"
                            required />

                    </div>
                    <div className="mb-3">

                        <input type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your Address"
                            aria-describedby="emailHelp"
                            required
                        />

                    </div>




                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>



            </div>


        </Layout>

    );
}

export default Register;
