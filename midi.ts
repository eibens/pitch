import { Accidental, Letter, parse, Pitch } from "./spn.ts";

/**
 * Converts a pitch letter to a semitone offset within the C major scale.
 *
 * Since MIDI number zero corresponds to C-1 (one octave below C0), C is used as the origin.
 *
 * @param letter is the pitch letter that should be converted.
 * @returns is the corresponding semitone offset.
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
 * Converts an accidental to a semitone offset.
 *
 * This works because [enharmonic](https://en.wikipedia.org/wiki/Enharmonic) notes are mapped to the same MIDI number.
 *
 * @param accidental is the accidental that should be converted.
 * @returns is the corresponding semitone offset.
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
 * Convert an octave number in SPN to semitone offset from C-1.
 *
 * @param octave is the octave number that should be converted.
 * @returns is the corresponding semitone offset.
 */
export function fromOctave(octave: number) {
  // NOTE: There are 12 semitones per octave. Since MIDI pitch zero corresponds to C-1 (one octave below C0), we add 1 as an additional offset.
  return 12 * (octave + 1);
}

/**
 * Converts a pitch to a MIDI pitch number.
 *
 * @param pitch is the pitch data that should be converted.
 * @returns is the corresponding MIDI pitch.
 */
export function fromPitch(pitch: Pitch) {
  const { letter, octave, accidental } = pitch;
  return fromLetter(letter) +
    fromAccidental(accidental) +
    fromOctave(octave);
}

/**
 * Convert an SPN string to a MIDI pitch.
 *
 * @param pitch is a pitch in SPN.
 * @returns is the corresponding MIDI pitch.
 */
export function fromString(pitch: string): number {
  return fromPitch(parse(pitch));
}
