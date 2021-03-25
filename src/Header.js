import React from 'react'
import {
    makeStyles, AppBar, Toolbar, IconButton, Button, useTheme, Switch, Hidden, useMediaQuery
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({

    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuIcon: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3)
    },
    icons: {
        paddingRight: theme.spacing(3),
    },
    logo: {
        height: 30
    },
}))

export function Header({ darkMode, setDarkMode }) {
    const classes = useStyles()
    const theme = useTheme()

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));
    const buttonProps = {
        variant: isSmallScreen ? "text" : "outlined",
        size: isSmallScreen ? "small" : "large",
        startIcon: isSmallScreen ? '' : <AccountCircleIcon />
    };

    return (
        <AppBar color='inherit' className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Hidden mdDown>
                    <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png"} alt="logo" className={classes.logo} />
                </Hidden>
                <div className={classes.grow} />

                <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />

                <IconButton edge="start" className={classes.icons}>
                    <VideoCallIcon />
                </IconButton>
                <IconButton edge="start" className={classes.icons}>
                    <AppsIcon />
                </IconButton>
                <IconButton edge="start" className={classes.icons}>
                    <NotificationsIcon />
                </IconButton>
                <Button startIcon={<AccountCircleIcon />} variant='outlined' {...buttonProps} color="secondary">Fazer Login</Button>
            </Toolbar>
        </AppBar>
    )
}