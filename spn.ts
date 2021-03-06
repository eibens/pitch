import { Pitch } from "./pitch.ts";

/**
 * Converts from a string to a pitch by parsing the SPN string.
 *
 * @param str is an SPN string.
 * @returns the pitch data parsed from the SPN string.
 * @throws if the string is not valid SPN.
 */
export function parse(str: string): Pitch {
  const pattern = /^([A-G])(b|bb|#|##)?([0-9])$/;
  const match = str.match(pattern);
  if (!match) throw new Error(`could not parse pitch: ${str}`);
  const [, letter, accidental = "", octave] = match;
  return { letter, accidental, octave: parseInt(octave) } as Pitch;
}

/**
 * Converts from a pitch to SPN.
 *
 * @param pitch is the pitch data that should be stringified.
 * @returns the pitch as an SPN string.
 */
export function stringify(pitch: Pitch): string {
  return pitch.letter + pitch.accidental + pitch.octave;
}
