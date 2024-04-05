#!/usr/bin/env node
import { playGame } from '../src/cli.js';
import Roundprime from '../src/games/prime.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startBrainPrime = () => {
  playGame(rules, Roundprime);
};

startBrainPrime();
