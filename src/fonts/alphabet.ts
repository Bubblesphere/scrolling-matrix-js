import BitArray from "../lib/bit-array";
import Character from "../lib/character";
import { IAlphabet } from "../lib/types";

export const Alphabet: IAlphabet = [
  new Character(
    ['a', 'A'], 
    new BitArray([0, 0, 1, 0, 0,
                  0, 1, 0, 1, 0,
                  0, 1, 0, 1, 0,
                  0, 1, 0, 1, 0,
                  1, 0, 0, 0, 1,
                  1, 1, 1, 1, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1]),
    5
  ),
  new Character(
    ['b', 'B'], 
    new BitArray([1, 1, 1, 1, 0,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 1, 1, 1, 0,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 1, 1, 1, 0]),
    5
  ),
  new Character(
    ['c', 'C'], 
    new BitArray([0, 0, 1, 1, 1,
                  0, 1, 0, 0, 0,
                  1, 0, 0, 0, 0,
                  1, 0, 0, 0, 0,
                  1, 0, 0, 0, 0,
                  1, 0, 0, 0, 0,
                  1, 1, 0, 0, 0,
                  0, 1, 1, 1, 1]),
    5
  ),
  new Character(
    ['d', 'D'], 
    new BitArray([1, 1, 1, 1, 0,
                  1, 0, 0, 1, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 1, 0,
                  1, 1, 1, 1, 0]),
    5
  ),
  new Character(
    ['e', 'E'], 
    new BitArray([1, 1, 1, 1,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 1, 1, 1,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 1, 1, 1]),
    4
  ),
  new Character(
    ['f', 'F'], 
    new BitArray([1, 1, 1, 1,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 1, 1, 1,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0]),
    4
  ),
  new Character(
    ['g', 'G'], 
    new BitArray([0, 0, 1, 1, 1, 1,
                  0, 1, 0, 0, 0, 0,
                  1, 0, 0, 0, 0, 0,
                  1, 0, 0, 1, 1, 1,
                  1, 0, 0, 0, 0, 1,
                  1, 0, 0, 0, 0, 1,
                  0, 1, 0, 0, 0, 1,
                  0, 0, 1, 1, 1, 1]),
    6
  ),
  new Character(
    ['h', 'H'], 
    new BitArray([1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 1, 1, 1, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1]),
    5
  ),
  new Character(
    ['i', 'I'], 
    new BitArray([1, 1, 1, 1, 1,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  1, 1, 1, 1, 1]),
    5
  ),
  new Character(
    ['j', 'J'], 
    new BitArray([1, 1, 1, 1,
                  0, 0, 0, 1,
                  0, 0, 0, 1,
                  0, 0, 0, 1,
                  0, 0, 0, 1,
                  0, 0, 0, 1,
                  0, 0, 0, 1,
                  1, 1, 1, 0]),
    4
  ),
  new Character(
    ['k', 'K'], 
    new BitArray([1, 0, 0, 0, 1,
                  1, 0, 0, 1, 0,
                  1, 0, 1, 0, 0,
                  1, 1, 0, 0, 0,
                  1, 1, 0, 0, 0,
                  1, 0, 1, 0, 0,
                  1, 0, 0, 1, 0,
                  1, 0, 0, 0, 1]),
    5
  ),
  new Character(
    ['l', 'L'], 
    new BitArray([1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 0, 0, 0,
                  1, 1, 1, 1]),
    4
  ),
  new Character(
    ['m', 'M'], 
    new BitArray([1, 0, 0, 0, 1, 0,
                  1, 0, 0, 0, 1, 0,
                  1, 1, 0, 1, 1, 0,
                  1, 1, 0, 1, 1, 0,
                  1, 0, 1, 0, 1, 0,
                  1, 0, 0, 0, 1, 0,
                  1, 0, 0, 0, 1, 0,
                  1, 0, 0, 0, 1, 1]),
    6
  ),
  new Character(
    ['n', 'N'], 
    new BitArray([1, 1, 0, 0, 1,
                  1, 1, 0, 0, 1,
                  1, 1, 0, 0, 1,
                  1, 0, 1, 0, 1,
                  1, 0, 1, 0, 1,
                  1, 0, 0, 1, 1,
                  1, 0, 0, 1, 1,
                  1, 0, 0, 1, 1]),
    5
  ),
  new Character(
    ['o', 'O'], 
    new BitArray([0, 1, 1, 1, 1, 0,
                  0, 1, 0, 0, 1, 1,
                  1, 0, 0, 0, 0, 1,
                  1, 0, 0, 0, 0, 1,
                  1, 0, 0, 0, 0, 1,
                  1, 0, 0, 0, 0, 1,
                  1, 1, 0, 0, 1, 0,
                  0, 1, 1, 1, 1, 0]),
    6
  ),
  new Character(
    ['p', 'P'], 
    new BitArray([1, 1, 1, 1, 0,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 1, 1, 1, 0,
                  1, 0, 0, 0, 0,
                  1, 0, 0, 0, 0,
                  1, 0, 0, 0, 0]),
    5
  ),
  new Character(
    ['p', 'P'], 
    new BitArray([0, 1, 1, 1, 0,
                  1, 1, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 1, 0, 1,
                  1, 0, 0, 1, 0,
                  0, 1, 1, 0, 1]),
    5
  ),
  new Character(
    ['r', 'R'], 
    new BitArray([1, 1, 1, 1, 0, 0,
                  1, 0, 0, 0, 1, 0,
                  1, 0, 0, 0, 1, 0,
                  1, 0, 0, 0, 1, 0,
                  1, 1, 1, 1, 0, 0,
                  1, 0, 0, 1, 1, 0,
                  1, 0, 0, 0, 1, 0,
                  1, 0, 0, 0, 1, 1]),
    6
  ),
  new Character(
    ['s', 'S'], 
    new BitArray([0, 1, 1, 1, 1,
                  1, 0, 0, 0, 0,
                  1, 0, 0, 0, 0,
                  0, 1, 1, 0, 0,
                  0, 0, 0, 1, 0,
                  0, 0, 0, 0, 1,
                  0, 0, 0, 0, 1,
                  1, 1, 1, 1, 0]),
    5
  ),
  new Character(
    ['t', 'T'], 
    new BitArray([1, 1, 1, 1, 1,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0]),
    5
  ),
  new Character(
    ['u', 'U'], 
    new BitArray([1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  0, 1, 1, 1, 0]),
    5
  ),
  new Character(
    ['u', 'U'], 
    new BitArray([1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 1, 0, 1, 0,
                  0, 1, 0, 1, 0,
                  0, 1, 0, 1, 0,
                  0, 1, 0, 1, 0,
                  0, 0, 1, 0, 0]),
    5
  ),
  new Character(
    ['w', 'W'], 
    new BitArray([1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 0, 0, 1,
                  1, 0, 1, 0, 1,
                  1, 1, 0, 1, 1,
                  1, 1, 0, 1, 1,
                  1, 1, 0, 1, 1,
                  1, 0, 0, 0, 1]),
    5
  ),
  new Character(
    ['x', 'X'], 
    new BitArray([1, 1, 0, 0, 1, 1, 0,
                  0, 1, 0, 0, 1, 0, 0,
                  0, 0, 1, 1, 1, 0, 0,
                  0, 0, 1, 1, 0, 0, 0,
                  0, 0, 1, 1, 0, 0, 0,
                  0, 0, 1, 0, 1, 0, 0,
                  0, 1, 0, 0, 0, 1, 0,
                  1, 1, 0, 0, 0, 1, 1]),
    7
  ),
  new Character(
    ['y', 'Y'], 
    new BitArray([1, 0, 0, 0, 0, 0, 1,
                  0, 1, 0, 0, 0, 1, 0,
                  0, 1, 1, 0, 1, 1, 0,
                  0, 0, 1, 1, 1, 0, 0,
                  0, 0, 0, 1, 0, 0, 0,
                  0, 0, 0, 1, 0, 0, 0,
                  0, 0, 0, 1, 0, 0, 0,
                  0, 0, 0, 1, 0, 0, 0]),
    7
  ),
  new Character(
    ['z', 'Z'], 
    new BitArray([1, 1, 1, 1, 1,
                  0, 0, 0, 1, 0,
                  0, 0, 0, 1, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 1, 0, 0, 0,
                  0, 1, 0, 0, 0,
                  1, 1, 1, 1, 1]),
    5
  ),
  new Character(
    [' '], 
    new BitArray([0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0]),
    5
  ),
];