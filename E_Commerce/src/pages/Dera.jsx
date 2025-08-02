import {useState} from "react";
import './Dera.css'
import {useNavigate} from "react-router-dom";
import Stepper from "./Stepper.jsx";

function Dera(){


    const navigate = useNavigate();

    return (
        <>
            <div className="page">
                <div className="navbar">
                   THE SMOOTH OPS &#9888;
                    <span>2023 - TILL DATE</span>
                </div>

                <div className="mainBody">

                </div>

                <div className="bottomStuff">
                    <div className="message">
                        *INSERT* HEART-FELT MESSAGE
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dera;