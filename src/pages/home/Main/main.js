import React from 'react'
import './main.css'
import Article from '../Article/article'

const Main = () => (
    <main>
        <div class='LeftSideBar'>

            <div class='topo'>
                <h2>Matrícula: 112254 </h2>
                <h2>Nome: John Wick </h2>
                <h2>Curso: Matrix</h2>
            </div>  

            <div class='centro'>
                <p>Rendimento: 100,0</p>
                <p>Aproveitamento: 100,0</p>
            </div>

            <div class='fim'>
                <a>Boletim</a>
                <a>Histórico</a>
            </div>
        </div>
        
        <h1>Portal do Aluno</h1>    
        <Article />
    </main>
)

export default Main