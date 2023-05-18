import React, {ChangeEvent, useState, useEffect} from 'react';
import './Login.css';
import { Box, Grid, Button, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';

function Login(){
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const[userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario: '',
            senha: '',
            token:'',
            foto:''
        }
        )

        function updateModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if(token !==''){
                navigate('/home')
            }
        },[token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)
                alert('Usuário Logado com sucesso!')
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!')
            }
        }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' className='botao'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{color: "#FF4D6D"}}>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>    
            </Grid>
            <Grid xs={6} className='imagem'>
                
            </Grid>
        </Grid>

    )
}

export default Login;