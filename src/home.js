/*
This module is used to generate all content that is specific to the Home page
*/

function generateHome() {
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
    

    // Display the restaurant name to the center of the page
    let name = document.createElement('p');
    name.textContent = "pizza deliziosa";
    name.classList.add('name')
    content.appendChild(name);
    
}

export {generateHome}