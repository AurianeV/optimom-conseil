import { NavLink } from "react-router-dom";
import './NavLinks.scss'


function NavLinks() {

  return (
    <div className="navlinks">
      <ul className="navlinks_items">
        {/* Logo */}
        <div className="navbar_logo">
            <NavLink to="/">
                <img className="navbar_logo" src="/logos/logo-principal-bleu.png" alt="Logo Optimom conseil" />
            </NavLink>
        </div>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <hr className="ligne_navlinks"></hr>
        <li>
          <NavLink to="/equipe">Notre équipe</NavLink>
        </li>
        <hr className="ligne_navlinks"></hr>
        <li>
          <NavLink to="/expertises">Nos expertises</NavLink>
        </li>
        <hr className="ligne_navlinks"></hr>
        <li>
          <NavLink to="/forfaits">Contact</NavLink>
        </li>
        <hr className="ligne_navlinks"></hr>
        <li><a className="li_reservation" href="https://www.optimom-conseil.com/index.php">Espace client</a></li>
        <hr className="ligne_navlinks"></hr>

      </ul>

    </div>
  );
}

export default NavLinks;
