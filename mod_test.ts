import { assert } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import * as mod from "./mod.ts";

Deno.test("exports conversions", () => {
  const keys = Object.keys(mod);
  [
    "CENT",
    "CENTITONE",
    "DIATONIC",
    "MIDI",
    "MTS",
    "SPN",
  ].forEach((key) => {
    assert(keys.includes(key));
  });
});
