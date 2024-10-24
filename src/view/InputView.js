import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/MESSAGE.js';
import CarList from '../carList/CarList.js';
import GameCountValidator from '../utils/validators/GameCountValidator.js';

class InputView {
  constructor() {
    this.carList = new CarList();
    this.gameCountValidator = new GameCountValidator();
  }

  async getCarNameInput() {
    let userCarName = await Console.readLineAsync(MESSAGE.CAR_NAME_PROMPT);
    userCarName = this.carList.getUserCarNameList(userCarName);
    return userCarName;
  }

  async getGameCountInput() {
    const gameCount = await Console.readLineAsync(MESSAGE.GAME_ROUND_PROMPT);
    this.gameCountValidator.runAllFunction(gameCount);
    return gameCount;
  }
}

export default InputView;
