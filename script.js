// Function to highlight the current page in the navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to handle seminar date toggling
function setupSeminarDateToggle() {
    const seminarDates = document.querySelectorAll('.seminar-date');
    seminarDates.forEach(date => {
        date.innerHTML = '► ' + date.innerHTML;

        date.addEventListener('click', () => {
            const details = date.nextElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
                date.innerHTML = date.innerHTML.replace('▼', '►');
            } else {
                details.style.display = 'block';
                date.innerHTML = date.innerHTML.replace('►', '▼');
            }
        });
    });
}


// Combine all DOMContentLoaded functions
document.addEventListener('DOMContentLoaded', () => {
    highlightCurrentPage();
    setupSeminarDateToggle();
});

