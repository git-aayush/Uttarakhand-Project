function showSidebar() {
    const sidebar = document.querySelector('.nav__links__sidebar');
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav__links__sidebar');
    sidebar.style.display = "none";
}



let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

