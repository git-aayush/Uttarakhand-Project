function showSidebar() {
    const sidebar = document.querySelector('.nav__links__sidebar');
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav__links__sidebar');
    sidebar.style.display = "none";
}

module.exports = { showSidebar, hideSidebar };