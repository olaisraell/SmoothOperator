import "./LogIn.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function LogIn() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        if(userName === "" && password === ""){
            toast.error("please enter your details");
        }
        else if(userName === "a" && password === "b"){
            navigate("/dashboard");
        }
        else{
            toast.error("invalid details");
        }
        setUserName(userName);
        setPassword("")
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover


                toastStyle={{
                    backgroundColor: "#7f1d1d",
                    color: "#f1eded",
                    width: "100vw",
                    borderLeft: "6px solid #dc2626",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "14px",
                    borderRadius:0,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }}
            />
            <form action="" onSubmit={handleSubmit}>
            <div className="canvas">
                <div className="loginContainer">
                        <div className="pic">
                            <div className="circle">
                                <div className="innerCircle">
                                    <div className="innerCircle">
                                        <div className="innerCircle">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="circleText">THE SMOOTH OPERATORS &trade;</span>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
                            <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                        </div>
                        <div className="submitButton" >
                            <button type="submit" >
                                LOG IN
                            </button>
                        </div>
                </div>

                <div className="copyright"> &copy; 2025 jesse ola-srael </div>
            </div>
            </form>

        </>
    )
}


export default LogIn;