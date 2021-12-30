
import "./message.css"

export default function Message({own})
{
    return(
    <div className={own ? "message own":"message"}>
    <div className="messageTop">
    <img className="messageImg" src="https://images.pexels.com/photos/2848033/pexels-photo-2848033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
    <p className="messageText">This message was deleted</p>
    </div>
    <div className="messageBottom">10 mins ago</div>
    </div>);
}