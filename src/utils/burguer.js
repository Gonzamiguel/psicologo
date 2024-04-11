function toggleMenu() {
    // Selecciona el elemento <ul> en el DOM
    let list = document.querySelector('ul');

    // Toggle de la clase 'top-[80px]': si la tiene, la quita; si no la tiene, la añade.
    list.classList.toggle('top-[80px]');

    // Toggle de la clase 'opacity-100': si la tiene, la quita; si no la tiene, la añade.
    list.classList.toggle('opacity-100');
}


function closeMenu() {
    // Selecciona el elemento <ul> en el DOM
    let list = document.querySelector('ul');

    // Quita las clases que hacen visible el menú
    list.classList.remove('top-[80px]');
    list.classList.remove('opacity-100');
}


document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos con la clase 'question'
    var questions = document.querySelectorAll('.question');

    // Agrega un controlador de eventos a cada pregunta
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            // Encuentra el elemento 'answer' asociado con la pregunta
            var answer = this.nextElementSibling;

            // Verifica si la respuesta está abierta o cerrada
            if (answer.style.display === 'none') {
                // Cierra todas las respuestas abiertas
                var openAnswers = document.querySelectorAll('.answer[style="display: block;"]');
                openAnswers.forEach(function (openAnswer) {
                    openAnswer.style.display = 'none';
                });

                // Abre la respuesta asociada a la pregunta clickeada
                answer.style.display = 'block';
            } else {
                // Cierra la respuesta asociada a la pregunta clickeada
                answer.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a:not([href="./src/pages/psicologos.html"]):not([href="../../index.html"])');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento de desplazamiento predeterminado
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});



