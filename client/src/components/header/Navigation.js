import React from 'react'
import {NavLink} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import { Box, Grid, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    root: {
            
      },
    navLinks : {
          textDecoration:'none',
          textTransform: 'uppercase',
          fontSize: '0.8em',
          color: theme.palette.white.main,
          fontWeight: 'bold',
          letterSpacing:'1px',
          lineHeight: '3rem',
          '&:hover': {
            color: "green",
         },
         [theme.breakpoints.up('lg')]:{
            lineHeight: '5rem',
        },
      },
     
    bookingNavlink :{
          textDecoration:'none'
      }
      
     
}))

const navElements = [
    {'name': 'acceuil', 'link': '/home'},
     {'name': 'chambres', 'link': '/rooms'},
     {'name': 'restaurant', 'link': '/restaurant'},
    {'name': 'services', 'link': '/services'},
    {'name': 'profile', 'link': '/profile'},
]


function Navigation() {
    const classes = useStyles()

    return (
        <Grid container justify='space-around' alignItems='flex-start' className={classes.root} >
             {
                navElements.map((element, index)=>{
                    return (
                                
                               <NavLink key={index}to={element.link} className={classes.navLinks} activeStyle={{ color: 'red' }}>
                                     <Typography variant='subtitle'>{element.name}</Typography>
                               </NavLink>
                                
                    )
                        })
            }

        </Grid>
    )
}

export default Navigation
