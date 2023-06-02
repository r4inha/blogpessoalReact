import React, { useEffect } from 'react';
//import './Home.css';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Carrossel from '../../components/carrossel/Carrossel';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
  
  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#E5B7EE"}}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#A927A9", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#A927A9", fontWeight: "bold" }}>Sinta-se livre para colocar suas ideias!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#A927A9", color: "white" }}>Ver postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://pbs.twimg.com/profile_images/1214327328697917440/EZ8nhuy6_400x400.jpg" alt="" width="250px" height="360px" style={{paddingTop:"50px", paddingBottom:"50px"}} />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
  </Grid>
            <Grid container style={{ marginTop: "8px" }}>
                    <Grid item xs={12}>
                         <Carrossel />
                    </Grid>
                </Grid>
    </>
  )
}

export default Home;