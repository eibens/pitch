import { decompose } from "https://deno.land/x/modulo@v0.0.8/mod.ts";

const _chromaticPatterns = [
  [0, 2, 4, 5, 7, 9, 11, 12],
  [0, 2, 3, 5, 7, 9, 10, 12],
  [0, 1, 3, 5, 7, 8, 10, 12],
  [0, 2, 4, 6, 7, 9, 11, 12],
  [0, 2, 4, 5, 7, 9, 10, 12],
  [0, 2, 3, 5, 7, 8, 10, 12],
  [0, 1, 3, 5, 6, 8, 10, 12],
];

export function toSemitones(value: number, mode = 0) {
  const [degree, alter] = decompose(value, 1);
  if (alter !== 0) throw new Error("value must be a whole number");
  const [octaves, index] = decompose(degree, 7);
  const note = _chromaticPatterns[mode][index];
  return note + 12 * octaves;
}

const _diatonicPatterns = [
  [0, 0.5, 1, 1.5, 2, 3, 3.5, 4, 4.5, 5, 5.5, 6],
  [0, 0.5, 1, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 6.5],
  [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 5.5, 6, 6.5],
  [0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 4.5, 5, 5.5, 6],
  [0, 0.5, 1, 1.5, 2, 3, 3.5, 4, 4.5, 5, 6, 6.5],
  [0, 0.5, 1, 2, 2.5, 3, 3.5, 4, 5, 5.5, 6, 6.5],
  [0, 1, 1.5, 2, 2.5, 3, 4, 4.5, 5, 5.5, 6, 6.5],
];

export function fromSemitones(value: number, mode = 0) {
  const [degree, alter] = decompose(value, 1);
  if (alter !== 0) throw new Error("value must be a whole number");
  const [octaves, index] = decompose(degree, 12);
  const note = _diatonicPatterns[mode][index];
  return note + 7 * octaves;
}
