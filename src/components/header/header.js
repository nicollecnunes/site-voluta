import React, { useState } from 'react';import './style.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../.././assets/images/logoVoluta.png';
import sanduiche from '../.././assets/images/Vectorsanduiche.png';

export default function HeaderJS() { 
    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    }
    return (
        <header>
        {/* inicio da divisao do menu */}
            {/*Menu sanduiche*/}
            {/*<input type="checkbox" class = "check"/>
            <label class = "icone" for= "check"><img src= {sanduiche}/></label>/*}
            {/* links para navegacao*/}{/*
            <nav class="menu" id="inicio">
                <a href="#sobrenos">sobre nós</a>
                <a href="#servicos">serviços</a>
                <a href="#portifolio">portifólio</a>
                <a href="contato">contato</a>
            </nav>
            <div class="logo"> <img src={logo} alt="logo_voluta"/></div>
            */}
            <div  
                    onClick={ () => {
                        changeToggle();
                        console.log(toggle);
                    }} className="imagem_sanduiche">
                    <img src= {sanduiche}/>
                    
                </div>
            <div id="lista" className={toggle ? "open-drawer" : "drawer"}>

                    <AnchorLink onClick={ () => { changeToggle(); console.log(toggle);}} className="lista_link" offset={() => 100} href='#home'>
                        sobre nós
                    </AnchorLink>   

                    <AnchorLink onClick={ () => { changeToggle(); console.log(toggle);}} className="lista_link" offset={() => 100} href='#sobre'>
                        serviços
                    </AnchorLink>    

                    <AnchorLink onClick={ () => { changeToggle(); console.log(toggle);}} className="lista_link" offset={() => 100} href='#espaco'>
                        portifólio
                    </AnchorLink>    

                    <AnchorLink onClick={ () => { changeToggle(); console.log(toggle);}} className="lista_link" offset={() => 100} href='#contato'>
                        contato
                    </AnchorLink>    

                {/*
                    <li><a href="#home">INÍCIO</a></li>
                    <li><a href="#sobre">SOBRE NÓS</a></li>
                    <li><a href="#espaco">NOSSO ESPAÇO</a></li>
                    <li><a href="#contato">CONTATO</a></li>
                */}    
                </div>
                <div class="logo"> <img src={logo} alt="logo_voluta"/></div>

            {/* fim dos links para navegacao*/}
      
    </header> 
    );
 }