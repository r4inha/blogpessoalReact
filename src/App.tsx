import React from 'react';
import Navbar from './components/estaticos/navbar/navbar'
import Footer from './components/estaticos/footer/footer'
import Home from './assets/paginas/home/home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/paginas/home/home';
import CadastroUsuario from './assets/paginas/cadastroUsuario/CadastroUsuario';

function App() {

  return (
   <>
      <BrowserRouter>
         <Navbar/> {/*sempre vai ser carreagdor,componente estatico*/}
           <Routes>
             <Route path="/" element={<Home/>}/>  {/*muda de acordo com o caminho,rota*/}
             <Route path="/home" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
           </Routes>
          <Footer/> {/*sempre vai ser carregado,componente estatico*/}
      </BrowserRouter>
   </>
  );
}

export default App;