import { playGame, getRandomNumber } from '../src/util.js';
import { RoundGCD } from '../src/util.js';

const rules = 'Find the greatest common divisor of given numbers.';
const startBrainGCD = () => {
    playGame(rules, RoundGCD);
  };
  
  startBrainGCD();