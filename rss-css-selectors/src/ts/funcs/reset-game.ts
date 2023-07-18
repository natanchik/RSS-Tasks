import { levels } from './local-storage';
import { changeLevel } from './change-level';

export function unMarkLevels(mark: string) {
  const buttonsPassedLevels = document.querySelectorAll(`.${mark}`);
  buttonsPassedLevels.forEach((button) => {
    button.classList.remove(mark);
  });
}

export function resetGame() {
  unMarkLevels('passed');
  unMarkLevels('helped');
  levels.passed.length = 0;
  levels.helped.length = 0;
  localStorage.clear();
  levels.active = 1;
  changeLevel();
}
