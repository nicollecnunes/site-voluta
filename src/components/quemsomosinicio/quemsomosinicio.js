import React from 'react';
import './style.css';
import '../.././globalStyle.css';

import astronauta from '../.././assets/images/astronauta.svg';
import xicara from '../.././assets/images/xicara.svg';
import estudante from '../.././assets/images/estudante.svg';
import projeto from '../.././assets/images/projeto.svg';
import anoscomvc from '../.././assets/images/anoscomvc.svg';



export default function QuemSomosInicio() {
    return (
        <section>
        <div class="quemsomosinicio">
            <div class="titulopadrao">
            	<p>Quem Somos?</p>
            	<hr></hr>
            </div>
            <div class="flexquemsomos">
	            <div class="flexno1">
	            	<div class="descricaoinicio">
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
            			<h1 class="mais">+ </h1> <h1> 9600</h1>
            		</div>
            		<div class="subtitulonum">
            			<h1 class="txtsubtitulonum">XÍCARAS DE CAFÉ</h1>
            		</div>
            	</div>
            	
            	<div class="conjuntonum">
            		<div class="imgnum">
            			<img src={estudante} alt=""/>
            		</div>
            		<div class="maisenumero">
            			<h1 class="mais">+ </h1> <h1> 49</h1>
            		</div>
            		<div class="subtitulonum">
            			<h1 class="txtsubtitulonum">ESTUDANTES <br></br>TRANSFORMANDO O BRASIL</h1>
            		</div>
            	</div>

            	<div class="conjuntonum">
            		<div class="imgnum">
            			<img src={projeto} alt=""/>
            		</div>
            		<div class="maisenumero">
            			<h1 class="mais">+ </h1> <h1> 13</h1>
            		</div>
            		<div class="subtitulonum">
            			<h1 class="txtsubtitulonum">PROJETOS REALIZADOS</h1>
            		</div>
            	</div>

            	<div class="conjuntonum">
            		<div class="imgnum">
            			<img src={anoscomvc} alt=""/>
            		</div>
            		<div class="maisenumero">
            			<h1 class="mais">+ </h1> <h1> 4</h1>
            		</div>
            		<div class="subtitulonum">
            			<h1 class="txtsubtitulonum">ANOS COM VOCÊ</h1>
            		</div>
            	</div>

            </div>
        </div>

        </section>
    );
 }
