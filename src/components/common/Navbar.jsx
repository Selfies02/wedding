import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand brand" href="#home">Sara & Daniel</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`} href="#about">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'photos' ? 'active-link' : ''}`} href="#photos">
                Photos
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'wedding' ? 'active-link' : ''}`} href="#wedding">
                Wedding Party
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'housing' ? 'active-link' : ''}`} href="#housing">
                Housing
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'rsvp' ? 'active-link' : ''}`} href="#rsvp">
                RSVP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;