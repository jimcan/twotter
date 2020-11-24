import React from 'react'

export default function SidebarOptions({ text, Icon }) {
    return (
        <div className='sidebarOption'>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}
