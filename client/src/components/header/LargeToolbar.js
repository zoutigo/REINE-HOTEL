import React from 'react'
import { Box, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import CallIcon from '@material-ui/icons/Call';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.blue.main,
        minHeight: '11vh'
   
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      logo: {
        flexGrow: 1,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize:'1.8rem'
      },
      box : {
          display: 'flex',
          justifyContent:'center',
          lineHeight:'50px'
        
      },
      phoneBtn :{
          color: theme.palette.white.main, 
          borderColor: theme.palette.white.main,
          fontSize: '0.8rem',
          height: '5vh'

      },
      navLinks : {
          textDecoration:'none',
          marginRight: '3vw',
          textTransform: 'uppercase',
          fontSize: '0.8em',
          color: theme.palette.white.main,
          fontWeight: 'bold',
          letterSpacing:'1px'
      },
      
      bookingBtn : {
        color: theme.palette.white.main, 
        borderColor: theme.palette.white.main,
        height: '5vh',
        fontSize: '0.8rem',
        marginLeft: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        backgroundColor: theme.palette.orange.main,
      
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


function LargeToolbar() {
    const classes = useStyles()
    return (
        <Toolbar className={classes.root}>
            <Grid container>
                <Grid item md={3}>
                    <Typography variant='H3'className={classes.logo}>
                        Hotel Reine
                    </Typography>
                </Grid>
                <Grid item md={5}>
                <Box variant='div' className={classes.box}>
                    {
                        navElements.map((element, index)=>{
                            return (
                                
                                    <NavLink key={index}to={element.link} className={classes.navLinks}>
                                        {element.name} 
                                    </NavLink>
                                
                            )
                        })
                    }

            </Box>
                </Grid>

                <Grid item md={4}>
                    <Box variant='div'style={{textAlign:'right'}}>
                            <Button variant='outlined' className={classes.phoneBtn} startIcon={<CallIcon />} href="tel:0033650507839">
                                <Typography variant='H1'className={classes.phone}> +33 6 50 59 78 39</Typography>
                            </Button>
                            <Button variant='outlined' className={classes.bookingBtn}>
                                <NavLink  to='/booking' className={classes.bookingNavlink}>Reserver</NavLink>
                           </Button>
                    </Box>
                    
                </Grid>

            </Grid>
                
        </Toolbar>
    )
}

export default LargeToolbar
