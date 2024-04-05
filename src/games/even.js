const isEven = (num) => num % 2 === 0;
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
