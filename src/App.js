import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
// import Preloader from "./components/Pre";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
            <div className="App" id="scroll">
                
                <Navbar />
                <Home />
                <About />
                <Skills />
                <Resume />
                {/*<Projects />*/}
                <Contact/>
                <Footer />
                <ScrollToTop />
            
            </div>
       
    );
}

export default App;
