import React,{useState} from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../DummyData';



const Post = ({post}) => {

const[like, setLike] = useState(post.like)
const[isLiked, setIsLiked] = useState(false)

//isLiked =   if already liked the post then (like -1);

const likeHandler = () => {
setLike(isLiked ? like-1 : like+1) //increment
setIsLiked(!isLiked)//decrement
}


  return (
    <div className='post'>
       <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture}  alt='' />
                    <span className='postUsername'> 
                    {Users.filter((u) => u.id === post.userId)[0].username} </span>
                    <span className='postData'> {post.date} </span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon />

                </div>
            </div>
            <div className="postCenter">
                <span className='postText'> {post.desc} </span>
                <img className="postImg" src={post.photo} alt="" />
            </div>

            <div className="postBottom">
        <div className="postBottomLeft">
            <img className="likeIcon" src='/assets/post/like.png' onClick={likeHandler} />
            <img className="likeIcon" src='/assets/post/love.png' onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
        </div>
        <div className="postBottomRight">
            <span className="postcommentText"> {post.comments}comments</span>
        </div>
        
            </div>

       </div>
    </div>
  )
}

export default Post