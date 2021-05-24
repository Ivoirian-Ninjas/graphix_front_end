


import './App.css';

import Home from './views/home'
import About from './views/about'
import Contact from './views/contact'
import Service from './views/service'
import './framework/fontawesome-free-5.11.2-web/css/all.css'


import MessengerCustomerChat from 'react-messenger-customer-chat';

import Navbar from './components/navbar'
import Footer from './components/footer'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

require('dotenv').config()


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

    {/* The messenger chat will not be available on the local machine, Facebook needs to see an https signature. */}
    {/* No design or css is required for this chat bot */}
        <MessengerCustomerChat
        className={`messangerButton`}
        pageId="108891984701971"
        appId="294978968832597"
      />

    <Footer />
  </Router>
  );
}

export default App;
