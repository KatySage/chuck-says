'use strict';
const myButton = document.getElementById('refreshQuote');
const chuckSays = document.getElementById('chuckSays');
const submitForm = document.getElementById('submitForm');
const defaultCategory = "dev"

//function getQuote(category){}
const getQuote = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

    get(url).then(function (fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
})
    }
myButton.addEventListener('click', function (e) {
        e.preventDefault();
        getQuote(defaultCategory);
})

submitForm.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = document.getElementById("categoryInput");
    const category= userInput.nodeValue;

});
(function () {
    getQuote(defaultCategory)
})();
