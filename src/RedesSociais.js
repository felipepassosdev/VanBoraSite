import React, { Component } from 'react'
import redessociais from './redessociais.svg'

class RedesSocias extends Component {
    render() {
        return (
            <div className="bg-dark bdtwo">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="display-2 text-white">Redes Sociais</h1>
                            <p className="font-weight-bold text-white display-3">
                                Você pode nos encontrar no instagram...
                                @.</p>
                        </div>
                        <div className="col-6">
                            <img src={redessociais} className="img-fluid" alt="Imagem responsiva" />
                        </div>
                    </div>
                    <div className="col-12">
                        <h1 className="display-6 text-center text-white">#WeAreAgendarme</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default RedesSocias;