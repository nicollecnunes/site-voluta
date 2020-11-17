import React from 'react';
import FooterJS from './components/footer/footer.js';
import Header from './components/header/header.js';
import QuemSomosJS from './components/quemsomos/quemsomos.js';
import Servicos from './components/servicos/servicos.js';

function App() {
  return (
    <div className="App">
	    <div>
        <Header/>
        <QuemSomosJS/>
        <Servicos />
	      <FooterJS/>
	    </div>
    </div>
  );
}

export default App;
