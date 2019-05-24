import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super();
    }
    render() {
        
        return (
          <nav>
              <a href="#landing">
                  Home
              </a>
              <a href="#project">
                  Projects
              </a>
              <a href="#skills">
                  Skills
              </a>
              <a href="#contact">
                  Contact
              </a>
          </nav>
        );
      }
    }
    
export default NavBar;