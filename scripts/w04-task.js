/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Jorge Calvi',
    photo: './images/my_photo.jpg',
    favoriteFoods:['Asado',' Milanesas',' Pastel de papa'],
    hobbies:['Read', 'Play Boardgames', 'Play videogames'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place:'Cordoba, Argentina',
    length: '30 years'
})

myProfile.placesLived.push({
    place:'Asuncion, Paraguay',
    length: '5 years'
})

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector('#photo');
imageElement.setAttribute('src', myProfile.photo)
imageElement.setAttribute('alt',  `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/

const foodsElement = document.querySelector('#favorite-foods');
function mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myProfile.favoriteFoods.forEach(mapFoodItem);

/* Hobbies List */

const hobbiesElement = document.querySelector('#hobbies');
function mapHobbieItem(hobbie) {
  let myHobbie = document.createElement('li');
  myHobbie.textContent = hobbie;
  hobbiesElement.appendChild(myHobbie);
}
myProfile.hobbies.forEach(mapHobbieItem);


/* Places Lived DataList */

const placesLivedElement = document.querySelector('#places-lived');
function mapPlacesLivedItem(place) {
  let myPlace = document.createElement('dt');
  myPlace.textContent = place.place;
  let length = document.createElement('dd');
  length.textContent = place.length;
  placesLivedElement.appendChild(myPlace);
  placesLivedElement.appendChild(length);

}

myProfile.placesLived.forEach(mapPlacesLivedItem);


