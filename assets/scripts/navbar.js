function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);
    var navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
        const element = navLinks[i];
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const attr = element.getAttribute('data-id');
            const split = attr.split('_');
            const sectionId = split[0];
            scrollToSection(sectionId);
            if (split[split.length - 1] === 'mobile') {
                toggleMobileMenu();
            }
        });
    }
});