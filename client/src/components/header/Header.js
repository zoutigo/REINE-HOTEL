import React from 'react'
import {AppBar, Grid, Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Icons from './Icons'
import Navigation from './Navigation'
import HButtons from './HButtons'


const useStyles = makeStyles((theme)=>( {
    root: {
        backgroundColor: '#0a0a0aff',
        minWidth: '360px',
        backgroundColor : theme.palette.dark.light,
      
        [theme.breakpoints.up('lg')]:{
            minHeight: '10vh',
            paddingTop: '7px'
        },
        toolbar : {
            margin: 'Opx',
            [theme.breakpoints.up('lg')]:{
                minHeight: '100%'
            },
        }
       
    },
    icons:{
        backgroundColor: 'green',
       
        [theme.breakpoints.up('lg')]:{
            display: 'none'
        },   
    
    },
    buttons:{
        backgroundColor: 'yellow',
        [theme.breakpoints.down('md')]:{
            display: 'none'
        },
    },
    navs : {
        backgroundColor: 'blue',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        },
    },
    logo : {
        backgroundColor: 'orange',
        textTransform: 'uppercase',
        letterSpacing: '1px', 
    },
    Logo : {
        fontSize: '1.7em',
        lineHeight:'2em',
        [theme.breakpoints.up('lg')]:{
            letterSpacing: '2px',
            fontSize: '40px'
        },
     
    }
}))


function Header() {
    const classes = useStyles()
   
    return (
     
            <AppBar position='static' className={classes.root}>
                 <Toolbar className={classes.toolbar}>
                     <Grid container justify='space-between' >
                         <Grid item xs={8} sm={6}  md={3}  lg={3} className={classes.logo} >
                            <Typography variant='body2' className={classes.Logo}>Hotel Reine</Typography>
                         </Grid>
                         <Grid item xs={false} xs={false}  md={7}  lg={7} className={classes.navs} alignItems='center' >
                            <Navigation />
                         </Grid>
                         <Grid item xs={false} sm={false}  md={false} lg={2} className={classes.buttons} justify='space-between' alignItems='center'>
                             <HButtons />
                         </Grid>
                         <Grid item xs={4}  sm={6} md={2} lg={false}  className={classes.icons}>
                               <Icons />
                         </Grid>

                     </Grid>
                 </Toolbar>
            </AppBar>
     
    )
}

export default Header
