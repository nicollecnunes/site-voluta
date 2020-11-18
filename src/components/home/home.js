import React from 'react';
import './style.css';

import estrelas from '../.././assets/images/Estrelas.png';
import cometa1 from '../.././assets/images/Cometa2.png';
import cometa2 from '../.././assets/images/Cometa2 (1).png';
import cometa3 from '../.././assets/images/Cometa2 (2).png';
import cometa4 from '../.././assets/images/Cometa2 (3).png';
import cometa5 from '../.././assets/images/Cometa2 (4).png';
import foguete from '../.././assets/images/Foguete.png';
import ondas from '../.././assets/images/Ondas (1).png';

export default function HomeJS() {
    return (
        <section class="home">
                <div class="escrita">

                    <div class="titulo_home"> <h1>Voluta <br/> Soluções Digitais</h1> </div>
                    <div class="legenda_home">
                        <h3>Nós temos o que </h3>
                        <h3 class="roxo"> você </h3>
                        <h3>precisa!</h3>
                    </div>
                </div>
                <div class="estrelas"><img src={estrelas} alt="estrelas"/></div>
                <div class="cometas">
                    <div class="cometa1"><img src={cometa1} alt="cometa azul"/></div>
                    <div class="cometa2"><img src={cometa2} alt="cometa azul"/></div>
                    <div class="cometa3"><img src={cometa3} alt="cometa azul"/></div>
                    <div class="cometa4"><img src={cometa4} alt="cometa vermelho"/></div>
                    <div class="cometa5"><img src={cometa5} alt="cometa vermelho"/></div>
                </div>
                <div class="foguete"><img src={foguete} alt="Foguete"/> </div>
                <div class= "ondas"><img src={ondas} alt="Ondas"/></div>
        </section>
    );
}