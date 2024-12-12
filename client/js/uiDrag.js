export const uiDrag = {
    init: (containerSelector, cardSelector) => {
        document.querySelectorAll(containerSelector).forEach((container) => {
            container.addEventListener('drop', async (event) => {
                event.preventDefault();
                const data = JSON.parse(event.dataTransfer.getData('text'));
                const draggedElement = document.getElementById(data.id);

                if (event.target.dataset.color !== draggedElement.dataset.color) {
                    return;
                }

                draggedElement.style.position = 'absolute';
                draggedElement.style.left = event.offsetX - (draggedElement.offsetWidth / 2) + 'px';
                draggedElement.style.top = event.offsetY - (draggedElement.offsetHeight / 2) + 'px';
                draggedElement.style.backgroundColor = draggedElement.dataset.color;

                if (!event.target.contains(draggedElement)) {
                    event.target.appendChild(draggedElement);
                }

                // Actualizar el estado en la API REST
                await fetch('http://localhost:3000/api/cartas', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: draggedElement.id,
                        color: draggedElement.dataset.color,
                        name: draggedElement.textContent
                    })
                });
            });

            container.addEventListener('dragover', (event) => {
                event.preventDefault();
            });
        });

        document.querySelectorAll(cardSelector).forEach((card) => {
            card.addEventListener('dragstart', (event) => {
                const sendData = {
                    id: event.target.id,
                    color: event.target.dataset.color
                };
                event.dataTransfer.setData('text', JSON.stringify(sendData));
            });
        });
    }
};