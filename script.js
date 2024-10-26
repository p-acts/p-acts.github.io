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
function setupAbstractToggle() {
    document.querySelectorAll('.toggle-abstract').forEach(toggle => {
        const abstractContent = toggle.nextElementSibling; // Select the <p class="abstract-content">
        const fullAbstract = abstractContent.querySelector('.full-abstract'); // Select the full abstract
        const firstLine = abstractContent.querySelector('.abstract-first-line'); // Select the first line

        // Extract words from the full abstract
        const fullText = fullAbstract.textContent.trim();
        const words = fullText.split(' ');
        fullAbstract.style.display = 'block'; // Temporarily show the full abstract
        maxWordsInLine = 35
        fullAbstract.style.display = 'none'; // Hide it again

        // Ensure at least one word is displayed if possible
        if (maxWordsInLine > 0) {
            firstLine.textContent = words.slice(0, maxWordsInLine).join(' ') + (words.length > maxWordsInLine ? '...' : '');
        } else {
            firstLine.textContent = ''; // Set to empty if no words can fit
        }

        // Set initial display states
        fullAbstract.style.display = 'none'; // Ensure full abstract is hidden
        firstLine.style.display = 'inline'; // Show first line

        // Toggle functionality for displaying the full abstract
        toggle.addEventListener('click', () => {
            if (fullAbstract.style.display === 'none') {
                fullAbstract.style.display = 'inline'; // Show full abstract
                firstLine.style.display = 'none'; // Hide first line
                toggle.innerHTML = toggle.innerHTML.replace('►', '▼'); // Change to down arrow
            } else {
                fullAbstract.style.display = 'none'; // Hide full abstract
                firstLine.style.display = 'inline'; // Show first line
                toggle.innerHTML = toggle.innerHTML.replace('▼', '►'); // Change back to right arrow
            }
        });
    });
}




// Combine all DOMContentLoaded functions
document.addEventListener('DOMContentLoaded', () => {
    highlightCurrentPage();
    setupAbstractToggle();
});

