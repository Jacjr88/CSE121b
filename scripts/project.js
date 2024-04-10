const foodsElement = document.querySelector('#foods');

let foodsByLetterUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'

let foodsByCategory = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='


let displayFoods = async (foods) => {
    console.log(foods.meals);
    foods.meals.forEach(food => {
        let artElement = document.createElement('article');
        let title = document.createElement('h3');
        title.textContent = food.strMeal;
        let image = document.createElement('img');
        image.setAttribute('src', food.strMealThumb); 
        image.setAttribute('alt', food.strTags);
        artElement.appendChild(title);
        artElement.appendChild(image);
        foodsElement.appendChild(artElement);
    });
}


const getFoods = async () => {
    const response = await fetch(foodsByLetterUrl);
    if (response.ok) {
        const foodsList = await response.json();
        console.log(foodsList);
        if (Array.isArray(foodsList.meals)) {
            displayFoods(foodsList);
        } else {
            console.error("Foods list is not an array:", foodsList);
        }
    } else {
        console.error("Failed to fetch foods:", response.status);
    }
}

const getFoodsByCategory = async () => {
    const response = await fetch(foodsByCategory);
    if (response.ok) {
        const foodsList = await response.json();
        console.log(foodsList);
        if (Array.isArray(foodsList.meals)) {
            displayFoods(foodsList);
        } else {
            console.error("Foods list is not an array:", foodsList);
        }
    } else {
        console.error("Failed to fetch foods:", response.status);
    }
}

/* reset Function */

const reset = () => {
    foodsElement.innerHTML = '';
}

getFoods();

document.addEventListener('DOMContentLoaded', function() {
    const letterButtons = document.querySelectorAll('.letter');

    letterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const letter = this.value;
            const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
            const searchUrl = apiUrl + letter;

            foodsByLetterUrl = searchUrl;
            reset();
            getFoods();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('filtered');

    selectElement.addEventListener('change', function() {
        const selectedCategory = this.value;
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
        const searchUrl = apiUrl + selectedCategory;

        if (selectedCategory) {
            foodsByCategory = searchUrl;
            reset();
            getFoodsByCategory();
        }
    });
});
