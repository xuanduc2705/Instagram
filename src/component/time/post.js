import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './post.css'
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DoneIcon from '@mui/icons-material/CheckCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { getTokenFromSessionStorage } from "../Util/storageUtil";

function Post({ava,image,sname, like,time,content,postt,following,followers,pos1,pos2,pos3,cmt,onAddComment}) {
  const navigate = useNavigate();
    const name = sname;
    const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);
    const [likeCount,setLikeCount] = useState(like)
    const [inputFocused, setInputFocused] = useState(false);
    
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

const handleFavoriteClick = () => {
    if (isFavoriteClicked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
  setIsFavoriteClicked(!isFavoriteClicked);
};
const [isHovered, setIsHovered] = useState(false);
const [isHoveredr, setIsHoveredr] = useState(false);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};
const handleMouseEnterr = () => {
  setIsHoveredr(true);
};

const handleMouseLeaver = () => {
  setIsHoveredr(false);
};
const [commentText, setCommentText] = useState('');

  const handleCommentInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    const token = getTokenFromSessionStorage();
    if (token) {
      if(commentText !==''){
        const newComment = {
          author: 's.pinkduck_03', 
          text: commentText,
        };
    
        onAddComment(newComment);
    
        setCommentText('');
      }
    } else {
      navigate('/login');
    }
    
  };
  return (
    <div className="post">
        <div className='post_header'>
            <div className='postheader_author'>
            <Avatar>
                <img src={ava} className='heo' alt=''/>
            </Avatar>
            <Link to={`/detail/${name}`} className='post_author'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >{name}
            {isHovered && (
          <div className='modal'>
            
            <div className='anhten'>
            <div className='coverimagee'>
          <img src={ava} className='heto' alt=''/>
          </div>
             <span className="infonamemodal">
                {sname}
            </span>
            <CheckCircleIcon className='donemodal' style={{ fontSize: '16',marginRight:'10',borderRadius: '50%', color:'blue',marginRight:'30px' }} />
            </div>
            <div className='thongso'>
                <div className='thpost'>
                    <span className='solieu'>
                        {postt}
                    </span>
                <span className='tensolieu'>
                    posts
                </span>
                </div>
                <div className='thpost'>
                    <span className='solieu'>
                        {followers}
                    </span>
                <span className='tensolieu'>
                    followers
                </span>
                </div>
                <div className='thpost'>
                    <span className='solieu'>
                        {following}
                    </span>
                <span className='tensolieu'>
                    followings
                </span>
                </div>

            </div>
            <div className='baanh'>
            <img src={pos1} className='he' alt=''/>
            <img src={pos2} className='he' alt=''/>
            <img src={pos3} className='he' alt=''/>
            </div>
            <div className='buttonfoot'>
            <button className="butt1"><FontAwesomeIcon icon={faFacebookMessenger} /> Message</button>
            <button className="butt2">Following</button>
            </div>
            
            {/* <button className="but2"><PersonAddAltIcon/></button> */}
           
          </div>
        )}
            </Link><DoneIcon className='done'style={{ fontSize: '16'}}/> •<span>{time}</span>
            </div>
            <MoreHorizIcon className='pointer'/>
        </div>
        <div className='post_image'>
            <img src={image} alt=''/> 
        </div>
        <div className='post_footer'>
            <div className='post_footerIcons'>
                <div className='post_iconrMain'>
                {isFavoriteClicked ? (
                <FavoriteIcon
                className='postIconss'
                onClick={handleFavoriteClick}
                 />
                ) : (
                <FavoriteBorderIcon
                className='postIcons'
                onClick={handleFavoriteClick}
                />
                )}

                <ChatBubbleOutlineIcon className='postIcons'/>
                <TelegramIcon className='postIcons'/>
                </div>
                <div className='post_iconSave'>
                    <BookmarkIcon className='postIcons'/>
                </div>
            </div>
            <span className='like' style={{fontSize:'14px'}}>{likeCount} likes</span>
            <div className='divduoi'>
            <Link to={`/detail/${name}`} className='post_authorr'
            onMouseEnter={handleMouseEnterr}
            onMouseLeave={handleMouseLeaver}
            >{name}
            {isHoveredr && (
          <div className='modal'>
            
            <div className='anhten'>
            <div className='coverimagee'>
          <img src={ava} className='heto' alt=''/>
          </div>
             <span className="infonamemodal">
                {sname}
            </span>
            <CheckCircleIcon className='donemodal' style={{ fontSize: '16',marginRight:'10',borderRadius: '50%', color:'blue',marginRight:'30px' }} />
            </div>
            <div className='thongso'>
                <div className='thpost'>
                    <span className='solieu'>
                        {postt}
                    </span>
                <span className='tensolieu'>
                    posts
                </span>
                </div>
                <div className='thpost'>
                    <span className='solieu'>
                        {followers}
                    </span>
                <span className='tensolieu'>
                    followers
                </span>
                </div>
                <div className='thpost'>
                    <span className='solieu'>
                        {following}
                    </span>
                <span className='tensolieu'>
                    followings
                </span>
                </div>

            </div>
            <div className='baanh'>
            <img src={pos1} className='he' alt=''/>
            <img src={pos2} className='he' alt=''/>
            <img src={pos3} className='he' alt=''/>
            </div>
            <div className='buttonfoot'>
            <button className="butt1"><FontAwesomeIcon icon={faFacebookMessenger} /> Message</button>
            <button className="butt2">Following</button>
            </div>
            
            {/* <button className="but2"><PersonAddAltIcon/></button> */}
           
          </div>
        )}
            </Link><span>{content}</span>
            </div>
            
        </div>
        <div className="comment">
          <span className='viewall'>
            View all 136 comments
          </span>
        {cmt && Array.isArray(cmt) && cmt.map((comment, index) => (
          <div key={index} className='commentt'>
            <span className='comment-author'>{comment.author}</span>
            <span className='comment-text'>{comment.text}</span>
          </div>
        ))}
        </div>
        <div className="comment-input">
          <input
            className='inputcmt'
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={handleCommentInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button className="submit-button" onClick={handleCommentSubmit} >Post</button>
        </div>
    </div>
  );
}

export default Post;