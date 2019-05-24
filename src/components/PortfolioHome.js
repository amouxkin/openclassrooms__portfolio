import React, { Component } from 'react';
import TimeLine from './TimeLine';
import Landing from './Landing';
import Footer from './Footer';
import NavBar from './NavBar';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';

class PortfolioHome extends Component {
    render() {
      return (
        <div>
            <Landing/>
            <NavBar/>
            <TimeLine/>
            <Skills/>
            <About/>
            <Contact/>
            <Footer/>    
        </div>
      );
    }
  }
  
  export default PortfolioHome;