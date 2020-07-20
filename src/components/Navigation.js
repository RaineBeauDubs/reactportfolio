import React from 'react';
import { NavLink } from 'react-router-dom';
import './componentCSS/navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink activeClassName="activeNavLink" className="navLink" to="/" exact>
        <h3>Home</h3>
      </NavLink>
      <NavLink activeClassName="activeNavLink" className="navLink" to="/intro">
        <h3>Introduction</h3>
      </NavLink>
      <NavLink activeClassName="activeNavLink" className="navLink" to="/experience">
        <h3>Experience</h3>
      </NavLink>
      <NavLink activeClassName="activeNavLink" className="navLink" to="/projects">
        <h3>Projects</h3>
      </NavLink>
      <NavLink activeClassName="activeNavLink" className="navLink" to="/contact">
        <h3>Contact</h3>
      </NavLink>
    </div>
  )
}

export default Navigation;