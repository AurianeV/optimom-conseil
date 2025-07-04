import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Infographie from '../components/Infographie'
import Background from '../components/Background'
import CardExpertise from '../components/CardExpertise'
import  KeyFigures from '../components/Key/KeyFigures'

function Expertises () {
    return (
        <>
            <Navbar/>
            <Background
            backgroundImage="/background_expertises.jpg"
            children="Nos expertises"
            />
            <h2>Accompagnement et conseil des sociétés ultramarines</h2>
            <CardExpertise
            img="/img1_expertise.png"
            expertise="Détermination du dispositif adapté à leur situation"
            text={
                <>
                  <p>Nous mobilisons l’ensemble des dispositifs existants, notamment :</p>
                  <ul>
                    <li><strong>Crédit d’impôt</strong> (IR ou IS) – Article 244 quater W du CGI</li>
                    <li><strong>Réductions d’impôt</strong> – Articles 199 undecies B du CGI</li>
                  </ul>
                  <p>
                    Nous intervenons dans le montage, la structuration et le suivi de dossiers d’aide fiscale à l’investissement qui nécessitent un <strong>agrément fiscal préalable</strong> délivré par la Direction générale des finances publiques.
                  </p>
                </>
              }
            textRight={true}
            />
            <CardExpertise
            img="/img2_expertise.png"
            expertise="Recherche de financements bancaires"
            text={
                <>
                  <p>Nous prenons en charge la recherche des financements complémentaires à l’aide fiscale, principalement auprès des banques.</p>
                </>
              }
            textRight={false}
            />
            <CardExpertise
            img="/img3_expertise.png"
            expertise="Recherche de subventions"
            text={
                <>
                  <p>Nous prenons en charge la recherche des subventions auxquelles les entreprises qui investissent sont éligibles.
                  </p>
                </>
              }
            textRight={true}
            />
            <h2>Accompagnement et conseil des contribuables qui souscrivent au dispositif</h2>
            <CardExpertise
            img="/img4_expertise.png"
            expertise=""
            text={
                <>
                <p>Le <strong>dispositif Girardin Industriel</strong> (article 199 undecies B du CGI), permet aux contribuables investisseurs de bénéficier d’une <strong>réduction d’impôt l’année suivant leur souscription,</strong> supérieure à celle-ci. Ces fonds, définitivement abandonnés, constituent, pour l’essentiel, l’aide apportée aux entreprises qui investissent.</p><br></br>

                <p>Après analyse de chaque cas, nous recommandons la solution la mieux adaptée. Nous assurons l’accompagnement du souscripteur dans ses relations avec la DGFiP.</p>

                </>
              }
            textRight={false}
            />
            <h2>Schéma type d’une opération</h2>
            <Infographie/>
            <Footer/>
        </>
    )
}

export default Expertises