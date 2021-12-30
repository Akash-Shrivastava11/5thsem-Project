import "./rightbar.css";
import {RemoveRedEye} from "@mui/icons-material"
import {Bolt} from "@mui/icons-material"
import {CommentBank} from "@mui/icons-material"
import {PostAdd} from "@mui/icons-material"
export default function Rightbar()
{
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/post/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Abhishek</b> and<b> 3 other friends</b> have a bithday today.
                    </span>
                </div>
                <div className="ProfileStats">
                    <Bolt className="bullet"/>
                    <span className="proftext"><b>PROFILE STATISTCIS</b></span>
                    <div className="viewsSection">
                        <RemoveRedEye />
                        <span className="profileText">Profile Views</span>
                        <br/>
                        <span className="viewsCount">230 views</span>
                    </div>
                    <div className="mentionSection">
                    <CommentBank />
                    <span className="profileText">Mentions</span>
                        <br/>
                    <span className="viewsCount">5 times!</span>
                    </div>
                    <div className="saveSection">
                    <PostAdd />
                    <span className="profileText">Post Saves</span>
                        <br/>
                    <span className="viewsCount">11 Posts</span>
                    </div>
                </div>
            </div>
        </div>
    );
}