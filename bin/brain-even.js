#!/usr/bin/env node
import { playGame, getRandomNumber } from '../src/games/even.js';
import { generateRound } from '../src/games/even.js';
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startBrainEven = () => {
  playGame(rules, generateRound);
};

startBrainEven();
