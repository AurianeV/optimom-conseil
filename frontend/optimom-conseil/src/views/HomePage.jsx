import Navbar from '../components/header/Navbar'
import KeyFigures from '../components/Key/KeyFigures'
import Footer from '../components/footer/Footer'
import Background from '../components/Background'

function HomePage () {
    return (
        <>
            <Navbar/>
            <Background 
            backgroundImage="/home_back.jpg"
            children="Texte presentation"
            />
            <KeyFigures />
            <Footer />
        </>
    )
}

export default HomePage