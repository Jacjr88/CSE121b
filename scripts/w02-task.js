/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Jorge Calvi';
let currentYear = 2024;
const profilePicture = '/images/my_photo.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year')

/* Step 4 - Adding Content */

const imageElement = document.querySelector('img');

//I solved like this too
/*const strongElement = document.createElement("strong");
nameElement.appendChild(strongElement);
strongElement.append(fullName);*/

nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear = nameElement.textContent;
imageElement.setAttribute('src',  profilePicture);
imageElement.setAttribute('alt',  `Profile image of ${fullName}`);

/* Step 5 - Array */

const favoriteFoods = ['Asado',' Milanesas',' Pastel de papa']
foodElement.append(favoriteFoods)
const singleFavoriteFood = 'Lasagna'
favoriteFoods.push(singleFavoriteFood)
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift()
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods}`


