import * as cents from "./cent.ts";

/**
 * Converts from centitones to cents.
 *
 * Two cents are equal to one centitone.
 *
 * @param cents a number of centitones
 * @returns an equivalent number of cents
 */
export function toCents(centitones: number): number {
  return centitones * 2;
}

/**
 * Converts from cents to centitones.
 *
 * A centitone is equal to two cents.
 *
 * @param cents is a number of cents.
 * @returns an equivalent number of centitones.
 */
export function fromCents(cents: number): number {
  return cents / 2;
}

/**
 * Converts from centitones to a ratio.
 *
 * @param centitones is a number of centitones.
 * @return an equivalent frequency ratio.
 */
export function toRatio(centitones: number): number {
  return cents.toRatio(toCents(centitones));
}

/**
 * Converts from a ratio to centitones.
 *
 * @param ratio is a frequency ratio.
 * @return an equivalent number of centitones.
 */
export function fromRatio(ratio: number): number {
  return fromCents(cents.fromRatio(ratio));
}

/**
 * Calculates the interval between two frequencies in centitones.
 *
 * @param f0 is the first frequency.
 * @param f1 is the second frequency.
 * @return a number of centitones equivalent to the difference between `f0` and `f1`.
 */
export function between(f0: number, f1: number): number {
  return fromCents(cents.between(f0, f1));
}
