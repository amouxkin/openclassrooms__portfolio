import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div id="contact">
            <h2>Get in touch</h2>
            <div className="contact__socialmedia">
            <div>
                <a href="https://www.linkedin.com/in/amouxkin/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div>
                <a href="mailto:amouxkin@gmail.com?Subject=Let's%20Work%20together:" target="_top">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
            </div>
            </div>

        );
    }

}

export default Contact;