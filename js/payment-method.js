// Способ оплаты
let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let name = btns[i].getAttribute('data-modal-btn');
        let modal = document.querySelector("[data-modal-window='" + name + "']");
        modal.style.display = "block";
        let close = modal.querySelector(".close_modal_window");
        close.addEventListener('click', function () {
            modal.style.display = "none";
        });
    });
}

window.onclick = function (e) {
    if (e.target.hasAttribute("data-modal-window")) {
        let modals = document.querySelectorAll("*[data-modal-window]");
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
        }
    }
};


// Выпадающий список Fail
function toggleList() {
    var list = document.getElementById('list');
    var arrow = document.getElementById('arrow-path');

    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
        setTimeout(() => {
            arrow.style.transform = 'rotate(180deg)';
        }, 0);
    } else {
        list.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Способ доставки
function openModal() {
    var modal = document.getElementById('myModal__delivery');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal__delivery');
    modal.style.display = 'none';
}

// Закрывать модальное окно при клике вне его области
window.onclick = function (event) {
    var modal = document.getElementById('myModal__delivery');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


// Выбрать все

function toggleSVG() {
    const svg = document.querySelector('.default-svg');
    svg.classList.toggle('active-svg');
}


// Счетчик товаров
window.onload = function () {
    var decrementBtn = document.getElementById('decrementBtn2');
    decrementBtn.disabled = true; // Начально блокируем кнопку минуса
};

function decrement(counterId) {
    var counter = document.getElementById('counter' + counterId);
    var decrementBtn = document.getElementById('decrementBtn' + counterId);

    var currentValue = parseInt(counter.innerHTML, 10);

    if (currentValue > 0) {
        counter.innerHTML = currentValue - 1;
    }

    decrementBtn.disabled = (currentValue - 1 === 0);
}

function increment(counterId) {
    var counter = document.getElementById('counter' + counterId);
    var decrementBtn = document.getElementById('decrementBtn' + counterId);

    var currentValue = parseInt(counter.innerHTML, 10);

    counter.innerHTML = currentValue + 1;

    decrementBtn.disabled = false;
}











// document.addEventListener("DOMContentLoaded", function () {
//     let btnChange = document.querySelector(".btn-change__pay-met");
//     let payForGoods = document.querySelector(".payForGoods");
//     let modal = document.getElementById("myModal");

//     btnChange.addEventListener("click", function () {
//         modal.style.display = "block";
//         payForGoods.style.display = "none"; // Скрыть блок с текущими данными
//     });

//     // Закрыть модальное окно при клике вне его

//     window.addEventListener("click", function (event) {
//         console.log(event.target);
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     });
// });
