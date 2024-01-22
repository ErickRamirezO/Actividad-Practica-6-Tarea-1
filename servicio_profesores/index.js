const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002;

app.use(cors()); // Habilita CORS

const profesores = [
  { id: 1, nombre: 'Ing. Alexis' },
  { id: 2, nombre: 'Lic. Margarita' },
  // ... otros alumnos
];

app.get('/profesores', (req, res) => {
  res.json(profesores);
});

app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
