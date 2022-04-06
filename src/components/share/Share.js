import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
<div className='share'> 
    <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src='/assets/person/vimal3.jpg' alt='' />
            <input placeholder='What is in your mind ?' className='shareInput' />
            </div>
            <hr className='shareHr'/>
        <div className="shareBottom"></div>
        <div className="shareOptions">
            <div className="shareOption">
                <PermMediaIcon htmlColor="tomato" className='shareIcon'/>
                <span className='shareOptionText'> Photo or Video </span>
            </div>

            <div className="shareOption">
                <LocalOfferIcon htmlColor="blue"  className='shareIcon'/>
                <span className='shareOptionText'> Tag </span>
            </div>

            <div className="shareOption">
                <LocationOnIcon htmlColor="green"  className='shareIcon'/>
                <span className='shareOptionText'> Location </span>
            </div>

            <div className="shareOption">
                <EmojiEmotionsIcon htmlColor="golden"  className='shareIcon'/>
                <span className='shareOptionText'> Emoji </span>
            </div>
       
        <button className='shareButton'> Share </button>
    </div>
    </div>
</div>
  )
}

export default Share