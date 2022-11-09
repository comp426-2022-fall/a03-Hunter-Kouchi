#!/usr/bin/env node
import minimist from "minimist";
import { roll } from "/lib/roll.js";

const args = minimist(process.argv.slice(2));

console.log(roll(args.sides, args.dice, args.rolls));
