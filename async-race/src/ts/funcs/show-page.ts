import { commandBlock, btnRace } from '../blocks/command-block';
import { garageBlock } from '../blocks/garage';
import { getCars } from './requests/get-cars';
import { winBlock, winTitle, winPageTitle, createWinTable } from '../blocks/winners';
import { getWinners, loadTable } from './requests/get-winners';

export const wrapper = document.createElement('div');

export async function loadGarage() {
  wrapper.innerHTML = '';
  wrapper.appendChild(commandBlock);
  wrapper.appendChild(garageBlock);
  getCars();
  getWinners();
  btnRace.disabled = false;
}

export async function showGarage() {
  wrapper.innerHTML = '';
  wrapper.appendChild(commandBlock);
  wrapper.appendChild(garageBlock);
}

export async function showWin() {
  wrapper.innerHTML = '';
  wrapper.appendChild(winBlock);
  winBlock.innerHTML = '';
  winBlock.appendChild(winTitle);
  winBlock.appendChild(winPageTitle);
  createWinTable();
  loadTable();
}