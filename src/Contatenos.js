import React, { Component } from 'react'
import contate from './6contate.svg'

class Contanos extends Component {
    render() {
        return (
            <div class="bg-light bdfour">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-3 text-center">Contate-nos</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <form>
                                <div className="form-group">
                                    <label for="formGroupExampleInput">Nome</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Seu nome" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Endereço de email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="Seu email" />
                                    <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com
                                            ninguém.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Resumo</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                        <div className="col-6">
                            <img src={contate} className="img-fluid" alt="Imagem responsiva" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contanos;