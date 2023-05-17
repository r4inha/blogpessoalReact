import React from 'react';
import GithubIcon from '@material-ui/icons/Github';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Me siga nas redes! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/bianca-luna-88aaa7116/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://github.com/r4inha" target="_blank">
                                <GithubIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/r4inha_/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >Desenvolvedora: Bianca Francisquete</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">© 2023 Copyright: Generation Brasil</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;