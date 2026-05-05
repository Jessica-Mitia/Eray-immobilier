import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/HomeSections/Services';
import Properties from './components/HomeSections/Properties';
import Footer from './components/HomeSections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Properties />
      <Footer />
    </div>
  );
}

export default App;