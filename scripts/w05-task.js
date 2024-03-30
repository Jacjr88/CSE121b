/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');

const templesUrl = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'

let templeList = [];

/* async displayTemples Function */

let displayTemples = async (temples) => {
    console.log(temples);
    temples.forEach(temple => {
        let artElement = document.createElement('article');
        let title = document.createElement('h3');
        title.textContent = temple.templeName;
        let image = document.createElement('img');
        image.setAttribute('src', temple.imageUrl); 
        image.setAttribute('alt', temple.location);
        artElement.appendChild(title);
        artElement.appendChild(image);
        templesElement.appendChild(artElement);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch(templesUrl);
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
}

/* filterTemples Function */

const filterTemples = async () => {
    reset();
    const selectElement = document.getElementById('filtered');
    const filterValue = selectElement.value;

    const response = await fetch(templesUrl);
    let templeList = await response.json();
        
    switch(filterValue) {
        case 'utah':
            const utahTemples = templeList.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            const noUtahTemples = templeList.filter(temple => !temple.location.includes('Utah'));
            displayTemples(noUtahTemples);
            break;
        case 'older':
            const templesBefore1950 = templeList.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]); // Get the year from the dedicated property
                return year < 1950;
            });
            displayTemples(templesBefore1950);
            break;
        case 'all':
            displayTemples(templeList);
            break;
        default:
            displayTemples(templeList);
            break;
    } ;
}

getTemples();

/* Event Listener */

document.querySelector('#filtered').addEventListener('change', filterTemples)
