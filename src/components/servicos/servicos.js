import React from 'react';
import './styles.css';
import '../.././globalStyle.css';

import websites from '../.././assets/images/websiteicon.svg';
import aplicativos from '../.././assets/images/appicon.svg';
import sistemas from '../.././assets/images/sistemasicon.svg';
import consultoria from '../.././assets/images/consultoriaicon.svg';


export default function Servicos() {
    return (
        <div id = "servicos">
            <div className = "titulo-servicos">
                <h1>Nossos Serviços</h1>
            </div>
            <div className = "info-servicos">
                <div>
                    <img src = {websites} alt={"icon"} />
                    <h2>Websites</h2>
                    <p>Desenvolvemos websites personalizados, utilizando das mais <b>novas tecnologias</b> do mercado.</p>
                </div>

                <div>
                    <img src = {aplicativos} alt={"icon"} />
                    <h2>Aplicativos</h2>
                    <p>Desenvolvemos para as plataformas <b>ANDROID</b> e <b>IOS</b>, de forma totalmente personalizada.</p>
                </div>

                <div>
                    <img src = {sistemas} alt={"icon"} />
                    <h2>Sistemas de Gerenciamento</h2>
                    <p>Criamos sistemas de gerenciamento visando principalmente <b>otimizar</b> o seu negócio.</p>
                </div>

                <div>
                    <img src = {consultoria} alt={"icon"} />
                    <h2>Consultorias</h2>
                    <p>Prestamos consultorias voltadas para <b>soluções</b> e <b>manutenções</b> de sistemas digitais.</p>
                </div>

            </div>

        </div>

    );
}
