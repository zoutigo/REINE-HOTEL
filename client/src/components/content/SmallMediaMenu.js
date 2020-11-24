import React from 'react'
import {useSelector} from 'react-redux'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    root : {
        flexGrow: 1 ,
        width: '100%',
        minWidth: '100vw',
        minHeight: '100vh',
        zIndex: 2 ,
        backgroundColor: theme.palette.coyotte.main,
        position: 'absolute',
        top: '4em',
        transform: 'translate(0, -200%)'
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
                    {'name': 'restaurant', 'link': '/restaurant'}]

function SmallMediaMenu() {
    const classes = useStyles()
    const burgerMenuIsOpened = useSelector(state => state.settings.burgerMenuIsOpened)
    console.log(burgerMenuIsOpened)
    const burgerStyle = () =>{
        if(burgerMenuIsOpened){
            return displayStyle
        }else {
            return hiddenStyle
        }
    }

    return (
        <div 
          className={classes.root} 
          style = { burgerStyle()}
          >
             {
                 navElements.map((element, index)=>{
                     return (
                         <Typography key={index}>
                             {element.name}
                         </Typography>
                     )
                 })
             }
        </div>
    )
}

export default SmallMediaMenu
