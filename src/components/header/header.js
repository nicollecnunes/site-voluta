import React from 'react';
import './style.css';

import logo from '../.././assets/images/logoVoluta.png';

export default function Header() {
    return (
        <header>
        {/* inicio da divisao do menu */}

            {/* links para navegacao*/}
            <nav class="menu" id="inicio">
                <a href="#sobrenos">sobre nós</a>
                <a href="#servicos">serviços</a>
                <a href="#portifolio">portifólio</a>
                <a href="contato">contato</a>
            </nav>
            <div class="logo"> <img src={logo} alt="logo_voluta"/></div>

            {/* fim dos links para navegacao*/}
      
    </header> 
    );
 }