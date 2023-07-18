let toggle = document.querySelector('label');
let amount = document.querySelector('.amount');

const input = document.querySelector('input'),
    number = document.querySelector('.views');

let label = document.querySelector('label');

let mnthsPrice = document.querySelector('.mnthsPrice');

input.value = 0;

input.addEventListener('input', () => {
    number.textContent = input.value;

    mnthsPrice.textContent = input.value * 2
});


toggle.addEventListener('click', (e) => {
    e.preventDefault();
    

    if (toggle.classList.toggle('active')){
        mnthsPrice.textContent = 20.00;
    } else {
        mnthsPrice.textContent = 16.00;
    }
});

// label.addEventListener('click', (e) => {
//     e.preventDefault();

//     amount.textContent * 2
// });

// console.log(amount.textContent);