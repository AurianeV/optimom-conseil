import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage'
import Equipe from './views/Equipe'
import Expertises from './views/Expertises'
import Contact from './views/Contact'
import MentionsLegalesPage from './views/MentionsLegalesPage'

function App() {

  return (
    
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/equipe" element={<Equipe/>} />
        <Route path="/expertises" element={<Expertises/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage/>} />


      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
