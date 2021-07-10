import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.91.0/testing/asserts.ts";
import { fromSemitones, toSemitones } from "./diatonic.ts";

const range = (n: number) => new Array(n).fill(0).map((_, i) => i);
const [I, II, III, IV, V, VI, VII, VIII, IX, X] = range(10);
const [P1, m2, M2, m3, M3, P4, _TT, P5, m6, M6, m7, M7, P8, _m9, M9, m10, M10] =
  range(17);

const cases = [
  [I, I, P1],
  [I, II, M2],
  [I, III, M3],
  [I, IV, P4],
  [I, V, P5],
  [I, VI, M6],
  [I, VII, M7],
  [I, VIII, P8],
  [I, IX, M9],
  [I, X, M10],
  [VI, I, P1],
  [VI, II, M2],
  [VI, III, m3],
  [VI, IV, P4],
  [VI, V, P5],
  [VI, VI, m6],
  [VI, VII, m7],
  [VI, VIII, P8],
  [VI, IX, M9],
  [VI, X, m10],
];

cases.forEach(([mode, degree, semitones]) => {
  Deno.test(`${mode}: ${degree} -> ${semitones}`, () => {
    const actual = toSemitones(degree, mode);
    assertEquals(actual, semitones);
  });
});

cases.forEach(([mode, degree, interval]) => {
  Deno.test(`${mode}: ${interval} -> ${degree}`, () => {
    const actual = fromSemitones(interval, mode);
    assertEquals(actual, degree);
  });
});

Deno.test("toSemitones throws with fractional number", () => {
  assertThrows(() => toSemitones(0.5));
});

Deno.test("fromSemitones throws with fractional number", () => {
  assertThrows(() => fromSemitones(0.5));
});

Deno.test("ionian: m2 -> IIb", () => {
  const actual = fromSemitones(m2);
  assertEquals(actual, II - 0.5);
});

Deno.test("ionian: m3 -> II#", () => {
  const actual = fromSemitones(m3);
  assertEquals(actual, II + 0.5);
});
