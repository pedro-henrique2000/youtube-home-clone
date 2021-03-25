import React from 'react'
import {
    makeStyles, AppBar, Toolbar, IconButton, Button, Drawer, Divider, ListItem, ListItemIcon, ListItemText, List, Box, Typography, ListSubheader, Grid, Hidden, useTheme, Switch
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreIcon from '@material-ui/icons/More';

const videos = [
    {
        id: 1,
        title:
            'Tutorial Github',
        channel: 'Pedro Henrique',
        views: '11 mi de visualizações',
        date: 'há 1 mês',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
    {
        id: 2,
        title:
            'Tutorial JavaScript',
        channel: 'Pedro Henrique',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
    {
        id: 3,
        title:
            'Context Api',
        channel: 'Pedro Henrique',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
    {
        id: 4,
        title:
            'Vídeo 4',
        channel: 'Pedro Henrique',
        views: '5,6 mi de visualizações',
        date: 'há 1 ano',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
    {
        id: 5,
        title:
            'Meu Primeiro Vídeo!',
        channel: 'Pedro Henrique',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
    {
        id: 6,
        title: 'React Hooks',
        channel: 'Pedro Henrique',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
    {
        id: 7,
        title:
            'Tutorial Axios',
        channel: 'Pedro Henrique',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
    {
        id: 8,
        title:
            'Vídeo 999',
        channel: 'Pedro Henrique',
        views: '1,9 mi de visualizações',
        date: 'há 3 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumbnail.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    },
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
    drawer: {
        width: 240,
        flexGrow: 0,
        fontSize: 14
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    listItemText: {
        fontSize: 14
    },
    listItem: {
        paddingBottom: 4,
        paddingTop: 4
    }

}))

export function Home({darkMode, setDarkMode}) {

    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png"} alt="logo" className={classes.logo} />
                    <div className={classes.grow} />

                    <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)}/>

                    <IconButton edge="start" className={classes.icons}>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.icons}>
                        <AppsIcon />
                    </IconButton>
                    <IconButton edge="start" className={classes.icons}>
                        <NotificationsIcon />
                    </IconButton>
                    <Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{
                                    root: classes.listItem
                                }}>
                                    <ListItemIcon><HomeIcon /></ListItemIcon>
                                    <ListItemText primary={"Home"} classes={{
                                        primary: classes.listItemText
                                    }} />
                                </ListItem>

                                <ListItem button classes={{
                                    root: classes.listItem
                                }}>
                                    <ListItemIcon><WhatshotIcon /></ListItemIcon>
                                    <ListItemText primary={"Em alta"} classes={{
                                        primary: classes.listItemText
                                    }} />
                                </ListItem>

                                <ListItem button classes={{
                                    root: classes.listItem
                                }}>
                                    <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
                                    <ListItemText primary={"Inscrições"} classes={{
                                        primary: classes.listItemText
                                    }} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{
                                    root: classes.listItem
                                }}>
                                    <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                                    <ListItemText primary={"Biblioteca"} classes={{
                                        primary: classes.listItemText
                                    }} />
                                </ListItem>

                                <ListItem button classes={{
                                    root: classes.listItem
                                }}>
                                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                                    <ListItemText primary={"Histórico"} classes={{
                                        primary: classes.listItemText
                                    }} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={2}>
                                <Typography variant='body2'>
                                    Faça login para curtir vídeos, comentar e se inscrever
                        </Typography>
                                <Box mt={2}>
                                    <Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary">Fazer Login</Button>
                                </Box>
                            </Box>
                            <Divider />
                            <List>
                                <ListSubheader>Mais do YouTube</ListSubheader>
                                {['Esporte', 'Ao vivo', 'Música', 'Filmes', 'Jogos', 'Destaque', 'Séries', "Análises"].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon><MoreIcon /></ListItemIcon>
                                        <ListItemText primary={text} classes={{
                                            primary: classes.listItemText
                                        }} />
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />

                        </div>
                    </Drawer>
                </Hidden>


                <Box p={8}>
                    <Toolbar />
                    <Typography variant='h5' color='textPrimary' style={{ fontWeight: 800 }}>
                        Recomendados
                    </Typography>
                    <Grid container spacing={4}>
                        {videos.map((element, index) => (
                            <Grid item lg={3} md={4} sm={6} xs={12} index={index}>
                                <Box>
                                    <img alt={element.title} style={{ width: '100%' }} src={element.thumb} />
                                </Box>
                                <Box>
                                    <Typography style={{ fontWeight: 600 }} gutterBottomvariant='body1' color='textPrimary'>{element.title}</Typography>
                                    <Typography display='block' variant='body2' color='textSecondary'>{element.channel}</Typography>
                                    <Typography variant='body2' color='textSecondary'>{`${element.views} • ${element.date}`}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}