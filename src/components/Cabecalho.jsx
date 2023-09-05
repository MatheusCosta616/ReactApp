import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <>
        <header>
          <h1>Vite + React</h1>

          {/* Crie uma lista com 5 links para as nossas rotas:
          Obs: Utilize o componente Link do router-dom */}

          <nav>
            <ul>
              <li><Link to="/">HOME</Link> </li>
            </ul>
          </nav>

        </header> 
    </>
  )
}
