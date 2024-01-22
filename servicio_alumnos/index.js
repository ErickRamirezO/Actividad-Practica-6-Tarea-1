const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3001;

app.use(cors()); // Habilita CORS

const alumnos = [
  { id: 1, nombre: 'Esteban Montalvo' },
  { id: 2, nombre: 'Marco Herrera' },
  // ... otros alumnos
];

app.get('/alumnos', (req, res) => {
  res.json(alumnos);
});

app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
