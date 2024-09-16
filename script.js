// Function to highlight the current page in the navigation
// Function to highlight the current page in the navigation
function highlightCurrentPage() {
    let currentPage = window.location.pathname.split('/').pop(); // Get the current page name

    // If the current page is empty (i.e., accessing the root domain), treat it as index.html
    if (currentPage === '' || currentPage === 'index.html') {
        currentPage = 'index.html'; 
    }

    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
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

