// src/cli.js
import readlineSync from 'readline-sync';
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
  function  calculateGCD (num1, num2) { 
    if (num2 > num1) return calculateGCD(num2, num1);
    if (!num2) return num1;
    return calculateGCD(num2, num1 % num2);
  };
  export function RoundGCD () {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const gcd = calculateGCD(num1,num2);
    const question = `${num1} ${num2}`;
    const answer = String(gcd);
    return [question, answer];
  };
  const generateProgression = (randomFirstNum, minLength, step) => {
    const resultProgression = [];
    for (let i = randomFirstNum; i < minLength; i += step) {
      if (resultProgression.length !== 10) resultProgression.push(i);
    }
    return resultProgression;
  };
  export function Roundprodression () {
    const randomFirstNum = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 5);
    const minLength = randomFirstNum + (step * 10);
  
    const progression = generateProgression(randomFirstNum, minLength, step);
    const hiddenIndex = getRandomNumber(0, progression.length - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
  
    return [question, correctAnswer];
  };
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