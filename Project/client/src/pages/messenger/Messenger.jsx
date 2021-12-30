import "./messenger.css"
import "../../components/topbar/Topbar"
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
export default function Messenger()
{
    return(
        <>
        <topbar/>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatBarWrapper">
                <input placeholder="Search for friends" className="chatMenuInput"></input>
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                </div>
            </div>
            <div className="chatBox">
            <div className="chatBoxWrapper">
            <div className="chatBoxTop">
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            </div>
            <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="Say something...." ></textarea>
            <button className="chatSubmitButton">Send</button>
            </div>
            </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                </div>
            </div>
        </div>
        </>
    );
}