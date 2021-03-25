import React from 'react'
import {
    makeStyles, Toolbar, Button, Drawer, Divider, ListItem, ListItemIcon, ListItemText, List, Box, Typography, ListSubheader, Hidden
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreIcon from '@material-ui/icons/More';

const useStyles = makeStyles(({
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

export function SideMenu() {
    const classes = useStyles()

    return (
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
    )
}