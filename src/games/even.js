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
const isEven = (num) => num % 2 === 0;

export const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

