// src/cli.js
import readlineSync from 'readline-sync';
import start from './cli.js';
const roundCount = 3;
export function playGame (rules, generateRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules); 
    for (let i = 0; i < roundCount; i += 1) {
      const [question, correctAnswer] = generateRound();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ')
      if (userAnswer === correctAnswer) { 
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
        return;
      }
      if (i === roundCount - 1) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
};
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
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
  