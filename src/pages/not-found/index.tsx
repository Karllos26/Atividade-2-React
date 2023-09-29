import { Link } from "react-router-dom";

export default function NotFound(){
    return(
<>
<h1>Pagina não encontrada</h1>
<p>A URL digitada nao foi encontrada</p>
<hr />
<Link to='/'>Voltar para a home</Link>
</>

    )
}