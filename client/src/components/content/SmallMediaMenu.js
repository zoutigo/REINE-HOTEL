import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {openBurgerMenu} from '../../redux/settings/settingsActions'
import {Box, Button, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    root : {
        flexGrow: 1 ,
        width: '100%',
        minWidth: '100vw',
        minHeight: '100vh',
        zIndex: 2 ,
        backgroundColor: theme.palette.dark.main,
        position: 'absolute',
        top: '4em',
        transform: 'translate(0, -200%)'
    },
    navElement : {
        margin: '3em 3.8em'
    },
    navLink : {
        textDecoration : 'none',
        textTransform: 'uppercase',
        letterSpacing : '1px',
        color: theme.palette.white.main

    },
    bookingBtn: {
        backgroundColor : theme.palette.orange.main
    },
    bookingLink: {
        textDecoration: 'none'
    }

}))

    const hiddenStyle = {
        transform: 'translateY(-200%)',
        transition: 'transform 0.5s ease'
    }
    const displayStyle = {
        transform: 'translateY(0)',
        transition: 'transform 0.5s ease',
        zIndex: '5' 
    }

const navElements = [{'name': 'acceuil', 'link': '/home'},
                     {'name': 'chambres', 'link': '/rooms'},
                    {'name': 'services', 'link': '/services'},
                    {'name': 'restaurant', 'link': '/restaurant'},
                    {'name': 'profil', 'link': '/profile'}]

function SmallMediaMenu() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const burgerMenuIsOpened = useSelector(state => state.settings.burgerMenuIsOpened)
    const burgerStyle = () =>{
        if(burgerMenuIsOpened){
            return displayStyle
        }else {
            return hiddenStyle
        }
    }

    const handleClick = ()=> {
        dispatch(openBurgerMenu())
    }

    return (
        <Box
          variant='div'
          className={classes.root} 
          style = { burgerStyle()}
          >
             {
                 navElements.map((element, index)=>{
                     return (
                         <Typography key={index} className={classes.navElement}>
                            <NavLink to={element.link} onClick={handleClick} className={classes.navLink} activeStyle={{ color: 'red' }} >{element.name} </NavLink>
                         </Typography>
                     )
                 })
             }
             <Button variant='outlined' fullWidth className={classes.bookingBtn}>
                 <NavLink to='/booking' onClick={handleClick} className={classes.bookingLink}>Reserver Maintenant</NavLink>
             </Button>
        </Box>
    )
}

export default SmallMediaMenu
