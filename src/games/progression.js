import { getRandomNumber } from './even.js';

const generateProgression = (randomFirstNum, minLength, step) => {
  const resultProgression = [];
  for (let i = randomFirstNum; i < minLength; i += step) {
    if (resultProgression.length !== 10) resultProgression.push(i);
  }
  return resultProgression;
};
function Roundprodression() {
  const randomFirstNum = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const minLength = randomFirstNum + (step * 10);

  const progression = generateProgression(randomFirstNum, minLength, step);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
}
export default Roundprodression;
