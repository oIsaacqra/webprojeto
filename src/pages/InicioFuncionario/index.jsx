import React from 'react';
import { Link } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import ListarAgendamentos from '../../components/ListarAgendamentos ';
import "./InicioFuncionario.css";

function InicioFuncionario(){

    return(
        <PrivateRoute>
        <div>
            <div>
                  { /* HTML Imports e etc.. */ }
        
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
                    <link rel="shortcut icon" type="image/png" href="./assets/img/2.png"></link>
                    
            </div>
      <div className="sidebar-cliente">
        <div className="logo-side-ige">
          <a href="/"><img src="./src/assets/logo_white-sf.png" id="img-side-cliente" /></a>
        </div>
        <div className="side-cliente">
            <a href="/inicioFuncionario" class="nav__link">
            <div className="components-side-client">
              <i class="bi bi-house-door" id="icon-side-cliente"></i>
              <span class="nav__name"> Inicio</span>
            </div>
            </a>
            <a href="/CadFuncionario" class="nav__link">
            <div className="components-side-client">
            <i class="bi bi-person-badge" id="icon-side-cliente"></i>
              <span class="nav__name"> Add Funcionario</span>
              </div>
            </a>
            <a href="/funcionario" class="nav__link">
            <div className="components-side-client">
            <i class="bi bi-calendar-check" id="icon-side-cliente"></i>
              <span class="nav__name"> Agendamentos</span>
              </div>
            </a>
            <a href="/lista" class="nav__link">
            <div className="components-side-client">
            <i class="bi bi-card-list" id="icon-side-cliente"></i>
              <span class="nav__name">Listar Usuarios</span>
              </div>
            </a>
        </div>
        <button className="btn-login-out-cliente" >Login</button>
      </div>
      <div className="content-agendamentos">
        <h1>Olá Usuário, seja bem-vindo</h1>
      </div>
    </div>
    </PrivateRoute>
    )

}

export default InicioFuncionario;