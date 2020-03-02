import React from 'react';
import './header.css'

function esconder(){
    document.querySelector(".instMore").classList.toggle("hide");
}

const Header = () => (
   <header>
       <nav>
            <ul>
                <li>Orientação de Matrícula</li>
                <li>Comprovante de Matrícula</li>
                <li>Solicitação de Disciplinas</li>
            </ul>
       </nav>
        <h1>Portal do Aluno</h1>
    </header>
);

export default Header