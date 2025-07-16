import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Shortener from "./Components/Shortener";
import Stats from "./Components/Stats"; 
import Boost from "./Components/Boost";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Shortener />
      <Stats />
      <Boost />
      <Footer />

    </>
  );
}

export default App;
