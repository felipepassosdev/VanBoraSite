import React from 'react';
import Menu from './Menu';
import BoraCorrer from './BoraCorrer';
import RedesSocias from './RedesSociais';
import Localizacao from './Localizacao';
import Contatenos from './Contatenos';
import './index.css'
import Footer from './Footer';

function App() {
  return (
    <div>
      <Menu/>
      <BoraCorrer/>
      <RedesSocias/>
      <Localizacao/>
      <Contatenos/>
      <Footer/>
    </div>
  );
}

export default App;
