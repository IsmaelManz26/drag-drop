import express from 'express';
import cors from 'cors';

// Crear la aplicación de Express
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(cors());
app.use(express.json());

const datos = {
    cartas: []
}

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la REST API con Node.js y import!');
});

app.get('/api/cartas', (req, res) => {    
    res.json(datos.cartas);
});

app.post('/api/cartas', (req, res) => {
    const newCard = req.body;
    console.log(`Llega ${newCard.name}`);
    newCard.id = Date.now();
    datos.cartas.push(newCard);
    res.status(201).json(newCard);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});