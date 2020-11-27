import React from 'react'
import { IconButton, Box} from '@material-ui/core'
import {  makeStyles} from '@material-ui/styles'
import CallIcon from '@material-ui/icons/Call';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from'react-router-dom'
import {openBurgerMenu} from '../../redux/settings/settingsActions'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    
    },
    call : {
        marginLeft: '25%'
    }
}))



function Icons() {
    const classes = useStyles()

    const dispatch = useDispatch()

    const burgerMenuIsOpened = useSelector(state => state.settings.burgerMenuIsOpened)

    
    const handleBurgerMenu = ()=> {
        dispatch(openBurgerMenu())
}
    
    return (
       <Box variant='div' className={classes.root}>
            <IconButton aria-label="icon call" color="inherit" className={classes.call}>
              <CallIcon style={{ fontSize: 30 }} />
            </IconButton>

       

        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleBurgerMenu}>
                {burgerMenuIsOpened ?  <CloseIcon style={{ fontSize: 30 }} /> : <MenuIcon style={{ fontSize: 30 }} />}
        </IconButton>
       </Box>
    )
}

export default Icons
