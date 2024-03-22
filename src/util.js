// src/cli.js
import readlineSync from 'readline-sync';
import start from './cli.js';
const roundCount = 3;
export function playGame (rules, generateRound) {
  console.log(start());
  console.log(rules); 
    for (let i = 0; i < roundCount; i += 1) {
      const [question, correctAnswer] = generateRound();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
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