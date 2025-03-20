import './App.css';
import Header from './component/Header';
import './css/Header.css';
import Nav from './component/Nav';
import Main from './component/Main';
import './css/Main.css';
import About from './component/About';
import './css/About.css';
import Skills from './component/Skills';
import './css/Skills.css';
import Work from './component/Work';
import Contact from './component/Contact';
import Footer from './component/Footer';

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
    </div>
  );
}

export default App;
