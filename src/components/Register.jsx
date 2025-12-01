import React, { useState } from "react";
import Login_bg from "/public/login.jpg"
import { Link } from "react-router-dom";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
const Register = () => {
const [name, setName] = useState("")
const [mobile,setMobile] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

 //const navigate = useNavigate();

const handleSubmit = async()=>{
    await axios.post("https://inventory-backend-m3nc.onrender.com/api/register",{
        name,mobile,email,password
    })
     alert("User Registered!");
}

    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Login_bg})`,
                }}
            >
                <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl p-10 w-[380px] shadow-2xl">
                    <h2 className="text-center text-white text-2xl font-semibold mb-6">
                        Register
                    </h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-full outline-none bg-white/20 border border-white/40 text-white placeholder-white"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e)=>setMobile(e.target.value)}
                            className="w-full px-4 py-3 rounded-full outline-none bg-white/20 border border-white/40 text-white placeholder-white"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Id"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-full outline-none bg-white/20 border border-white/40 text-white placeholder-white"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-full outline-none bg-white/20 border border-white/40 text-white placeholder-white"
                        />
                    </div>
                    <Link to="/add_item" className="w-full">
                        <button onClick={handleSubmit} className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Register