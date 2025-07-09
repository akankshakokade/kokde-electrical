// import React from 'react'
// import ReactDOM from 'react-dom'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom'

// import './style.css'
// import Home from './views/home'
// import NotFound from './views/not-found'
// import Services from './components/Services'

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route component={Home} exact path="/" />
//         <Route component={Services} exact path="/services" />
//         <Route component={NotFound} path="**" />
//         <Redirect to="**" />
//       </Switch>
//     </Router>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('app'))


import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import NotFound from "./views/not-found";
import Services from "./components/Services";
import AboutUs from "./components/AboutUS";
import Navbar8 from "./components/navbar8";
import Footer4 from "./components/footer4";
import ContactUs from "./components/ContactUs";
import GetStarted from "./components/GetStarted";
const App = () => {
  return (
    <Router>
      <Navbar8 />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/get-started" component={GetStarted} />
        <Route path="*" component={NotFound} />
        <Redirect to="*" />
      </Switch>
      <Footer4 />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
