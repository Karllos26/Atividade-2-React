import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <>
        <h1>
            Sobre
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            At nemo, illum iusto aliquam eaque, quisquam, exercitationem
         est consectetur praesentium quasi corrupti voluptatem doloribus
          incidunt eligendi expedita beatae odit laboriosam? Aperiam.
        </p>
        <hr />
        <Link to='/'>Formulario</Link>
        <br />
        <Link to='/apresentacao'>Apresentação do PI</Link>
        <br />
        <Link to='/tarefas'>Tarefas</Link>
        </>
    )
}