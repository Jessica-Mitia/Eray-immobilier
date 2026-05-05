import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/HomeSections/Services';
import Properties from './components/HomeSections/Properties';
import Produits from './components/Produits';
import Footer from './components/HomeSections/Footer';

function Accueil() {
  return (
    <>
      <Hero />
      <Services />
      <Properties />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/products" element={<Produits />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;