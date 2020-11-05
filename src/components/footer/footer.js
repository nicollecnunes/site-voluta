import React from 'react';
import './footer_style.css';

import logofb from './assets/facebook.svg';
import logoig from './assets/instagram.svg';
import logomail from './assets/mail.svg';

export default function FooterJS() {
    return (
        <section>
            <div class="footer">
                <div class="colunas">
                    <div class="colunafooter1">
                        <p>Sala 05 do DECOM, ICEB - UFOP <br/> Ouro Preto -  MG </p>
                    </div>
                    <div class="colunafooter2">
                        <a class="logosfooter" href="mailto:voluta@gmail.com"><img src={logomail} alt=""/></a>
                        <a class="logosfooter" href="https://www.instagram.com/volutaej/"><img src={logoig} alt=""/></a>
                        <a class="logosfooter" href="https://www.facebook.com/VolutaEJ/"><img src={logofb} alt=""  /></a>  
                    </div>
                </div>
                    <div class="finalfooter">
                        <p>Copyright © 2020 | Desenvolvido pela Voluta Soluções Digitais</p>
                    </div>
                </div>

        </section>
    );
 }