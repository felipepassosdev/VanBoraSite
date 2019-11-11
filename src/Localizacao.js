import React, { Component } from 'react'
import mapa from './mapa.svg'

class Localizacao extends Component {
    render() {
        return (
            <div className="bg-info bdthree">
                <div className="container">
                    <div className="col-12">
                        <h1 className="display-3 text-center text-white">Onde Estamos:</h1>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src={mapa} className="img-fluid" alt="Imagem responsiva" />
                        </div>
                        <div className="col-6">
                            <p className="font-weight-bold text-white display-3"> Estamos localizados na cidade de Jundiaí - SP .</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Localizacao;