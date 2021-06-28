function renderNavbar() {
    // Select the main content div to append everything
    let content = document.querySelector("div#content")

    // Generates the navbar
    let navbar = document.createElement('ul');
    navbar.classList.add('nav');
    let navItems = ['home','menu','about'];
    navItems.forEach((item) => {
        let navItem = document.createElement('li')
        navItem.classList.add('link')
        navItem.textContent = item;
        navbar.appendChild(navItem);
    })
    content.appendChild(navbar);
}

export {renderNavbar}