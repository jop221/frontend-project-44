import { getRandomNumber } from '../games/even.js';
const isPrime = (num) => {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  export function Roundprime () {
    const num = getRandomNumber(1, 100);
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    const question = String(num);
    return [question, correctAnswer];
  };