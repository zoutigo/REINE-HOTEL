import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {openBurgerMenu} from '../../redux/settings/settingsActions'
import { Toolbar , IconButton, Typography, Box, Button, Badge, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import CallIcon from '@material-ui/icons/Call';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.blue.main,
        minWidth: '300px'
       
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      logo: {
        flexGrow: 1,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '1px'
      },
     
}))


function SmallToolBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const burgerMenuIsOpened = useSelector(state => state.settings.burgerMenuIsOpened)

    const handleBurgerMenu = ()=> {
            dispatch(openBurgerMenu())


    }
    return (
        <div>
          <Toolbar className={classes.root}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleBurgerMenu}>
              {burgerMenuIsOpened ?  <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Typography variant="h6" className={classes.logo}>
              Hotel Reine
            </Typography>

           <Typography >
              
                    <IconButton aria-label="icon call" color="inherit">
                      <CallIcon />
                    </IconButton>

                    {/* <IconButton>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                    </IconButton>

                    <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton> */}

                    <IconButton
                    edge="end"
                    aria-label="account of current user"
                    //   aria-controls={menuId}
                    aria-haspopup="true"
                    //   onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                      <NavLink to='/profile' style={{color:'inherit'}}>
                          <AccountCircle />
                      </NavLink>
                   </IconButton>

           </Typography>

          </Toolbar>
     
        </div>

    )
}

export default SmallToolBar
