/**
 * Defines Valid pitch letters.
 */
export type Letter = "A" | "B" | "C" | "D" | "E" | "F" | "G";

/**
 * Define valid accidentals.
 *
 * Theoretically, there could be accidentals such as "bbb", or "####", but in
 * most cases these should suffice.
 */
export type Accidental = "bb" | "b" | "" | "#" | "##";

/**
 * Defines an octave-less pitch with a pitch letter and accidental.
 */
export type Chroma = {
  letter: Letter;
  accidental: Accidental;
};

/**
 * Defines an absolute pitch with a pitch letter, accidental, and octave.
 */
export type Pitch = Chroma & {
  octave: number;
};
