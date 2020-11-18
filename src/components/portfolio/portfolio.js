import React from 'react';
import './styles.css';
import '../.././globalStyle.css';
import Slide from './slider.js';


export default function Servicos() {
    return (
        <div id = "portfolio">
            <div className = "titulo-portfolio">
                <h1>Portfólio</h1>
            </div>
            
            <Slide />
            
        </div>
        
    );
}
