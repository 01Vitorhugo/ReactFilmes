import './header.css'
import './headerRes.css'

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='logo' to="/"><img src={require('../../imgs/flexpng.png')} alt="" />  </Link>
            <Link className='favoritos' to="/favoritos">Meus Salvos</Link>
        </header>
        
    )
}

export default Header;