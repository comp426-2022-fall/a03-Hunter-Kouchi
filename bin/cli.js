#!/usr/bin/env node
import minimist from "minimist";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

const sides_t = args.sides || 6
const dice_t = args.dice || 2
const rolls_t = args.rolls || 1

console.log(roll(sides_t, dice_t, rolls_t));
