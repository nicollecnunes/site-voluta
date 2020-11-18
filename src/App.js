import React from 'react';
import FooterJS from './components/footer/footer.js';
import HeaderJS from './components/header/header.js';
import QuemSomosJS from './components/quemsomos/quemsomos.js';
import Servicos from './components/servicos/servicos.js';
import Portfolio from './components/portfolio/portfolio.js';
import FaleConoscoJS from './components/faleconosco/faleconosco.js';
import HomeJS from './components/home/home.js';


function App() {
  return (
    <div className="App">
	    <div>
        <HeaderJS/>
        {/*<HomeJS/>*/}
        <QuemSomosJS/>
        <Servicos />
        <Portfolio/>
        <FaleConoscoJS/>
	      <FooterJS/>  
	    </div>
    </div>
  );
}

export default App;
