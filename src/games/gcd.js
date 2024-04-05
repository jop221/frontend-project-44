import { getRandomNumber } from './even.js';

function calculateGCD(num1, num2) {
  if (num2 > num1) return calculateGCD(num2, num1);
  if (!num2) return num1;
  return calculateGCD(num2, num1 % num2);
}
function RoundGCD() {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const gcd = calculateGCD(num1, num2);
  const question = `${num1} ${num2}`;
  const answer = String(gcd);
  return [question, answer];
}
export default RoundGCD;
