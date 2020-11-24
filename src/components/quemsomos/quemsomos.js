import React from 'react';
import './style.css';
import '../.././globalStyle.css';

import cometa1 from '../.././assets/images/Cometa.png';
import cometa2 from '../.././assets/images/Cometa (1).png';
import cometa3 from '../.././assets/images/Cometa (2).png';
import cometa4 from '../.././assets/images/Cometa (3).png';
import estrela1 from '../.././assets/images/estrela1.png';
import estrela2 from '../.././assets/images/estrela2.png';
import estrela3 from '../.././assets/images/estrela3.png';
import estrela4 from '../.././assets/images/estrela4.png';
import estrela5 from '../.././assets/images/estrela5.png';
import estrela6 from '../.././assets/images/estrela6.png';
import estrela7 from '../.././assets/images/estrela7.png';
import estrela8 from '../.././assets/images/estrela8.png';
import estrela9 from '../.././assets/images/estrela9.png';
import estrela10 from '../.././assets/images/estrela10.png';
import planetavermelho from '../.././assets/images/Planeta3.png';
import planetaazul from '../.././assets/images/Group 27.png';
import espacometade from '../.././assets/images/espaco.png';



export default function QuemSomosJS() {
    return (
        <section class="quemsomos">
        <div class="escrita">

            <div class="titulo_quemsomos"> <h1>Voluta <br/> Soluções Digitais</h1> </div>
            <div class="legenda_quemsomos">
                <h3>Nós temos o que </h3>
                <h3 class="roxo">você</h3>
                <h3>precisa!</h3>
            </div>
        </div>
        <div class="imagens">
            <div class="cometa1"><img src={cometa1} alt="cometa vermelho"/></div>
            <div class="cometa2"><img src={cometa2} alt="cometa azul"/></div>
            <div class="cometa3"><img src={cometa3} alt="cometa azul"/></div>
            <div class="cometa4"><img src={cometa4} alt="cometa vermelho"/></div>

            <div class="estrela1"><img src={estrela1} alt="estrela"/></div>
            <div class="estrela2"><img src={estrela2} alt="estrela"/></div>
            <div class="estrela3"><img src={estrela3} alt="estrela"/></div>
            <div class="estrela4"><img src={estrela4} alt="estrela"/></div>
            <div class="estrela5"><img src={estrela5} alt="estrela"/></div>
            <div class="estrela6"><img src={estrela6} alt="estrela"/></div>
            <div class="estrela7"><img src={estrela7} alt="estrela"/></div>
            <div class="estrela8"><img src={estrela8} alt="estrela"/></div>
            <div class="estrela9"><img src={estrela9} alt="estrela"/></div>
            <div class="estrela10"><img src={estrela10} alt="cestrela"/></div>

            <div class="planetavermelho"><img src={planetavermelho} alt="cometa azul"/></div>
            <div class="planetaazul"><img src={planetaazul} alt="cometa vermelho"/></div>
            <div class="espaco-metade"><img src={espacometade} alt="cometa vermelho"/></div>
        </div> 
        <div class="descricao">

        </div>
    </section>
    );
 }
