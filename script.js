document.addEventListener("DOMContentLoaded", function() {
    fetchMenuItems();
});

function fetchMenuItems() {
    fetch('menu.php')
    .then(response => response.json())
    .then(data => {
        const menuItemsContainer = document.getElementById('menuItems');
        data.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.textContent = item.name + ': $' + item.price;
            menuItemsContainer.appendChild(menuItem);
        });
    })
    .catch(error => console.error('Error fetching menu items:', error));
}
