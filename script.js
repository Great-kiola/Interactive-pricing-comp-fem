let toggle = document.querySelector('label');
let amount = document.querySelector('.amount');

const input = document.querySelector('input'),
    number = document.querySelector('.views');

let label = document.querySelector('label');

input.value = 0;

input.addEventListener('input', () => {
    number.textContent = input.value;
});

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.classList.toggle('active');
});

// label.addEventListener('click', (e) => {
//     e.preventDefault();

//     amount.textContent * 2
// });

// console.log(amount.textContent);