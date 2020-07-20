import React from 'react';
import './componentCSS/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLinkedin, 
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faAt,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
      <h3 className="contactTitle">Get In Touch!</h3>
      <div className="flexSec">
        {/* <form className="box">
          <div className="boxTop">
            <input
              type="text"
              placeholder="Name"
            />
            <input
              type="text"
              placeholder="Email"
            />
          </div> 
          <textarea
            className="boxBttm"
            type="textarea"
            placeholder="Message..."
          />
          <div className="boxBttns">
            <button>Send</button>
            <button>Clear</button>
          </div>
        </form> */}
        <div className="contactLinkSec">
          <div className="contactLink">
            <FontAwesomeIcon className="icon" icon={faAt} />
            <a href="#">RaineBeauDubs@gmail.com</a>
          </div>
          <div className="contactLink">
          <FontAwesomeIcon className="icon" icon={faGithub} />
            <a href="https://github.com/RaineBeauDubs">RaineBeauDubs</a>
          </div>
          <div className="contactLink">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/raine-wallace/">/Raine-Wallace</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;