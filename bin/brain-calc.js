#!/usr/bin/env node
import { playGame } from '../src/cli.js';
import Roundcalc from '../src/games/calc.js';

const rules = 'What is the result of the expression?';
const startBrainCalc = () => {
  playGame(rules, Roundcalc);
};
startBrainCalc();
