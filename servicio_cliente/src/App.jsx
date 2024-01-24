import React, { useState, useEffect  } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [maestros, setMaestros] = useState([]);
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    // Hacer la solicitud al microservicio de alumnos cuando el componente se monta
    axios.get('http://localhost:3001/alumnos')
      .then(response => {
        setAlumnos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de alumnos:', error.message);
      });

    // Hacer la solicitud al microservicio de profesores cuando el componente se monta
    axios.get('http://localhost:3002/profesores')
      .then(response => {
        setMaestros(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de profesores:', error.message);
      });
  }, []);

  return (
    <div className='Contenedor-ME'>
      <div>
      <h1>Maestros</h1>
      <ul>
        {maestros.map((maestro) => (
          <li key={maestro.id}>{maestro.nombre}</li>
        ))}
      </ul>
      </div>
      <div>
      <h1>Alumnos</h1>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.id}>{alumno.nombre}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App
