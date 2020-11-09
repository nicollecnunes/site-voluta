import React from 'react';
import './style.css';
import '../.././globalStyle.css';

import logofb from '../.././assets/images/facebook.svg';
import logoig from '../.././assets/images/instagram.svg';
import logomail from '../.././assets/images/mail.svg';

export default function FooterJS() {
    return (
        <section>
            <div class="footer">
                <div class="colunas">
                    <div class="colunafooter1">
                        <p>Sala 05 do DECOM, ICEB - UFOP <br/> Ouro Preto -  MG </p>
                    </div>
                    <div class="colunafooter2">
                        <a class="logosfootermail" href="mailto:voluta@gmail.com"><img src={logomail} alt=""/></a>
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