import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
