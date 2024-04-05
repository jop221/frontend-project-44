#!/usr/bin/env node
import { playGame } from '../src/cli.js';
import RoundGCD from '../src/games/gcd.js';

const rules = 'Find the greatest common divisor of given numbers.';
const startBrainGCD = () => {
  playGame(rules, RoundGCD);
};

startBrainGCD();
