import './Message.css';
import {useNavigate} from "react-router-dom";

function Message() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bigMessage">
                YOU ARE STILL GAY
                <a href="/dashboard"> click here to return home</a>
            </div>
        </>
    )
}

export default Message;