import { Link } from "react-router-dom";

export default function Apresentacao(){

    return(
        <>
        <h1>Apresentacao do PI</h1>
        <p>O nosso projeto de biblioteca virtual, visa criar 
            uma plataforma de leitura digital acessível a todos, com 
            diversidade de gêneros literários, facilidade de navegação, 
            interatividade, acesso móvel e conteúdo multimídia.</p>
            <hr />
            <Link to='/'>Formulario</Link>
            <br />
            <Link to='/sobre'>Sobre</Link>
            <br />
            <Link to='/tarefas'>Tarefas</Link>
        </>

    )
}