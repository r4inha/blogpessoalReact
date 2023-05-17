import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#E21212" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vinde xD</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Um lugar livre para discussões e novas ideias.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "red", backgroundColor: "#E21212", color: "white" }}>Entre no meu blog</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="http://s2.glbimg.com/GIiK-a3t5keIPR6WK3RkSalgQWQ=/0x185:2000x1333/690x396/s.glbimg.com/es/ge/f/original/2014/04/06/foto_20140406001515_1.jpg" alt="" width="690px" height="396px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

        </>
    )
}

export default Home;