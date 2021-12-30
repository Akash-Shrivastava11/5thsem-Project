import "./chatOnline.css"

export default function ChatOnline()
{
    return(
    <div className="chatOnline">
    <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
        <img className="chatOnlineImg" src="https://images.pexels.com/photos/2848033/pexels-photo-2848033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>

            <div className="chatOnlineBadge">
            </div>
            <span className="chatOnlineName">Abhishek</span>
        </div>
        <div className="chatOnlineImgContainer">
        <img className="chatOnlineImg" src="https://images.pexels.com/photos/2848033/pexels-photo-2848033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>

            <div className="chatOnlineBadge">
            </div>
            <span className="chatOnlineName">Abhishek</span>
        </div>
    </div>
    </div>);
}