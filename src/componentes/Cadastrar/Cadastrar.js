import React, { Component } from 'react';
import Smile from './smile.svg';

class Cadastrar extends Component {
    static defaultProps = {
        onBlur: () => {} // Se não passar nada não vai dar erro
    }

    constructor(props) {
        super(props)

        this.imputName = React.createRef();
        this.mudar = this.mudar.bind(this);

        this.state = {
            localidade: '',
            uf: '',
        }
    }

    mudar(event) {
        console.log(this.imputName.current.value)
        fetch(`https://viacep.com.br/ws/${this.imputName.current.value}/json/`)
            .then(response => response.json())
            .then(cep => {
                this.setState({
                    localidade: cep.localidade,
                    uf: cep.uf

                })
                console.log(cep.localidade)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="display-4 text-center text-dark">Cadastro de Clientes</h1>
                </div>
                <div className="row">
                    <div className="col-8">
                        <form className="needs-validation" novalidate>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom01">Primeiro nome</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Nome" value="" required />
                                    <div className="valid-feedback">
                                        Tudo certo!
                            </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom02">Sobrenome</label>
                                    <input type="text" className="form-control" id="validationCustom02" placeholder="Sobrenome" value="" required />
                                    <div className="valid-feedback">
                                        Tudo certo!
                            </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustomUsername">Usuário</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div>
                                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Usuário" aria-describedby="inputGroupPrepend" required />
                                        <div className="invalid-feedback">
                                            Por favor, escolha um nome de usuário.
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-3 mb-3">
                                    <label for="validationCustom05">CEP</label>
                                    <input type="text" className="form-control" id="validationCustom05" placeholder="CEP" required name="name" ref={this.imputName} onBlur={this.mudar} />
                                    <div className="invalid-feedback">
                                        Por favor, informe um CEP válido.
                                </div>
                                </div>
                                <div className="col-md-5 mb-3">
                                    <label for="validationCustom03">Cidade</label>
                                    <input type="text" className="form-control" id="validationCustom03" placeholder="Cidade" required value={this.state.localidade} />
                                    <div className="invalid-feedback">
                                        Por favor, informe uma cidade válida.
                            </div>
                                </div>
                                <div className="col-md-1 mb-3">
                                    <label for="validationCustom04">Estado</label>
                                    <input type="text" className="form-control" id="validationCustom04" placeholder="UF" required value={this.state.uf} />
                                    <div className="invalid-feedback">
                                        Por favor, informe um estado válido.
                            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="validationCustom03">Telefone</label>
                                    <input type="text" className="form-control" id="validationCustom03" placeholder="Telefone" required />
                                    <div className="invalid-feedback">
                                        Por favor, informe uma Telefone válido.
                            </div>
                                </div>

                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" for="invalidCheck">
                                        Concordo com os termos e condições
                            </label>
                                    <div className="invalid-feedback">
                                        Você deve concordar, antes de continuar.
                            </div>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={Smile} className="img-fluid" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cadastrar;