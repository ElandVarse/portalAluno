import React from 'react';
import './header.css'

import { Link, useHistory } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'


const Header = () => (
   <header>
       <nav>
            <ul>
                <li>Orientação de Matrícula</li>
                <li>Comprovante de Matrícula</li>
                <li>Solicitação de Disciplinas</li>
            </ul>

            <Link className='link' to="/">
                <FiLogOut size={16} color="#E02041"/>
                Sair
            </Link>
       </nav>
    </header>
);

export default Header