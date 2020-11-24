import React from 'react'
import { Toolbar , IconButton, Typography, Box, Button, Badge, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.blue.main,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      title: {
        flexGrow: 1,
      },
      burgerMenu : {
          backgroundColor: theme.palette.coyotte.main,
          minHeight: '100vh',
          transform: 'translate(0 , 1000px)'
      }
}))

const navElements = [{'name': 'acceuil', 'link': '/home'},
                     {'name': 'chambres', 'link': '/rooms'},
                    {'name': 'services', 'link': '/services'},
                    {'name': 'restaurant', 'link': '/restaurant'}]

function SmallToolBar() {
    const classes = useStyles()
    return (
        <div>
          <Toolbar className={classes.root}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              Hotel Reine
            </Typography>

           <Typography variant="div">
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton>
                    <IconButton
                    edge="end"
                    aria-label="account of current user"
                    //   aria-controls={menuId}
                    aria-haspopup="true"
                    //   onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                    <AccountCircle />
                </IconButton>
           </Typography>

          </Toolbar>
         {/* <Typography className={classes.burgerMenu}>
             He will appear the menu
         </Typography> */}
        </div>

    )
}

export default SmallToolBar
