/*
This module is used to generate all content that is specific to the Menu page
*/

function renderMenu() {
    // Select the main content div to append everything
    let content = document.querySelector("div#content")
    
    let bulkContent = document.createElement('div');
    bulkContent.classList.add('bulk-content','menu');
    content.appendChild(bulkContent)


    
    // Display the menu items
    let menuItems = [
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
        ['Classic Pepperoni', 'Marina Sauce / Mozzerella / Pepperoni', '12'],
    ]
    menuItems.forEach((item) => {
        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item')
        let menuName = document.createElement('p');
        menuName.textContent = item[0];
        menuName.classList.add('menu-name');
        let menuIngredients = document.createElement('p');
        menuIngredients.textContent = item[1];
        menuIngredients.classList.add('menu-ingredients');
        let menuPrice = document.createElement('p');
        menuPrice.textContent = item[2];
        menuPrice.classList.add('menu-price');
        menuItem.appendChild(menuName)
        menuItem.appendChild(menuIngredients)
        menuItem.appendChild(menuPrice);
        
        bulkContent.appendChild(menuItem);
    })
    
}

export {renderMenu}