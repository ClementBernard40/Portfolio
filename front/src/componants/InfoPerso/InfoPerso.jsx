import axios from 'axios';
import React, { useState, useEffect } from 'react';

function InfoPerso() {
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
    <section id="informations" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Mes Informations</h2>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ul className="list-group">
                <li className="list-group-item">Adresse : { infoP ? infoP[0].adress : 'chargement des données ...'}</li>
                <li className="list-group-item">Code postal : { infoP ? infoP[0].pCode : 'chargement des données ...'}</li>
                <li className="list-group-item">Ville : { infoP ? infoP[0].city : 'chargement des données ...'}</li>
                <li className="list-group-item">Email : { infoP ? infoP[0].email : 'chargement des données ...'}</li>
                <li className="list-group-item">Numero de telephone : { infoP ? infoP[0].phoneNumber : 'chargement des données ...'}</li>
                <li className="list-group-item">Mon lien Github : { infoP ? infoP[0].gitLink : 'chargement des données ...'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}

export default InfoPerso;
