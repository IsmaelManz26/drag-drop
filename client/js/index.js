import { Deck } from './deck.js';
import { uiDrag } from './uiDrag.js';

document.addEventListener('DOMContentLoaded', async () => {
    const deck = new Deck();

    // Recuperar el estado actual desde la API REST
    const response = await fetch('http://localhost:3000/api/cartas');
    const cartas = await response.json();

    // Inicializar el mazo con las cartas recuperadas
    deck.initialize(cartas);
    deck.render(document.querySelector('.contenedor-cards'));

    uiDrag.init('.contenedor', '.carta');
});