export class Card {
    constructor(id, color, name) {
        this.id = id;
        this.color = color;
        this.name = name;
    }

    createElement() {
        const cardElement = document.createElement('div');
        cardElement.classList.add('carta');
        cardElement.id = this.id;
        cardElement.dataset.color = this.color;
        cardElement.textContent = this.name;
        cardElement.setAttribute('draggable', 'true');
        cardElement.style.backgroundColor = this.color; // Establecer el color de fondo
        return cardElement;
    }
}