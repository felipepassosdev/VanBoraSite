import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Relatorio extends Component {
    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Editar/Apagar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>10:30</td>
                                    <td><button className="btn btn-primary" type="submit">editar</button>
                                        <button className="btn btn-danger" type="submit"> apagar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>10:45</td>
                                    <td><button className="btn btn-primary" type="submit">editar</button>
                                        <button className="btn btn-danger" type="submit"> apagar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>11:00</td>
                                    <td><button className="btn btn-primary" type="submit">editar</button>
                                        <button className="btn btn-danger" type="submit"> apagar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>11:15</td>
                                    <td><button className="btn btn-primary" type="submit">editar</button>
                                        <button className="btn btn-danger" type="submit"> apagar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>11:30</td>
                                    <td><button className="btn btn-primary" type="submit">editar</button>
                                        <button className="btn btn-danger" type="submit"> apagar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>11:45</td>
                                    <td><button className="btn btn-primary" type="submit">editar</button>
                                        <button className="btn btn-danger" type="submit"> apagar</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>12:00</td>
                                    <td><button className="btn btn-primary" type="submit">editar</button>
                                        <button className="btn btn-danger" type="submit"> apagar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Horário</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/cadastrar" className="navbar-brand text-white">
                            <button className="btn btn-primary" type="submit">Cadastrar</button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Relatorio;