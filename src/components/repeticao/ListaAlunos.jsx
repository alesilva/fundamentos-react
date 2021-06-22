import React from 'react'
import '../../data/alunos'
import alunos from '../../data/alunos'

export default props => {

    const alunosLI = alunos.map(aluno => {
        return(
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -&gt; {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: "none"}}>{alunosLI}</ul>
        </div>
    )
}