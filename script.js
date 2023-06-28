let toggle = document.querySelector('label');

toggle.addEventListener('click', (e) => {
    e.preventDefault();

    label.classList.toggle('active');
});