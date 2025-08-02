import './Dera.css'
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

function Dera(){


    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    const steps = [
        "y","/tobisbirthdayvideo1.mp4",
    ]

    const next =()=>{setStep(step+1)}
    const prev =()=>{setStep(step-1)}

    return (
        <>
            <div className="page">
                <div className="navbar">
                   <span>THE SMOOTH OPS &#9888;</span>
                    <span>2023 - TILL DATE</span>
                </div>

                <div className="mainBody">

                    <div className="middlePart">
                        <div className="player">
                            {step!==0 && (
                                <video
                                key={step}
                                src={steps[step]}
                                controls
                                width="100%"
                                height="100%"
                                style={{ borderRadius: "2dvh", border: "1px solid orange" }}
                                />
                            )}
                            {step===0 && (
                                <div className="birthdayCard">
                                    Happy Birthday Bro have a great day.
                                </div>
                            )}

                        </div>
                        <div className="buttons">
                            <button onClick={prev} disabled={step === 0}>Back</button>
                            <button onClick={next} disabled={step===steps.length-1}>Next</button>
                        </div>
                    </div>
                </div>

                <div className="bottomStuff">
                    <div className="message" onClick={() => navigate("/yooo")}>
                        <span >
                             SECRET SPECIAL MESSAGE
                        </span>

                    </div>
                </div>

            </div>
        </>
    )
}


export default Dera;

