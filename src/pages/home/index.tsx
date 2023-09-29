import './home.css'
import ButtonFatec from '../../components/ButtonFatec'
import InputFatec from '../../components/InputFatec'
import { Link } from 'react-router-dom'
export default function Home() {
  //const [count, setCount] = useState(0)

  return (
<>
<h1>Formulario</h1>
<InputFatec value='' type='text' placeholder='Nome' />
<br></br>
<InputFatec value='' type='email' placeholder='E-Mail' />
<br></br>
<InputFatec value='' type='tel' placeholder='Telefone' />
<br></br>
<ButtonFatec type='submit' label='Enviar Form' />
<hr />
<Link to='/sobre'>Sobre</Link>
<br />
<Link to='/apresentacao'>Apresentação do PI</Link>
<br />
<Link to='/tarefas'>Tarefas</Link>
</>
  )
}


