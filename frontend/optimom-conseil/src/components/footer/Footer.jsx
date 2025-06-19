import { NavLink } from 'react-router-dom';
import './Footer.scss'

function Footer () {
    return (
<footer className="footer">
      {/* Version Desktop */}
      
      <div className="footer-desktop">

        <div className="footer-desktop-logo-acces">
          
          <a href="/"><img className="logo_footer_desktop" src="/logos/Symbole-Optimom-bleu.png"/></a>

          <div className="footer-desktop-contact">
            <h3>CONTACT</h3>
            <p>Mail : contact@optimom-conseil.com</p>
            <p><a href="tel:0146228185">Tel : +.33.(0)1.46.22.81.85</a></p>
            <br></br>
          </div>

          <div className="footer-desktop-access">
            <h3>ADRESSES</h3>
            <p>SAS OPTIMOM CONSEIL</p>
            <p>272 rue du Faubourg Saint Honoré, </p>
            <p>75008 Paris</p><br></br>   
          </div>
              
          
                   
        </div>

        <hr width="80%"></hr>

        <div className="footer-lien">
            <div>
              <h3>DOCUMENTATION LÉGALE</h3>
                <p><a href="">Attestation d'adhésion CNCEF Patrimoine 2025</a></p>
                <p><a href="">Attestation d'assurance RCP</a></p>
                <p><a href="">Attestation d'inscription ORIAS</a></p>
            </div>
          <div className="footer-desktop-infos">
             <h3>INFOS LÉGALES</h3>
              <ul>
                <li><a href="/mentions-legales">Mentions légales</a></li>
              </ul>
            </div>
            <div className="footer-desktop-liens-utiles">
              <h3>LIENS UTILES</h3>
              <ul>
                <li>            
                <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                <NavLink to="/expertises">Nos expertises</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact/FAQ</NavLink>
                </li>      
            </ul>
            </div>     

        </div>
        
      </div>

      {/* Version Mobile avec dropdown */}
      <div className="footer-mobile">
        <a href="/"><img className="logo_footer" src="/logos/Symbole-Optimom-bleu.png"/></a>
        <h3>CONTACT</h3>
        <p>Mail : contact@optimom-conseil.com</p>
        <p><a href="tel:0146228185">Tel : +.33.(0)1.46.22.81.85</a></p>
        <br></br>     

        <hr className="trait_footer"></hr>

        <h3>ADRESSES</h3>
        <p>SAS OPTIMOM CONSEIL</p>
        <p>272 rue du Faubourg Saint Honoré,</p>
        <p>75008 Paris</p><br></br>     

        <hr className="trait_footer"></hr>

        <h3>DOCUMENTATION LÉGALE</h3>
        <p><a href="">Attestation d'adhésion CNCEF Patrimoine 2025</a></p>
        <p><a href="">Attestation d'assurance RCP</a></p>
        <p><a href="">Attestation d'inscription ORIAS</a></p>

        <hr className="trait_footer"></hr>

        <details>
          <summary>INFOS LÉGALES</summary>
          <ul>
            <li>
              <NavLink to="/mentions-legales">Mentions légales</NavLink>
            </li>
          </ul>
        </details>
        <hr className="trait_footer"></hr>

        <details>
          <summary>LIENS UTILES</summary>
          <ul>
            <li>            
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
            <NavLink to="/expertises">Nos expertises</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact/FAQ</NavLink>
            </li>      
          </ul>
        </details>
        <hr className="trait_footer"></hr>
           
      </div>
    </footer>    )
}

export default Footer;