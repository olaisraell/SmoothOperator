import './Message.css';
import {useNavigate} from "react-router-dom";

function Message() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bigMessage">
                YOU ARE GAY
                <a href="/lol" > if this was a mistake please click here</a>
            </div>
        </>
    )
}

export default Message;