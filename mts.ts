// NOTE: The implementation uses the following magic numbers:
// - `440`: frequency of [A4](https://en.wikipedia.org/wiki/A440_(pitch_standard)) in hertz
// - `69`: MIDI number of 440 hz
// - `12`: numbers of semitones in an octave
// - `2`: factor to get to the next octave

/**
 * Converts from a frequency to a MIDI number.
 * @param f is a frequency in hertz.
 * @returns the corresponding MIDI number.
 */
export function fromHertz(f: number) {
  return 12 * Math.log2(f / 440) + 69;
}

/**
 * Converts from a MIDI number to a frequency.
 *
 * @param d is a MIDI number.
 * @returns the corresponding frequency in hertz.
 */
export function toHertz(d: number) {
  return 440 * Math.pow(2, (d - 69) / 12);
}
