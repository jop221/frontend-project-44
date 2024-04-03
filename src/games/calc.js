import { playGame, getRandomNumber } from '../games/even.js';
export function getAnswer (num1 ,sign,num2) {
  switch (sign) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return null;
    }
  };
  export function Roundcalc () {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const signs = ['+', '-', '*'];
    const sign = signs[getRandomNumber(0, 2)];
    const question = `${num1} ${sign} ${num2}`;
    const answer = getAnswer(num1, sign, num2);
    return [question, String(answer)];
  };