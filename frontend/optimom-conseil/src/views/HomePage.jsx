import Navbar from '../components/header/Navbar'
import KeyFigures from '../components/Key/KeyFigures'
import Footer from '../components/footer/Footer'
import Background from '../components/Background'

function HomePage () {
    return (
        <>
            <Navbar/>
            <Background 
            backgroundImage="/background_accueil.png"
            children="Aide fiscale aux investissements outre-mer"
            />
            <section className="presentation_company">
                <p><strong>OPTIMOM CONSEIL</strong> est une société spécialisée dans le financement d’investissements réalisés par des sociétés ultramarines dans le cadre du dispositif d’aide fiscale « Girardin ».<br></br><br></br>
                Ses associés exercent des activités opérationnelles dans ce domaine depuis le démarrage du dispositif.<br></br><br></br>
                <strong>OPTIMOM CONSEIL</strong> se concentre sur les des projets nécessitant la délivrance d’agréments fiscaux préalables délivrés par la Direction générale des finances publiques (DGFIP). 
                Tout en assurant le montage, la mise en place et le suivi des investissements, <strong>OPTIMOM CONSEIL</strong> intervient principalement dans les Départements d’Outre-Mer.
                </p>
            </section>
            <KeyFigures />
            <Footer />
        </>
    )
}

export default HomePage