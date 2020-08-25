'use strict';

const myButton = document.getElementById('refreshQuote');
const chuckSays = document.getElementById('chuckSays');
const submitForm = document.getElementById('submitForm');
let category = "dev"

const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function (fetchResponse){
        chuckSays.innerHTML = fetchResponse.value;
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

(function () {
    getQuote()
})();

