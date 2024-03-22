import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './componants/navbar/Navbar';
import Skills from './componants/skills/Skills';
import InfoPerso from './componants/InfoPerso/InfoPerso';
import ParcourSco from './componants/ParcourSco/ParcourSco';
import Project from './componants/project/Project';

function App() {
  

  return (

    <div className="App">
      {/* Navbar */}
      <Navbar />
      <div className='bg-color'>
        {/* Accueil */}
        <section id="accueil" className="py-5 text-center d-flex justify-content-center align-items-center full-height">
          <div>
            <h1>Clément Bernard</h1>
          </div>
        </section>

        {/* Mes Projets */}
        <Project />

        {/* Mes Compétences */}
        <Skills />

        {/* Mon parcours scolaire */}
        <ParcourSco />

        {/* Mes Informations */}
        <InfoPerso />

      
      </div>
        
      {/* Footer */}
      <footer className="bg-dark py-4 text-white text-center">
        <div className="container">
          <p>&copy; 2024 Mon Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
