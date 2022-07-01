const meals = document.getElementById('meals');

getRandomMeal();

async function getRandomMeal(){
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    console.log(randomMeal);

    addMeal(randomMeal, true);
}

async function getMealById(id){
    const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);

    console.log(meal)
}

async function getMealsBySearch(term){
    const meals = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=' + term);

    console.log(meals)
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    
    meal.innerHTML = `
        <div class="mealHeader">
            ${random ? `<span class="random">Random Recipe</span>` : ""}
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
        </div>
        <div class="mealBody">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn"><i class="fas fa-heart"></i></button>
        </div>
    `;

    meals.appendChild(meal);
}