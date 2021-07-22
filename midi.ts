import { Accidental, Letter, Pitch } from "./pitch.ts";
import * as DIATONIC from "./diatonic.ts";
import {
  decompose,
  modulo,
  quotient,
} from "https://deno.land/x/modulo@v0.0.9/mod.ts";

/**
 * Converts a pitch letter to a semitone offset within the C major scale.
 *
 * Since MIDI number zero corresponds to C-1 (one octave below C0), C is used as the origin.
 *
 * @param letter is the pitch letter.
 * @returns the semitone offset.
 */
export function fromLetter(letter: Letter): number {
  return {
    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11,
  }[letter];
}

/**
 * Inverse function of `fromLetter`.
 *
 * @param midi is the semitone offset.
 * @param accidental is the preferred accidental.
 * @returns the pitch letter.
 */
export function toLetter(midi: number, accidental: "#" | "b"): Letter {
  const diatonic = DIATONIC.fromSemitones(midi);
  const [round, rest] = decompose(diatonic, 1);
  const halfStep = rest === 0.5;
  const increment = accidental === "b" && halfStep;
  const whole = round + (increment ? 1 : 0);
  const index = modulo(whole, 7);
  return [..."CDEFGAB"][index] as Letter;
}

/**
 * Converts an accidental to a semitone offset.
 *
 * This works because [enharmonic](https://en.wikipedia.org/wiki/Enharmonic) notes are mapped to the same MIDI number.
 *
 * @param accidental is the accidental.
 * @returns the semitone offset.
 */
export function fromAccidental(accidental: Accidental): number {
  return {
    "bb": -2,
    "b": -1,
    "": 0,
    "#": 1,
    "##": 2,
  }[accidental];
}

/**
 * Inverse function of `fromAccidental`.
 *
 * @param midi is the semitone offset.
 * @param accidental is the preferred accidental.
 * @returns the accidental.
 */
export function toAccidental(midi: number, accidental: "#" | "b"): Accidental {
  const diatonic = DIATONIC.fromSemitones(midi);
  const partial = modulo(diatonic, 1);
  if (partial !== 0.5) return "";
  return accidental;
}

/**
 * Convert an octave number in SPN to semitone offset from C-1.
 *
 * @param octave is the octave number.
 * @returns is the semitone offset.
 */
export function fromOctave(octave: number) {
  // NOTE: There are 12 semitones per octave. Since MIDI pitch zero corresponds to C-1 (one octave below C0), we add 1 as an additional offset.
  return 12 * (octave + 1);
}

/**
 * Inverse function of `fromOctave`.
 *
 * @param midi is the semitone offset.
 * @returns the octave number.
 */
export function toOctave(midi: number): number {
  return quotient(midi, 12) - 1;
}

/**
 * Converts a pitch to a MIDI pitch number.
 *
 * @param pitch is the pitch data.
 * @returns the MIDI pitch.
 */
export function fromPitch(pitch: Pitch) {
  const { letter, octave, accidental } = pitch;
  return fromLetter(letter) +
    fromAccidental(accidental) +
    fromOctave(octave);
}

/**
 * Inverse function of `fromPitch`.
 *
 * @param midi is the semitone offset.
 * @param accidental is the preferred accidental.
 * @returns the pitch data.
 */
export function toPitch(midi: number, accidental: "#" | "b"): Pitch {
  return {
    letter: toLetter(midi, accidental),
    accidental: toAccidental(midi, accidental),
    octave: toOctave(midi),
  };
}
