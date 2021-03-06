import React from 'react'
import './rightbar.css'
import { Users } from '../../DummyData'
import Online from '../online/Online'


const Rightbar = () => {
  return (
    <div className='rightbar'>
<div className="rightbarWrapper">
  <div className="birthdayContainer">
    <img className="birthdayImg" src="/assets/birthday/gift.png" alt="" />
    <span className="birthdayText"> <b>Vimal</b> and <b>3 others</b> have birthday today </span>
  </div>

<img className='rightbarAd' src='assets/ads/advert.jpg' alt='advertisement' />
<h4 className='rightbarTitle'> Online Friends </h4>
<ul className="rightbarFriendList">
  {Users.map((u)=>(
    <Online key={u.id} user={u}/>
  ))}
  

</ul>

</div>
    </div>
  )
}

export default Rightbar