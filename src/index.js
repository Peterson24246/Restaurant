// This file will import and call each page module as required

import {renderNavbar} from './navbar.js';
import {renderHome} from './home.js';
import './reset.css';
import './style.css';

// Render the Navbar
renderNavbar();
// Render the Home tab by default
renderHome();
let content = document.querySelector('#content');

// Create event listeners for each tab link
let tabList = document.querySelectorAll('.link');
tabList.forEach((item) => {
    item.addEventListener('click', (e) => {
        let link = item.textContent;
        if (link === 'home') {
            content.removeChild(content.lastChild);
            renderHome();
        } else if (link === 'menu') {
            content.removeChild(content.lastChild);
            renderMenu();
        } else if (link === 'about') {
            content.removeChild(content.lastChild);
            renderAbout();
        }
    });
})




