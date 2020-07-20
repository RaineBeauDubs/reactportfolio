import React from 'react';
import './componentCSS/projects.css';
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
} from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
  return (
    <div className="proCont">
      <div className="proBox">
        <a href="https://github.com/RaineBeauDubs/ShoppeSite">
          <img
            className="proImg"
            src="/images/RDRSiteImg.png"
            alt="Rainy Day Resale's official site, Consignor Info"
          />
        </a>
        <div className="proInfo">
          <h3 className="proTitle">Rainy Day Resale</h3>
          <ul className="proDesc">
            <li>Commissioned official website for a local consignment shop, worked closely with owner to meet stylistic and functional requests</li>
            <li>Collaborated with other local shops to create community page</li>
            <li>Solely responsible for every aspect of web application functionality and style</li>
          </ul>
          <p className="created">Created with:</p>
          <div className="creFlex">
            <div className="creFlexLeft">
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faHtml5} />
                <p>HTML5</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faCss3} />
                <p>CSS3</p>
              </div>
            </div>
            <div className="creFlexRight">
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faJs} />
                <p>JavaScript</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faReact} />
                <p>React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="proBox">
        <a href="https://github.com/labs14-tacos/tacos-frontend">
          <img
            className="proImg"
            src="/images/LGTSiteImg.png"
            alt="The 'Let's Get Tacos!' sun"
          />
        </a>
        <div className="proInfo">
          <h3 className="proTitle">Let's Get Tacos!</h3>
          <ul className="proDesc">
            <li>Collaborated remotely with a team of 3 web developers over an 8-week sprint to build a fully functional web application that met the demands of a stakeholder</li>
            <li>Contributed heavily towards front-end, back-end, and design aspects of project</li>
            <li>Implemented Google Firebase into both the front- and back-end for seamless authentication, along with another developer</li>
            <li>Solely responsible for design on all logging/viewing/detail pages</li>
          </ul>
          <p className="created">Created with:</p>
          <div className="creFlex">
            <div className="creFlexLeft">
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
                <p>JavaScript</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faReact} />
                <p>React</p>
              </div>
            </div>
            <div className="creFlexRight">
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
                <p>Node.js</p>
              </div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="proBox">
        <a href="https://github.com/TacoBandits">
          <img
            className="proImg"
            src="/images/MTCSiteImg.png"
            alt="TacoCat Escape! log-in page"
          />
        </a>
        <div className="proInfo">
          <h3 className="proTitle">TacoCat Escape!</h3>
          <ul className="proDesc">
            <li>Collaborated remotely with a team of 4 web developers over a 4-day period to build a full-stack web application</li>
            <li>Contributed heavily towards front-end, back-end, and design aspects of project using React, Python/Django, and CSS</li>
            <li>Solely responsible for final design implementation</li>
          </ul>
          <p className="created">Created with:</p>
          <div className="creFlex">
            <div className="creFlexLeft">
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
                <p>JavaScript</p>
              </div>
              <div className="skillSec">
                <FontAwesomeIcon className="icon" icon={faReact} />
                <p>React</p>
              </div>
            </div>
            <div className="creFlexRight">
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
                <FontAwesomeIcon className="icon" icon={faPython} />
                <p>Django</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;