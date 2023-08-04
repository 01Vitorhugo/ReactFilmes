import './header.css'

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='logo' to="/">Flex Flix</Link>
            <Link className='favoritos' to="/favoritos">Meus Salvos</Link>
        </header>
    )
}

export default Header;