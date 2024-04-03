import { playGame, getRandomNumber } from '../src/games/even.js';
import { RoundGCD } from '../src/games/gcd.js';

const rules = 'Find the greatest common divisor of given numbers.';
const startBrainGCD = () => {
    playGame(rules, RoundGCD);
  };
  
  startBrainGCD();