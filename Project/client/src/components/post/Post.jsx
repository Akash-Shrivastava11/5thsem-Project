import "./post.css"
import { MoreVert } from "@mui/icons-material"
export default function Post()
{
    return(
    <div className="Post">
        <div className="postWrapper">
            <div className="postTop">
                <div postTopLeft>
                    <img  className="postProfileImg" src="/assets/person/main.jpg" alt=""/>
                    <span className="postUsername">Akash</span>
                    <span className="postDate">5 mins Ago</span>
                </div>
                <div postTopRight></div>
                <MoreVert />
            </div>
            <div className="postCentre">
            <span className="postText">Invite! code and innovate :)</span>
            <img className="postImg" src="/assets/post/lap.webp" alt=""/>
            </div>
            <div className="postBottom">
            <div className="postButtonLeft">
            <img className="likeIcon" src="/assets/post/heart.png" alt=""/>
            <img className="likeIcon" src="/assets/post/like.png" alt=""/>
            <span className="postLikeCounter">32 people liked it</span>
            </div>
             <div className="postButtonRight">
             <span className="postCommentText">5 comments</span>
            </div>
          
              
            </div>
        </div>
    </div>);
}