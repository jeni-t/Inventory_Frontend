import React, { useEffect, useState } from "react";
import Login_bg from "/public/login.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
//    const [data, setData] = useState([])
  //  const [error, setError] = useState(null);

  //  console.log(email,"email")
   // console.log(password,"password")
 
   const handleSubmit = async(e)=>{
    const res = await axios.post("https://inventory-backend-m3nc.onrender.com/api/login",{
        email,password
    })
    if(res.data.success === true){
    alert("Login Successful!");
    navigate("/billing");
    }else{
        alert("Incorrect email or password!");
    }
}

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${Login_bg})`,
            }}
        >
            <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl p-10 w-[380px] shadow-2xl">
                <h2 className="text-center text-white text-2xl font-semibold mb-6">
                    Login
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-full outline-none bg-white/20 border border-white/40 text-white placeholder-white"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-full outline-none bg-white/20 border border-white/40 text-white placeholder-white"
                    />
                </div>

                {/* Row */}
                <div className="flex justify-between items-center text-white text-sm mb-4">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <button className="underline">Forgot Password?</button>
                </div>

                {/* Login Button */}
                {/* <Link to="/billing"> */}
                <button onClick={handleSubmit} 
                className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                    Login
                </button>
                {/* </Link> */}

                {/* Register */}
                <p className="text-white text-center text-sm mt-4">
                    Don’t have an account?{" "}
                    <Link to="/regsiter"><span className="underline cursor-pointer">Register</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
