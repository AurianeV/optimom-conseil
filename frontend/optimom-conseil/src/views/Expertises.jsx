import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Infographie from '../components/Infographie'
import Background from '../components/Background'
import CardExpertise from '../components/CardExpertise'

function Expertises () {
    return (
        <>
            <Navbar/>
            <Background
            backgroundImage="/background_expertises.jpg"
            children="Nos expertises"
            />
            <CardExpertise
            img="/img1_expertise.jpg"
            expertise="Expertise 1"
            text="Texte descriptif"
            textRight={true}
            />
            <CardExpertise
            img="/img2_expertise.jpg"
            expertise="Expertise 2"
            text="Texte descriptif"
            textRight={false}
            />
            <CardExpertise
            img="/img3_expertise.jpg"
            expertise="Expertise 3"
            text="Texte descriptif"
            textRight={true}
            />
            <Infographie/>
            <Footer/>
        </>
    )
}

export default Expertises