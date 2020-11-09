import React from 'react';
import './style.css';
import '../.././globalStyle.css';

import astronauta from '../.././assets/images/astronauta.svg';
import xicara from '../.././assets/images/xicara.svg';

export default function QuemSomosJS() {
    return (
        <section>
        <div class="quemsomos">
            <div class="titulo">
            	<p>Quem somos?</p>
            </div>
            <div class="flexquemsomos">
	            <div class="flex1">
	            	<div class="descricao">
		            	<p>A <b>Voluta Soluções Digitais</b> é a nossa Empresa Júnior do curso de Ciência da Computação da UFOP.
		            	A Voluta foi fundada em 2016 por alunos da graduação visando proporcionar serviços de qualidade com
		            	preços acessíveis para micro e pequenas empresas.</p>
		            </div>
		            <div class="botaocontainer">
		            	<a href="#" class="botaopadrao">SAIBA MAIS</a>
		            </div>
	            </div>
	            <div class="astronauta">
	            	<img src={astronauta} alt=""/>
	            </div>
            </div>
            <div class="flexnumeros">
            	<div class="conjuntonum">
            		<div class="imgnum">
            			<img src={xicara} alt=""/>
            		</div>
            		<div class="maisenumero">
            			<h1>+ 9600</h1>
            		</div>
            		<div class="subtitulonum">
            			<h1 class="txtsubtitulonum">XÍCARAS DE CAFÉ</h1>
            		</div>

            	</div>
            	<div class="conjuntonum">
            	
            	</div>
            	<div class="conjuntonum">
            	
            	</div>
            	<div class="conjuntonum">
            	
            	</div>

            </div>
        </div>

        </section>
    );
 }
