import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css'
    class Menu extends Component {

        render(){
            return (
                <nav className="navbar navbar-expand-lg navbar-primary">
                <Link to="/" className="navbar-brand text-white">
                    {/* <img src={Calendario} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                    <strong> Agendar.me</strong>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/cadastrar" className="navbar-brand text-white">cadastrar</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/clientes" className="navbar-brand text-white">clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/relatorio" className="navbar-brand text-white">relatório</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/configuracao" className="navbar-brand text-white">configuração</Link>
                        </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <Link to="/login" className="navbar-brand text-white">login</Link>
                </form> */}
            </nav>
            )
        }
    }
export default Menu;