#!/usr/bin/env node

import { playGame, getRandomNumber } from '../src/util.js';
import {Roundprodression} from '../src/util.js';

const rules = 'What number is missing in the progression?';

const startBrainProgression = () => {
    playGame(rules, Roundprodression);
  };
  
  startBrainProgression();