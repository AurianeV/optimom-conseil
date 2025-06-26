import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import ContactForm from '../components/ContactForm'
import Background from '../components/Background'

function Contact () {
    return (
        <>
            <Navbar/>
            <Background
            backgroundImage="/background_expertises.jpg"
            children="Contactez-nous"
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact