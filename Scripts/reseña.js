function addReview() {
    const nameInput = document.getElementById('name');
    const reviewInput = document.getElementById('review');

    const name = nameInput.value;
    const review = reviewInput.value;

    if (!name || !review) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const namePattern = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
    if (!namePattern.test(name)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios, entre 2 y 50 caracteres).');
        return;
    }
}

const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', addReview);
