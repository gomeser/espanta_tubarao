document.querySelectorAll('.menu .container').forEach(container => {
    const link = container.querySelector('a'); 
    const dropdown = container.querySelector('.dropdown');

    if (link) {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const isActive = dropdown && dropdown.style.display === 'block';

            document.querySelectorAll('.menu .dropdown').forEach(d => d.style.display = 'none');

            if (dropdown) {
                dropdown.style.display = isActive ? 'none' : 'block';
            }
        });
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu .container')) {
        document.querySelectorAll('.menu .dropdown').forEach(d => d.style.display = 'none');
    }
});

const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const leftArrow = carousel.querySelector('.left-arrow');
    const rightArrow = carousel.querySelector('.right-arrow');
    const containerCursos = carousel.querySelector('.container');
    
    const scrollAmount = 300; 
    
    leftArrow.addEventListener('click', () => {
        containerCursos.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    rightArrow.addEventListener('click', () => {
        containerCursos.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});