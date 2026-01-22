import "./App.css";
import Header from "./component/Header";
import "./css/Header.css";
import "./css/MQ.css";
import Nav from "./component/Nav";
import "./css/Nav.css";
import Main from "./component/Main";
import "./css/Main.css";
import About from "./component/About";
import "./css/About.css";
import Skills from "./component/Skills";
import "./css/Skills.css";
import WorkSlider from "./component/WorkSlider";
import workWebData from "./data/workWebData.js";
import workDesignData from "./data/workDesignData.js";
import workEtcData from "./data/workEtcData.js";
import Contact from "./component/Contact";
import "./css/Contact.css";
import Footer from "./component/Footer";
import "./css/Footer.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Nav />
      <About />
      <Skills />
      <h2>Work | Web</h2>
      <WorkSlider title="WEB PUBLISHING" data={workWebData} />
      <h2>Work | Design</h2>
      <WorkSlider title="DESIGN" data={workDesignData} />
      <h2>Work | Etc</h2>
      <WorkSlider title="ETC" data={workEtcData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
