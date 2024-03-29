#!/usr/bin/env node
import { playGame, getRandomNumber } from '../src/util.js';
import { generateRound } from '../src/util.js';
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startBrainEven = () => {
  playGame(rules, generateRound);
};

startBrainEven();
