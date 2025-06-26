import './Navbar.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import NavLinks from '../header/NavLinks'


function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState (false)

    function OpenMenu () {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>

            {/* Version Mobile avec dropdown */}
            <nav className="navbar-mobile">
                <div className="navbar-container">
                    
                    {/* Logo */}
                    <div className="navbar_logo">
                        <NavLink to="/">
                        <img className="navbar_logo" src="/logos/logo-principal-bleu.png" alt="Logo Optimom conseil" />
                        </NavLink>
                    </div>

                    <button className={`navbar_burger-icon ${isMenuOpen ? "active" : ""}`} onClick={OpenMenu}>
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </button>

                    {isMenuOpen ? <NavLinks /> : null}
                
                </div>
                
            </nav>

            {/* Version Desktop */}
            <nav className="navbar-desktop">   
                 {/* Logo */}
                 <div className="navbar_logo-desktop">
                    <NavLink to="/">
                        <img className="logo-desktop" src="/logos/logo-principal-bleu.png" alt="Logo Optimom conseil" />
                    </NavLink>
                </div>

                <div className="navbar-container">
                    <div className="navbar-desktop-navlinks">
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/">Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink to="/equipe">Notre équipe</NavLink>
                            </li>
                            <li>
                                <NavLink to="/expertises">Nos expertises</NavLink>
                            </li>
                            <li >
                            <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li className="navbar_clientEspace">
                                <a href="https://www.optimom-conseil.com/index.php"> <button className="client">Espace client</button></a>
                            </li>
                        </ul>
                        
                    </div>
       
                </div>
            </nav>

        </header>
    )
}

export default Navbar