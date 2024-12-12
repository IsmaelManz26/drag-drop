import { Card } from './card.js';

export class Deck {
    constructor() {
        this.suits = ['oros', 'copas', 'espadas', 'bastos'];
        this.colors = ['yellow', 'red', 'blue', 'green'];
        this.cards = [];
        this.containers = [];
    }

    initialize(cartas = []) {
        this.suits.forEach((suit, index) => {
            const container = document.createElement('div');
            container.classList.add('contenedor');
            container.dataset.color = this.colors[index];
            container.id = suit;

            for (let i = 1; i <= 4; i++) {
                const cardData = cartas.find(c => c.id === `${suit}${i}`) || {};
                const card = new Card(`${suit}${i}`, this.colors[index], `${suit.charAt(0).toUpperCase() + suit.slice(1)} ${i}`);
                this.cards.push(card);
                container.appendChild(card.createElement());
            }

            this.containers.push(container);
        });
    }

    render(parentElement) {
        this.containers.forEach(container => {
            parentElement.appendChild(container);
        });
    }
}