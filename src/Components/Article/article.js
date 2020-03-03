import React from 'react'
import './article.css'

function esconder(){
    document.querySelector(".instrucoes").classList.toggle("hide");
}

const Article = () =>(
    <article>
        <div className='conteudo'>
            <h3>Instruções de Matrícula</h3>

            <div class='instrucoes hide'>
                <ol>
                    <li>Clique no botão avaliar e faça a avaliação institucional das disciplinas que cursou no semestre passado</li>
                    <li>Clique em "Solicitação de Disciplinas" e monte o horário que considera ideal para você. Fique atento às mensagens que o sistema mostra a cada escolha de disciplina</li>
                    <li>Ao finalizar a escolha clique no botão finalizar solicitação. Só assim a sua escolha será registrada.</li>
                    <li>Clique no botão Lista de Prioridades e monte uma lista de prioridade das disciplinas disponíveis para você. O menor número significa maior prioridade.</li>
                    <li>o dia indicado pelo Calendário Acadêmico do Campus será divulgado o resultado da alocação das disciplinas solicitadas.</li>
                </ol>
            </div>
            
            <button onClick={esconder} className='btn'>Ver Instruções</button>

            <div class='pae'>
                <h3>Programa de Assistência e Apoio Estudantil</h3>
                <p class='texto'>O IFBA possui uma política de assistência estudantil com o objetivo de contribuir com sua permanência na Instituição. O programa de Assistência e apoio aos estudantes PAAE disponibiliza bolsas e auxílios aos estudantes que mais precisam.</p>
                <p class='clique'><a href='https://pae.ifba.edu.br/' target='blank'> Clique e inscreva-se!</a></p>
            </div>
            
        </div>
    </article>
)

export default Article;