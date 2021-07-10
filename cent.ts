/**
 * Converts from cents to a ratio.
 *
 * @param cents is a number of cents.
 * @return an equivalent frequency ratio.
 */
export function toRatio(cents: number) {
  return Math.pow(2, cents / 1200);
}

/**
 * Converts from a ratio to cents.
 *
 * @param ratio is a frequency ratio.
 * @return an equivalent number of cents.
 */
export function fromRatio(ratio: number): number {
  return 1200 * Math.log2(ratio);
}

/**
 * Calculates the interval between two frequencies in cents.
 *
 * @param f0 is the first frequency.
 * @param f1 is the second frequency.
 * @return a number of cents equivalent to the difference between `f0` and `f1`.
 */
export function between(f0: number, f1: number) {
  return fromRatio(f1 / f0);
}
