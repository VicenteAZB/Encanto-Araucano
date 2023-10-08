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

    const reviewList = document.getElementById('reviewsList');
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="review">
            <div class="review-close" onclick="confirmDelete(this)">×</div>
            <div class="review-user">${name}</div>
            <div class="review-text">${review}</div>
        </div>`;

    
    reviewList.appendChild(li);

   
    document.getElementById('reviewForm').reset();
}

function confirmDelete(deleteButton) {
    if (confirm('¿Desea eliminar este comentario?')) {
        const review = deleteButton.parentElement;
        review.remove();
    }
}


const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addReview();
});






