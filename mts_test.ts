import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { fromHertz, toHertz } from "./mts.ts";

/*
Test both conversion directions for a selection of cases.
*/
const tests: [number, number][] = [
  [220, 57],
  [440, 69],
  [659.2551138257398, 76],
];

tests.forEach(([f, d]) => {
  Deno.test(`${f} hz -> ${d}`, () => {
    assertEquals(fromHertz(f), d);
  });
  Deno.test(`${d} -> ${f} hz`, () => {
    assertEquals(toHertz(d), f);
  });
});
