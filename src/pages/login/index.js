import React from 'react'
import './login.css';

import { Link } from 'react-router-dom'

import fill from '../../assets/undraw_fill.svg'
import {FiLogIn} from 'react-icons/fi'

const Login = () => (
    <div className='login-container'>
    <h1><span>IFBA</span> - Portal do Aluno</h1>

        <section className='form'>
            <img src={fill} alt="Fillin"/>
            
            <form>
                <h2>Login</h2>
                <input type='text' placeholder='Matrícula'></input>
                <input type='password'placeholder='Senha'></input>
                <Link to="/home"> 
                    <button type='submit'> Acessar</button>
                </Link>
                <Link className='link' to="/">
                    <FiLogIn size={16} color="#0000ffaa"/>
                    Esqueci minha senha
                </Link>
            </form>
        </section>
    </div>
)

export default Login;