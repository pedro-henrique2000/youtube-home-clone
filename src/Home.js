import React from 'react'
import {
    makeStyles, Toolbar, Box, Typography, Grid
} from '@material-ui/core';

import videos from './data/videos.json'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    }
}))

export function Home() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Box display='flex'>
                
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