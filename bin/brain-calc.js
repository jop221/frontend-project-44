import { playGame, getRandomNumber } from '../src/util.js';
import {Roundcalc} from '../src/util.js';
const rules = 'What is the result of the expression?';
const startBrainCalc = () => {
    playGame(rules, Roundcalc);
};
startBrainCalc();