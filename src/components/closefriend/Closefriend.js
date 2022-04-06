import React from 'react'
import './closefriend.css'

const Closefriend = ({user}) => {
  return (
    <div>
 <li className="sidebarFriend">
        <img className='sidebarFriendimg' src={user.profilePicture} alt='' />
        <span className="sidebarFriendName"> {user.username} </span>
    </li>

    </div>
  )
}

export default Closefriend