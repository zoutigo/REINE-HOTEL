import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#0a0a0aff'
    }
})

function Header() {
    const classes = useStyles()
    return (
        <AppBar>
            <Toolbar className={classes.root}>
                My header
            </Toolbar>
        </AppBar>
    )
}

export default Header
