toggleMenu();
document.getElementById('toggle-btn').addEventListener('change', toggleMenu)

function toggleMenu() {
    let show = this.checked;
    let menuItemEl = document.querySelector('.menu-item');
    if (show == true) {
        menuItemEl.classList.remove('menu-item-hide');
    } else {
        menuItemEl.classList.add('menu-item-hide');
    }
}