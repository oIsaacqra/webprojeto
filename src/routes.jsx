import {BrowserRouter, Routes, Route, Router } from 'react-router-dom'


import Home from './pages/Home';
import Usuario from './pages/Usuario';
import ListaUsuario from './pages/ListaUsuario';
import Login from './pages/Login';
import Cliente from './pages/Cliente'
import CadFuncionario from './pages/CadFuncionario'
import Funcionario from './pages/Funcionario'
import Teste from "./pages/Teste"



function RoutesApp(){
 return(
    <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuario" element={<Usuario/>}/>
                <Route path="/funcionario" element={<Funcionario/>}/>
                <Route path="/lista" element={<ListaUsuario/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cliente" element={<Cliente/>}/>
                <Route path="/CadFuncionario" element={<CadFuncionario/>}/>
                <Route path="/teste" element={<Teste/>}/>
            </Routes>
    </BrowserRouter>
 )
}
export default RoutesApp;
