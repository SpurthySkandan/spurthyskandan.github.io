import React from 'react';

const Header = ({ theme, toggleTheme, isNavOpen, toggleNav }) => {
  return (
    <header className="header center">
      <h3>
        <a href="/" className="link">Spurthy Skandan</a>
      </h3>

      <nav className="nav center">
        <ul className={`nav__list center ${isNavOpen ? 'display-nav-list' : ''}`}>
          <li className="nav__list-item">
            <a className="link link--nav" href="#education">Education</a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#workex">Work Experience</a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#projects">Projects</a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#publications">Publications</a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#skills">Skills</a>
          </li>
          <li className="nav__list-item">
            <a className="link link--nav" href="#contact">Contact</a>
          </li>
        </ul>

        <button 
          type="button" 
          aria-label="toggle theme" 
          className="btn btn--icon"
          onClick={toggleTheme}
        >
          <i aria-hidden="true" className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>

        <button
          type="button"
          aria-label="toggle navigation"
          className="btn btn--icon nav__hamburger"
          onClick={toggleNav}
        >
          <i aria-hidden="true" className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
