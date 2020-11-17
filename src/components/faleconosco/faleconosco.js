import React from 'react';
import './style.css';
import '../.././globalStyle.css';

import satelite from '../.././assets/images/satelite.svg';

export default function FaleConoscoJS() {
    return (
        <section>
            <div class="faleconosco">
                <div class="titulopadrao">
                    <p>Fale Conosco</p>
                    <hr></hr>
                </div>
                <div class="container1">
                    <div class="satelite">
                        <img src={satelite} alt=""/>
                    </div>
                    <div class="contform">
                        <p> O que podemos fazer por você? </p>
                        <div class="botoes">
                            <a href="#" class="botaopadrao">Quero um projeto</a>
                            <a href="#" class="botaopadrao">Dúvidas</a>
                            <a href="#" class="botaopadrao">Outros</a>
                           
                        </div>
                        <div class="formularioesp">
                            <input type="input" class="input" placeholder="Seu Nome" name="name" required />
                            <input type="input" class="input" placeholder="Seu e-mail" name="name" required />
                        </div>
                        <div class="formularioesp2">
                            <textarea class="input" placeholder="Mensagem" required/>   
                        </div>
                        <a href="#" class="botaopadrao">Enviar</a>
                    </div>
                </div>

            </div>
        </section>
    );
 }