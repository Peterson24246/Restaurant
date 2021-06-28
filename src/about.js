/*
This module is used to generate all content that is specific to the About page
*/

function renderAbout() {
    // Select the main content div to append everything
    let content = document.querySelector("div#content")
    
    let bulkContent = document.createElement('div');
    bulkContent.classList.add('bulk-content');
    content.appendChild(bulkContent)

    // Display information about the restaurant
    let hours = document.createElement('div');
    hours.textContent = "Monday-Sunday, 11AM - 10PM";
    hours.classList.add('hours')
    bulkContent.appendChild(hours);

    let phone = document.createElement('div');
    phone.textContent = '+1 (999) 999-9999';
    phone.classList.add('phone');
    bulkContent.appendChild(phone);

    let email = document.createElement('div');
    email.textContent = 'contact@pizzadeliziosa.com';
    email.classList.add('email');
    bulkContent.appendChild(email);
}

export {renderAbout}