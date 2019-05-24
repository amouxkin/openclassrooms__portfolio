import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div id="about">
                <h2>About Me</h2>
                <img className="about__image" alt='' src={require('../image/AboutMe.jpg')}/>
                <p>
                    I'm an expressive individual who is always looking for new domains to explore. A mind that loves to wander has broadened
                    my fields of interest which includes the desire to understand the workings of the universe, the mind and everything in between.
                    <br/>Oh ! And I like to code.
                </p>
            </div>
        );
    }
}
export default About;