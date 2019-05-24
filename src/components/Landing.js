import React from 'react';

class Landing extends  React.Component {
render(){
    return(
        <div id="landing">
            <h1>
                "Hi, I'm a web designer &amp; a full stack developer, who likes to create cool web pages."
            </h1>
            <h2>
                Check out my works <br/>
              <a href="#project">  <i  className="material-icons">keyboard_arrow_down</i> </a>
            </h2>
        </div>
        );
    }   
}

export default Landing;