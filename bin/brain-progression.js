#!/usr/bin/env node
import { playGame } from '../src/cli.js';
import Roundprodression from '../src/games/progression.js';

const rules = 'What number is missing in the progression?';

const startBrainProgression = () => {
  playGame(rules, Roundprodression);
};

startBrainProgression();
