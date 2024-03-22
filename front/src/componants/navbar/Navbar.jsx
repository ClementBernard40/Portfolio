import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset >= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${isSticky ? 'sticky-top' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">Clément Bernard</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#projets">Mes Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#competences">Mes Compétences</a> parcourSco
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#parcourSco">Mon parcour scolaire</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#informations">Mes Informations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
