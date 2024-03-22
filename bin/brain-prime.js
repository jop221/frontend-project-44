#!/usr/bin/env node

import { playGame, getRandomNumber } from '../src/util.js';
import { Roundprime } from '../src/util.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startBrainPrime = () => {
    playGame(rules, Roundprime);
  };
  
  startBrainPrime();