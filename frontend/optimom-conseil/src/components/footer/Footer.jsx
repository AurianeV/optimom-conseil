import { NavLink } from 'react-router-dom';
import './Footer.scss'

function Footer () {
    return (
      <footer>
            {/* Version Desktop */}
            
            <div className="footer-desktop">
                {/* Colonne 1 : Logo + Docs */}
                <div className="footer-block-top">
                  <div className="footer-top">
                    <img href="/" className="logo_footer_desktop" src="/logos/logo-principal-bleu.png" alt="Logo" />
                  </div>
                  <div className="footer-top">
                    <h3>CONTACT</h3>
                    <ul>
                      <li>contact@optimom-conseil.com</li>
                      <li><a href="tel:0146228185">+33 (0)1 46 22 81 85</a></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="footer-top">
                    <h3>ADRESSE</h3>
                    <ul>
                      <li>SAS OPTIMOM CONSEIL</li>
                      <li>272 rue du Faubourg Saint Honoré</li>
                      <li>75008 Paris</li>
                    </ul>
                  </div>
                </div>

                {/* Colonne 2 : Contact + Mentions */}
                <div className="footer-block-bottom">
                  
                  <div className="footer-bottom">
                    <h3>INFORMATIONS LÉGALES</h3>
                    <ul>
                      <li><a href="/mentions-legales">Mentions légales</a></li>
                    </ul>
                  </div>
                  <div className="footer-bottom">
                    <h3>DOCUMENTATION LÉGALE</h3>
                    <ul>
                      <li><a href="/doc_legales/Attestation-CNCEF-PATRIMOINE-Optimom-2025.pdf" target="_blank" rel="noopener noreferrer">Attestation d'adhésion CNCEF Patrimoine</a></li>
                      <li><a href="/doc_legales/Attestation-MMA-CIF-2025.pdf" target="_blank" rel="noopener noreferrer">Attestation d'assurance RCP</a></li>
                      <li><a href="/doc_legales/Attestation-ORIAS.pdf" target="_blank" rel="noopener noreferrer">Attestation d'inscription ORIAS</a></li>
                      <li><a href="/doc_legales/Attestation-préfecture-2025-2028.pdf" target="_blank" rel="noopener noreferrer">Attestation préfectorale</a></li>
                    </ul>
                  </div>
                  <div className="footer-bottom">
                    <h3>LIENS UTILES</h3>
                    <ul>
                      <li><NavLink to="/">Accueil</NavLink></li>
                      <li><NavLink to="/expertises">Nos expertises</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
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

              <h3>ADRESSE</h3>
              <p>SAS OPTIMOM CONSEIL</p>
              <p>272 rue du Faubourg Saint Honoré,</p>
              <p>75008 Paris</p><br></br>     

              <hr className="trait_footer"></hr>


              <details>
                <summary>DOCUMENTATION LÉGALE</summary>
                  <p><a href="/doc_legales/Attestation-CNCEF-PATRIMOINE-Optimom-2025.pdf" target="_blank" rel="noopener noreferrer">Attestation d'adhésion CNCEF Patrimoine</a></p>
                  <p><a href="/doc_legales/Attestation-MMA-CIF-2025.pdf" target="_blank" rel="noopener noreferrer">Attestation d'assurance RCP</a></p>
                  <p><a href="/doc_legales/Attestation-ORIAS.pdf" target="_blank" rel="noopener noreferrer">Attestation d'inscription ORIAS</a></p>
                  <p><a href="/doc_legales/Attestation-préfecture-2025-2028.pdf" target="_blank" rel="noopener noreferrer">Attestation préfectorale</a></p>

              </details>

              <hr className="trait_footer"></hr>

              <details>
                <summary>INFORMATIONS LÉGALES</summary>
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
                    <NavLink to="/contact">Contact</NavLink>
                  </li>      
                </ul>
              </details>
              <hr className="trait_footer"></hr>
                
            </div>
          </footer>    
    )
}

export default Footer;