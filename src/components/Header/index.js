//import styles from './Header.module.css';

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"


const Header = () =>{
    return (
        <header className="bg-blue-900 text-white flex flex-row justify-between ">
          <img className="h-20 w-20 rounded-3xl m-1  " src={logo} alt="Logo" />
          <nav className="flex gap-4 items-center px-3 py-2">
           <Link to="/inicio" >Inicio</Link>
           <Link to="/personajes" >Personajes</Link>
           <Link to="/historia" >Segunda Temporada</Link>
          </nav>
        </header>
      );
}

export default Header;