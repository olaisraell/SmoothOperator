import './Dera.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Dera(){


    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    const steps = [
        "","","","",
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
                        <div className="player">player</div>
                        <div className="buttons">
                            <button onClick={prev }> Back </button>
                            <button onClick={next} disabled={step===steps.length-1}> Next </button>
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

