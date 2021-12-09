const menu = document.querySelector('.menu');

document.querySelector('.hamburger').addEventListener('click', () => {
    menu.classList.toggle('open');
})

const links = document.querySelectorAll('.nav-links li a');

for (const link of links) {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
    })
}