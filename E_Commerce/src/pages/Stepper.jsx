import React, { useState } from "react";
import "./Stepper.css";

const Stepper = () => {
    const [step, setStep] = useState(1);

    const steps = [
        {
          title: "intro",
        },
        {
            title: "1",
            video: "/tobisbirthdayvideo1.mp4",
        },
        {
            title: "2",
            video: "https://via.placeholder.com/400x200?text=Step+2+Details",
        },
        {
            title: "3",
            video: "https://via.placeholder.com/400x200?text=Step+3+Finish",
        },
        {
            title: "4",
            video: "https://via.placeholder.com/400x200?text=Step+1+Welcome",
        },
        {
            title: "5",
            video: "https://via.placeholder.com/400x200?text=Step+2+Details",
        },
        {
            title: "6",
            video: "https://via.placeholder.com/400x200?text=Step+3+Finish",
        },
    ];

    const next = () => setStep((prev) => Math.min(prev + 1, steps.length));
    const prev = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="stepper-container">
            <div className="step-labels">
                {steps.map((s, index) => (
                    <div
                        key={s.title}
                        className={`step-label ${
                            step > index
                                ? "completed"
                                : step === index + 1
                                    ? "active"
                                    : "upcoming"
                        }`}
                    >

                    </div>
                ))}
            </div>

            <div className="image-container">
                {steps[step - 1].title==="intro" && (
                    <div className="cover">
                        <div className="intro">
                            Happy
                        </div>
                        <div className="intro">
                            18th
                        </div>
                        <div className="intro">
                            Birthday
                        </div>

                    </div>

                )}
                {steps[step - 1].title !== "intro" && (
                    <video
                        key={step}
                        src={steps[step - 1].video}
                        controls
                        width="100%"
                    />
                )}

            </div>

            {/* Buttons */}
            <div className="step-buttons">
                <button onClick={prev} disabled={step === 1}>
                    Back
                </button>
                <button onClick={next} disabled={step === steps.length}>
                    {step === steps.length ? "Done" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default Stepper;
