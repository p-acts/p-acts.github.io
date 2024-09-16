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

// Function to load header and footer content

async function loadContent() {
    const wrapper = document.querySelector('.wrapper');

    try {
        // Fetch header.html and footer.html
        const [headerResponse, footerResponse] = await Promise.all([
            fetch('header.html'),
            fetch('footer.html')
        ]);

        if (!headerResponse.ok || !footerResponse.ok) {
            throw new Error('Failed to fetch HTML files');
        }

        // Get the text content of each response
        const headerHTML = await headerResponse.text();
        const footerHTML = await footerResponse.text();

        // Create elements for header and footer
        const headerElement = document.createElement('div');
        const footerElement = document.createElement('div');

        // Set their innerHTML
        headerElement.innerHTML = headerHTML;
        footerElement.innerHTML = footerHTML;

        // Insert header as the first child
        wrapper.insertBefore(headerElement, wrapper.firstChild);

        // Insert footer as the last child
        wrapper.appendChild(footerElement);

    } catch (error) {
        console.error('Error loading content:', error);
    }
}
// Combine all DOMContentLoaded functions
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    highlightCurrentPage();
    setupSeminarDateToggle();
});

