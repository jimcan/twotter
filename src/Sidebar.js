import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ListAltIcon from '@material-ui/icons/ListAlt'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SidebarOptions from './SidebarOptions'
import Button from '@material-ui/core/Button'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            {/* Twitter icon */}
            <TwitterIcon />

            {/* Sidebar Option */}
            <SidebarOptions active Icon={HomeIcon} text='Home' />
            <SidebarOptions Icon={SearchIcon} text='Explore' />
            <SidebarOptions Icon={NotificationsNoneIcon} text='Notifications' />
            <SidebarOptions Icon={MailOutlineIcon} text='Messages' />
            <SidebarOptions Icon={BookmarkBorderIcon} text='Bookmarks' />
            <SidebarOptions Icon={ListAltIcon} text='Lists' />
            <SidebarOptions Icon={PermIdentityIcon} text='Profile' />
            <SidebarOptions Icon={MoreHorizIcon} text='More' />

            <Button
                variant='outlined'
                className='sidebar__tweet'
                fullWidth
            >
                Tweet
            </Button>
        </div>
    )
}
