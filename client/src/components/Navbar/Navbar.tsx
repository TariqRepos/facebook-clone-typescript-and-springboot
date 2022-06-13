import { Avatar, } from '@material-ui/core'
import React from 'react'
import fbLogo from "../../images/logo.png"
import HeaderIcon from './HeaderIcon/HeaderIcon'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'


const navbar = () => {
    return (
        <div className='navbar__container'>
            <div className='navbar__left'>
                <img className='' src={fbLogo} alt="facebook logo" height={40} width={40}/>
                <div className='navbar__search'>
                    <SearchIcon className='navbar__search__icon' />
                    <input className='navbar__search__box' type="text" placeholder='Search Facebook' />
                </div>
            </div>

             <div className='navbar__middle'>
                <div className='navbar__icon__group' >
                    <HeaderIcon Icon={HomeIcon} active={true} />
                    <HeaderIcon Icon={FlagIcon} active={false} />
                    <HeaderIcon Icon={PlayIcon} active={false} />
                    <HeaderIcon Icon={ShoppingCartIcon }active={false}  />
                    <HeaderIcon Icon={UserGroupIcon} active={false}  />
                </div>
            </div>

            <div className='navbar__right'>
                <Avatar className='' src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/254972431_592971878785814_898164213403171906_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=QACyqBwCXdsAX-xDWIZ&_nc_ht=scontent-dfw5-2.xx&oh=00_AT8CyiyhVMO3xO5PdCCljgxZ5DZpP7o83wOqVWUzASbumw&oe=62AA28FB" />
                <p className='navbar__name'>Tariq</p>
                <ViewGridIcon className='navbar__icon' />
                <ChatIcon className='navbar__icon' />
                <BellIcon className='navbar__icon' />
                <ChevronDownIcon className='navbar__icon' />
            </div>
        </div>
    )
}

export default navbar