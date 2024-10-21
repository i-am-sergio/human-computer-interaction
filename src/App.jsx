import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Works from "./components/Works";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Feedbacks /> */}
        {/* <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
