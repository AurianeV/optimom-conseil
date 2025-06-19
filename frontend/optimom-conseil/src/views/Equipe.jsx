import Navbar from '../components/header/Navbar'
import Background from '../components/Background'
import Footer from '../components/footer/Footer'
import CardTeam from '../components/Team/CardTeam'
import Team from '../components/Team/Team'

function Equipe () {
    return (
        <>
            <Navbar/>
            <Background 
            backgroundImage="/home_back.jpg"
            children="Texte presentation"
            />
            <Team/>
            <Footer />
        </>
    )
}

export default Equipe