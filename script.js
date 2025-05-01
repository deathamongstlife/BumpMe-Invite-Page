// Ensure the active link is highlighted in the navigation
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop(); // Get current page name
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    const linkName = link.getAttribute('href').split('/').pop();
    if (linkName === currentPage) {
      link.classList.add('active');
    }
  });
});
