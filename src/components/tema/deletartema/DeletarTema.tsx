import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import {useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../service/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';


function DeletarTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
   
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    )
    
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        //confirmar o a exclusão
        function sim() {
          navigate('/temas')
            deleteId(`/temas/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Tema deletado com sucesso');
          }
        
          //cancelar a exclusão
          function nao() {
            navigate('/temas')//voltar a tela Temas
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema?
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;