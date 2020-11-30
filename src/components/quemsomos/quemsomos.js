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

import diamante from '../.././assets/images/quemsomos2/diamante.png';
import foguetelua from '../.././assets/images/quemsomos2/foguetelua.png';
import marketing from '../.././assets/images/quemsomos2/marketing.png';
import olho from '../.././assets/images/quemsomos2/olho.png';
import presidencia from '../.././assets/images/quemsomos2/presidencia.png';
import projetos from '../.././assets/images/quemsomos2/projetos.png';
import vp from '../.././assets/images/quemsomos2/vp.png';





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
        <div class="titulo_descricao">Quem Somos</div>
            <div class="subtitulo_descricao">
                A Voluta Soluções Digitais é a nossa Empresa Júnior do curso de Ciência da Computação da UFOP. 
                A Voluta foi fundada em 2016 por alunos da graduação visando proporcionar serviços de qualidade com preços acessíveis para micro e pequenas empresas.
            </div>
            <div class= "quadros">
                <div class="quadro1"> <img src={foguetelua} alt="iconefoguetelua"/> <div class="texto_quadro">Retribuir a sociedade por meio da tecnologia, realizando projeto de qualidade e promovendo assim a formação de líderes empreendedores capacitados.</div></div>
                <div class="quadro2"> <img src={olho} alt="iconeolho"/> <div class="texto_quadro">Ser até 2021, uma empresa transparente e referência na região dos inconfidentes, tendo membros capazes de realizar com excelência projetos de sites e aplicativos inovadores.</div></div>
                <div class="quadro3"> <img src={diamante} alt="iconediamante"/>
                    <div class="texto_quadro">- Proatividade;  
                    <br/>
                    - Família;
                    <br/>
                    - Inclusão a diversidade;
                    <br/>
                    - Dedicação;
                    <br/>
                    - Empatia;
                    <br/>
                    - Profissionalismo;
                    <br/>
                    - Confia no bacon;
                    </div>  
                    
                    </div>
            </div>
            <div class="titulo_diretorias">Diretorias</div>
            <div class="diretorias">
                <div class="diretorias_quadros">
                    <div class="quadro_presidencia"> <img src={presidencia} alt="iconepresidencia"/> </div>
                    <div class="quadro_vp"> <img src={vp} alt="iconevp"/> </div>
                    <div class="quadro_marketing"> <img src={marketing} alt="iconemarketing"/> </div>
                    <div class="quadro_projetos"> <img src={projetos} alt="iconeprojetos"/> </div>
                </div>
                <div class="titulo_presidencia">Presidência</div>
                <div class="descricao_presidencia">A diretoria é responsável pela questão legais da empresa, envolvendo a documentação, a parte financeira e também todas as relações externas.</div>
                <div class="titulo_vp">Vice Presidência</div>
                <div class="descricao_vp">Responsável cuidar da parte interna da empresa. Ela lida tanto com documentos e processos específicos quanto com acompanhamento das diretorias e dos membros</div>
                <div class="titulo_marketing">Marketing</div>
                <div class="descricao_marketing">A diretoria é responsável pelo exomarketing e comercial da empresa. Eles comandam duas áreas: arte & conteúdo e vendas</div>
                <div class="titulo_projetos">Projetos</div>
                <div class="descricao_projetos">Possui o objetivo estruturar todo o processo de desenvolvimento dos projetos que recebemos e gerencia-los mantendo contato com o cliente.</div>
            </div>
        </div>
    </section>
    );
 }
