let toggle = document.querySelector('label');

toggle.addEventListener('click', (e) => {
    e.preventDefault();

    toggle.classList.toggle('active');
});