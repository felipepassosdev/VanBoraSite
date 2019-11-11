import React, { Component } from 'react'
import googleplay from './googleplay.png'
import appstore from './appstore.png'
import carro from './carro.svg'

class Carro extends Component {
    render() {
        return (
            <div className="bg-light bdone">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="img/slide1.jpg" className="img-fluid" alt="Primeiro Slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="img/slide2.jpg" className="img-fluid" alt="Segundo Slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="img/slide3.jpg" className="img-fluid" alt="Segundo Slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Próximo</span>
        </a>
    </div>
            </div>
        )
    }
}

export default Carro;