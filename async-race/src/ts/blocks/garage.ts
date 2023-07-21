export const carsAmount = { cars: 0 };

export const garageBlock = document.createElement('div');
garageBlock.classList.add('garage-block');

export const garageTitle = document.createElement('h2');
garageTitle.classList.add('garage-title');
garageTitle.textContent = `Garage (${carsAmount.cars})`;
garageBlock.appendChild(garageTitle);

const garagePageTitle = document.createElement('h3');
garagePageTitle.classList.add('garage-page-title');
garagePageTitle.innerText = `Page #1`;
garageBlock.appendChild(garagePageTitle);