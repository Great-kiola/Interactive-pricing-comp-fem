let toggle = document.querySelector('label');

const input = document.querySelector('input'),
    number = document.querySelector('.views');

input.value = 0;

input.addEventListener('input', () => {
    number.textContent = input.value;

});

toggle.addEventListener('click', (e) => {
    e.preventDefault();

    toggle.classList.toggle('active');
});

