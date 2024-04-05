#!/usr/bin/env node
import { playGame } from '../src/cli.js';
import { generateRound } from '../src/games/even.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startBrainEven = () => {
  playGame(rules, generateRound);
};

startBrainEven();
