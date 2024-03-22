import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './componants/navbar/Navbar';
import Skills from './componants/skills/Skills';

function App() {
  const [infoP, setInfoP] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/contact')
      .then(response => {
        setInfoP(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error.message));
  }, []);


  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Accueil */}
      <section id="accueil" className="py-5 text-center d-flex justify-content-center align-items-center full-height">
        <div>
          <h1>Clément Bernard</h1>
        </div>
      </section>

      {/* Mes Projets */}
      <section id="projets" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Mes Projets</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Nom du Projet</h5>
                  <p className="card-text">Description du Projet</p>
                  <a href="#" className="btn btn-primary">Voir Projet</a>
                </div>
              </div>
            </div>
            {/* Ajoutez ici d'autres projets de la même manière */}
          </div>
        </div>
      </section>

      {/* Mes Compétences */}
      <Skills />

      {/* Mes Informations */}
      
      <section id="informations" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Mes Informations</h2>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ul className="list-group">
                <li className="list-group-item">Nom: Prénom Nom</li>
                <li className="list-group-item">adresse : { infoP ? infoP[0].adress : 'chargement des données ...'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
