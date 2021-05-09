
import './App.css';

import Home from './views/home'
import About from './views/about'
import Contact from './views/contact'
import Service from './views/service'

import Navbar from './components/navbar'
import Footer from './components/footer'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

     <Navbar />

    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/service">
        <Service />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>

    <Footer />
  </Router>
  );
}

export default App;
