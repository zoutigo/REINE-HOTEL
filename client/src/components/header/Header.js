import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import {useWindowWidthAndHeight} from '../../utils/useWindowWidthAndHeight'
import LargeToolbar from './LargeToolbar'
import SmallToolBar from './SmallToolBar'


const useStyles = makeStyles({
    root: {
        backgroundColor: '#0a0a0aff'
    }
})

function Header() {
    const classes = useStyles()
    const [width, height] = useWindowWidthAndHeight();
    return (
     
            <AppBar position='fixed'>
            {
                width > 978 ? <LargeToolbar /> : <SmallToolBar />
            }
            </AppBar>
     
    )
}

export default Header
