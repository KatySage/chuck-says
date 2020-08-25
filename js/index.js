'use strict';

const myButton = document.getElementById('refreshQuote');
const chuckSays = document.getElementById('chuckSays');
const submitForm = document.getElementById('submitForm');
const modalOverlay = document.querySelector('.modal-overlay')
const modalCloseButton = document.getElementById('closeModal')
let category = "dev"

const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function (fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
        modalOverlay.classList.toggle('open');
    })
}
const getCategories = () => {
    const url =`https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById("categoryInput");

    get(url).then(function (categoryArray){
        categoryArray.map(function (category){
            const categoryOption = document.createElement('option')
            if (category != 'explicit' && category != 'religion' && category !='political'){
                categoryOption.value = category;
            categoryOption.text = category;
            dropdownMenu.append(categoryOption);

        }; 
    });
})}
getCategories()

myButton.addEventListener('click', function (e) {
        e.preventDefault();
        getQuote();
})

const getChuckQuotes = document.getElementById('getChuckQuotes');

getChuckQuotes.addEventListener('submit', e => {
    e.preventDefault();
    const userInput = document.getElementById("categoryInput");
    category = userInput.value;
    getQuote();
});

modalCloseButton.addEventListener('click', function(e) {
    modalOverlay.classList.toggle('open');
});

(function () {
    getQuote()
})();

const modalContent = document.querySelector('.modal-content')

window.onclick = function(event) {
    if (event.target == modalOverlay) {
        modalOverlay.classList.toggle('open');
    }
}