import { Link } from "react-router-dom";

export default function Tarefas(){
    return(
        <>
        <h1>Tarefas para fazer</h1>
        <ul>
            <li>Tarefa 1</li>
            <li>Tarefa 2</li>
            <li>Tarefa 3</li>
            <li>Tarefa 4</li>
        </ul>
        <hr />
            <Link to='/'>Formulario</Link>
            <br />
            <Link to='/sobre'>Sobre</Link>
            <br />
            <Link to='/apresentacao'>Apresentação do PI</Link>
        </>
    )
}