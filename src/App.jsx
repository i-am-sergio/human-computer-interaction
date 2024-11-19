// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Works from "./components/Works";
// import Experience from "./components/Experience";
// import WrappedSlides from "./components/Carousel";
// import { useEffect, useState } from "react";

// const App = () => {
//   const [circles, setCircles] = useState([]);

//   useEffect(() => {
//     // Generar 30 círculos con posición y duración aleatoria
//     const generatedCircles = Array.from({ length: 30 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100 + "vw", // posición horizontal aleatoria
//       animationDuration: 4 + Math.random() * 4 + "s", // duración aleatoria entre 4 y 8 segundos
//       delay: Math.random() * 5 + "s", // retraso aleatorio entre 0 y 5 segundos
//     }));
//     setCircles(generatedCircles);
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative overflow-hidden">
//           {/* Círculos animados */}
//           {circles.map((circle) => (
//             <div
//               key={circle.id}
//               className="circle"
//               style={{
//                 left: circle.left,
//                 animationDuration: circle.animationDuration,
//                 animationDelay: circle.delay,
//               }}
//             ></div>
//           ))}
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Works />
//         <Experience />
//         <WrappedSlides />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import { useEffect, useState } from "react";
import Home from './components/Home';
import './App.css';

const App = () => {

  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Generar 30 círculos con posición y duración aleatoria
    const generatedCircles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw", // posición horizontal aleatoria
      animationDuration: 12 + Math.random() * 4 + "s", // duración aleatoria entre 4 y 8 segundos
      delay: Math.random() * 5 + "s", // retraso aleatorio entre 0 y 5 segundos
    }));
    setCircles(generatedCircles);
  }, []);

  return (
    <div className="App">
      {/* Círculos animados */}
          {circles.map((circle) => (
            <div
              key={circle.id}
              className="circle"
              style={{
                left: circle.left,
                animationDuration: circle.animationDuration,
                animationDelay: circle.delay,
              }}
            ></div>
          ))}
      <Home />
    </div>
  );
}

export default App;
