import { playGame, getRandomNumber } from '../src/games/even.js';
import {Roundcalc} from '../src/games/calc.js';
const rules = 'What is the result of the expression?';
const startBrainCalc = () => {
    playGame(rules, Roundcalc);
};
startBrainCalc();
