import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      // const navLinks = document.querySelectorAll('.nav-link');

      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);

      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.padding = '';
        header.style.boxShadow = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <header>
      <div className="container header-container">
        <a href="/" className="logo" onClick={handleHomeClick}>
          <img src="./images/logo/2x/SignColor@2x.png" alt="PTAH LABS" className="logo-image" />
          PTAHLABS
        </a>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className={`nav-link ${activeSection === '' ? 'active' : ''}`} onClick={handleHomeClick}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={(e) => handleSectionClick(e, 'portfolio')}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#ci" className={`nav-link ${activeSection === 'ci' ? 'active' : ''}`} onClick={(e) => handleSectionClick(e, 'ci')}>CI</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleSectionClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;