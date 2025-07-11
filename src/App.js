import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap'; 

// Pages
import Home from './pages/Home';

// Components
import AppNavBar from './components/AppNavBar';
import HeroSection from './components/HeroSection';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <AppNavBar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/#tools" element={<Tools/>} />
            <Route path="/#footer" element={<Footer/>}/> 
          </Routes>
        </Container>
    </Router>
    </>
    )
}

export default App;
