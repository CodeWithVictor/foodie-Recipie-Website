const toggler = document.querySelector('.toggler');
const navbarlinks = document.querySelector('.nav-links');
const navbarSearch = document.querySelector('input[type = "search"]');

toggler.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
    navbarSearch.classList.toggle('active');
})



// clone the ingredient div

const ingredients_lists = document.querySelector('#ingredients_lists');
const ingredientDiv = document.querySelector('.ingredientDiv')
const ingredients_btn = document.querySelector('#ingredients_btn')

ingredients_btn.addEventListener('click', ()=>{
    const newIngredientInput = ingredientDiv.cloneNode(true);
    ingredients_lists.appendChild(newIngredientInput);
    newIngredientInput.querySelector('input').value = ''
})