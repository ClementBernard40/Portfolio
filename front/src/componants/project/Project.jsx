import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/projects')
      .then(response => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <section id="projets" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Mes Projets</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.url} className="btn btn-primary">Voir Projet</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
