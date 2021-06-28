/*
This module is used to generate all content that is specific to the Home page
*/

function renderHome() {
    // Select the main content div to append everything
    let content = document.querySelector("div#content")
    
    let bulkContent = document.createElement('div');
    bulkContent.classList.add('bulk-content');
    content.appendChild(bulkContent)

    // Display the restaurant name to the center of the page
    let name = document.createElement('div');
    name.textContent = "pizza deliziosa";
    name.classList.add('name')
    bulkContent.appendChild(name);
    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Experience a refined take on classic Italian cuisine';
    bulkContent.appendChild(description);
}

export {renderHome}