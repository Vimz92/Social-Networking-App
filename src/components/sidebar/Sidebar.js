import React from 'react'
import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../DummyData'
import Closefriend from '../closefriend/Closefriend';

const Sidebar = () => {
  return (
<div className='sidebar'>
    <div className="sidebarWrapper">
    <ul className="sidebarList">
        <li className='sidebarListitem' >
        <RssFeedIcon className='sidebarItem' />
        <span className='sidebarIcon'> Feed </span>
        </li>

        <li className='sidebarListitem' >
        <VideoSettingsIcon className='sidebarItem' />
        <span className='sidebarIcon'> Videos </span>
        </li>

        <li className='sidebarListitem' >
        <BookmarkIcon className='sidebarItem' />
        <span className='sidebarIcon'> Bookmarks </span>
        </li>

        <li className='sidebarListitem' >
        <QuestionAnswerIcon className='sidebarItem' />
        <span className='sidebarIcon'> Questions </span>
        </li>

        <li className='sidebarListitem' >
        <WorkIcon className='sidebarItem' />
        <span className='sidebarIcon'> Jobs </span>
        </li>

        <li className='sidebarListitem' >
        <EventIcon className='sidebarItem' />
        <span className='sidebarIcon'> Events </span>
        </li>

        <li className='sidebarListitem' >
        <SchoolIcon className='sidebarItem' />
        <span className='sidebarIcon'> Courses </span>
        </li>
    </ul>
    <button className='sidebarButton'> Show More </button>
    <hr className='sidebarHr' />
    
    <ul className="sidebarFriend">
   
{Users.map((u)=>(

<Closefriend  key={u.id} user={u}/> 
))}
    
    </ul>

    </div>

    </div>
  )
}

export default Sidebar