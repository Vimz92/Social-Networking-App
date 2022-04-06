import React from 'react'
import './online.css'

const Online = ({user}) => {
  return (
    <div>
<li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
    <img className="rightbarProfileImg" src={user.profilePicture} alt=''/>
    <span className='rightbarOnline'></span>
    </div>
    <span className='rightbarUsername'>{user.username}</span>
  </li>


  <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
    <img className="rightbarProfileImg" src="assets/person/vimal3.jpg" alt=''/>
    <span className='rightbarOnline'></span>
    </div>
    <span className='rightbarUsername'>Vimal</span>
  </li>


  <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
    <img className="rightbarProfileImg" src="assets/person/vimal9.jpg" alt=''/>
    <span className='rightbarOnline'></span>
    </div>
    <span className='rightbarUsername'>Vimal Vinayraj</span>
  </li>


  <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
    <img className="rightbarProfileImg" src="assets/person/vimal3.jpg" alt=''/>
    <span className='rightbarOnline'></span>
    </div>
    <span className='rightbarUsername'>Vimal </span>
  </li>


  <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
    <img className="rightbarProfileImg" src="assets/person/vimal2.jpg" alt=''/>
    <span className='rightbarOnline'></span>
    </div>
    <span className='rightbarUsername'>Vimal Vinayraj </span>
  </li>

    </div>
  )
}

export default Online