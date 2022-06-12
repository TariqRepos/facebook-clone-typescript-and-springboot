import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import "./Navbar.css"
import fbLogo from "../../images/logo.png"
import HeaderIcon from './HeaderIcon/HeaderIcon'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'


const navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            <div className='navbar__leftbar'>
                <img className='' src={fbLogo} alt="facebook logo" width="40px"/>
                <div className='navbar__search'>
                    <SearchIcon className='navbar__searchicon' />
                    <input className='hidden md:inline-flex ml-2 items-center bg-transparent
                    outline-none placeholder-gray-500 flex-shrink' type="text" placeholder='Search Facebook' />
                </div>
            </div>

             <div className='navbar__container'>
                <div className='navbar_icons space-x-6 md:space-x-2' >
                    <HeaderIcon Icon={HomeIcon} active={true} />
                    <HeaderIcon Icon={FlagIcon} active={false} />
                    <HeaderIcon Icon={PlayIcon} active={false} />
                    <HeaderIcon Icon={ShoppingCartIcon}active={false}  />
                    <HeaderIcon Icon={UserGroupIcon}active={false}  />
                </div>
            </div>

            <div className='flex items-center sm:space-x-2 justify-end'>
                <Avatar className='navbar__rightimg' src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/254972431_592971878785814_898164213403171906_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=QACyqBwCXdsAX-xDWIZ&_nc_ht=scontent-dfw5-2.xx&oh=00_AT8CyiyhVMO3xO5PdCCljgxZ5DZpP7o83wOqVWUzASbumw&oe=62AA28FB" />
                <p className='whitespace-nowrap font-semibold pr-3'>Tariq</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    )
}

export default navbar