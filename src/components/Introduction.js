import React from 'react';
import './componentCSS/introduction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import {
  faDatabase,
  faPeopleCarry,
  faBullhorn,
  faPeopleArrows,
  faGrinBeam,
  faUsers,
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';

const Introduction = () => {
  return (
    <div>
      <p className="introP">Hello there! My name is Raine Wallace. I am a creative, curious, and communicative full-stack web developer who is super excited to join your team! <br /> <br />Before focusing on  tech, I worked in retail management for years. The communication, customer service, and management skills I have picked up in that field translate even better than I ever thought they would into web development. Though I love a great team that works as a well-oiled machine, I will find my flow wherever I am needed, whether it's on a team, head of a team, a solo project, or even a client-facing position!</p>
      <div className="flex">
        <div className="skillSecSec">
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            <p>HTML5</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faCss3} />
            <p>CSS3</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faJs} />
            <p>JavaScript ES6</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faReact} />
            <p>React</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faNodeJs} />
            <p>Node.js</p>
          </div>
        </div>
        <div className="skillSecSec">
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faNodeJs} />
            <p>Express</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faDatabase} />
            <p>SQL</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faDatabase} />
            <p>PostgreSQL</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faPython} />
            <p>Python</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faPeopleCarry} />
            <p>Teamwork</p>
          </div>
        </div>
        <div className="skillSecSec">
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faPeopleArrows} />
            <p>Communication</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faGrinBeam} />
            <p>Customer Service</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faUsers} />
            <p>Management</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faChalkboardTeacher} />
            <p>Remote Management</p>
          </div>
          <div className="skillSec">
            <FontAwesomeIcon className="icon" icon={faBullhorn} />
            <p>Public Speaking</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;