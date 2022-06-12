import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import "./Navbar.css"
import fbLogo from "../../images/logo.png"
import homeIcon from "../../images/home.svg"
import pagesIcon from "../../images/pages.svg"
import watchIcon from "../../images/watch.svg"
import marketIcon from "../../images/market.svg"
import groupsIcon from "../../images/groups.svg"


const navbar = () => {
  return (
    <Grid container className='navbar__main'>
        <Grid item xs={3}>
            <div className='navbar__leftbar'>
                <img className='navbar__logo' src={fbLogo} alt="facebook logo" width="40px"/>
                <input className='navbar__search' type="text" placeholder='Search Facebook' />
            </div>
        </Grid>
        <Grid item xs={6}>
            <div className='navbar__container'>
                <div className='navbar__tabs active'>
                    <img src={homeIcon} alt="home icon" height="35px" width="35px" />
                </div>
                <div className='navbar__tabs'>
                    <img src={pagesIcon} alt="pages icon" height="35px" width="35px" />
                </div>
                <div className='navbar__tabs'>
                    <img src={watchIcon} alt="watch icon" height="35px" width="35px" />
                </div>
                <div className='navbar__tabs'>
                    <img src={marketIcon} alt="market icon" height="35px" width="35px" />
                </div>
                <div className='navbar__tabs'>
                    <img src={groupsIcon} alt="groups icon" height="35px" width="35px" />
                </div>
            </div>
        </Grid>
        <Grid item xs={3}>
            <div className='navbar_right'>
                <div className='navbar__righttab'>
                    <Avatar className='navbar__rightimg' src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/254972431_592971878785814_898164213403171906_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=QACyqBwCXdsAX-xDWIZ&_nc_ht=scontent-dfw5-2.xx&oh=00_AT8CyiyhVMO3xO5PdCCljgxZ5DZpP7o83wOqVWUzASbumw&oe=62AA28FB" />
                    <div className='navbar__profilename'>Tariq</div>
                </div>
                
            </div>
        </Grid>
    </Grid>
  )
}

export default navbar