import './App.css';
import Header from './component/Header';
import './css/Header.css';
import './css/MQ.css';
import Nav from './component/Nav';
import './css/Nav.css';
import Main from './component/Main';
import './css/Main.css';
import About from './component/About';
import './css/About.css';
import Skills from './component/Skills';
import './css/Skills.css';
import Work from './component/Work';
import './css/Work.css';
import Contact from './component/Contact';
import './css/Contact.css';
import Footer from './component/Footer';
import './css/Footer.css';

function App() {
  return (
    <div className="App">      
      <Header/>      
      <Main/>
      <Nav/>
      <About/>
      <Skills/>      
      <Work/>      
      <Contact/>
      <Footer/>      
    </div>
  );
}

export default App;
