import './App.css';
import Info from './Component/Info/Info';
import Navbar from './Component/Navbar/Navbar';
import Social from './Component/Social/Social';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Social/>
      <Navbar/>
      <Info/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
