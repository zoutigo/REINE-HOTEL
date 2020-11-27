import React from 'react'
import {Box, Button, IconButton, Typography} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import CallIcon from '@material-ui/icons/Call'


const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.blue.main,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%'
       
      },
      phoneBtn :{
          color: theme.palette.white.main, 
          marginRight: '5%'
      },
            
      bookingBtn : {
        color: theme.palette.white.main, 
        borderColor: theme.palette.white.main,
        fontSize: '0.9rem',
        backgroundColor: theme.palette.orange.main,
        borderRadius: 0 ,
        [theme.breakpoints.up('lg')]:{
            fontSize: '1.5em'
        },
      
      },
      bookingNavlink :{
          textDecoration:'none'
      }
     
}))

function HButtons() {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button variant='outlined' className={classes.phoneBtn} startIcon={<CallIcon style={{ fontSize: 40 }}/>} href="tel:0033650507839" >
                    
            </Button>
               
            <Button variant='outlined' className={classes.bookingBtn}>
                <NavLink  to='/booking' className={classes.bookingNavlink}>Reserver</NavLink>
            </Button>
        </div>
    )
}

export default HButtons
