import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Skills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/stack')
      .then(response => {
        setSkills(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <section id="competences" className="py-5 ">
      <div className="container">
        <h2 className="text-center mb-5">Mes Compétences</h2>
        <div className="row">
          {skills && skills.map((skill, index) => (
            <div className="col-md-3 text-center mb-4" key={index}>
              <img src={`${process.env.PUBLIC_URL}/imgstack/${skill.imglink}`} alt={skill.name} className="img-fluid mb-3" />
              <h4>{skill.name}</h4>
              {console.log(skill.imglink)}
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
