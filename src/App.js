import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
        </Route>
        <Route path="/about" exact>
          <NavBar />
          <About />
        </Route>
        <Route path="/experience" exact>
          <NavBar />
          <Experience />
        </Route>
        <Route path="/education" exact>
          <NavBar />
          <Education />
        </Route>
        <Route path="/contact" exact>
          <NavBar />
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
