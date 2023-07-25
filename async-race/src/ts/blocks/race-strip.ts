import { createBtn, createBtnAB } from '../funcs/create-elements/create-btn';
import { drawCar } from '../funcs/create-elements/draw-car';
import { drawFlag } from '../funcs/create-elements/create-flag';

function createRaceStripRowUp(name: string) {
  const raceStripRow = document.createElement('div');
  raceStripRow.classList.add('race-strip-row');

  const btnSelect = createBtn('select');
  btnSelect.classList.add('race-strip-row-item');
  raceStripRow.appendChild(btnSelect);

  const btnRemove = createBtn('remove');
  btnRemove.classList.add('race-strip-row-item');
  raceStripRow.appendChild(btnRemove);

  const carName = document.createElement('p');
  carName.classList.add('race-strip-row-item');
  carName.classList.add('car-name');
  carName.innerText = name;
  raceStripRow.appendChild(carName);

  return raceStripRow;
}

function createRaceStripRowCar(color: string) {
  const raceStripRow = document.createElement('div');
  raceStripRow.classList.add('race-strip-row');

  const abBlock = document.createElement('div');
  abBlock.classList.add('ab-block');
  abBlock.appendChild(createBtnAB('a'));
  abBlock.appendChild(createBtnAB('b'));

  raceStripRow.appendChild(abBlock);
  raceStripRow.appendChild(drawCar(color));
  raceStripRow.appendChild(drawFlag());

  return raceStripRow;
}

export function createRaceStrip(name: string, color: string, id: number) {
  const raceStrip = document.createElement('div');
  raceStrip.classList.add('race-strip');
  raceStrip.setAttribute('id', `${id}`);

  raceStrip.appendChild(createRaceStripRowUp(name));
  raceStrip.appendChild(createRaceStripRowCar(color));

  return raceStrip;
}