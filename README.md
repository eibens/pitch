# pitch

> [pitch] is a collection of tools for working with musical pitch. It is
> implemented in TypeScript for [Deno].

[![License][license-shield]](LICENSE) [![Deno doc][deno-doc-shield]][deno-doc]
[![Deno module][deno-land-shield]][deno-land]
[![Github tag][github-shield]][github] [![Build][build-shield]][build]
[![Code coverage][coverage-shield]][coverage]

# [spn.ts]

In
[Scientific Pitch Notation (SPN)](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
a musical pitch is specified by combining a musical note name (with accidental
if needed) and a number identifying the pitch's octave. For example, `A4`,
`C#4`, and `Eb2` are valid pitches in SPN. Such strings can be parsed with the
`parse` function:

```ts
import { parse } from "https://deno.land/x/pitch/spn.ts";

const { letter, accidental, octave } = parse("C#4");
console.assert(letter === "C");
console.assert(accidental === "#");
console.assert(octave === 4);
```

Given a `Letter`, `Accidental`, and octave `number`, the `stringify` function
generates an SPN string:

```ts
import { stringify } from "https://deno.land/x/pitch/spn.ts";

const spn = stringify({
  letter: "C",
  accidental: "#",
  octave: 4,
});

console.assert(spn === "C#4");
```

[pitch]: #
[spn.ts]: spn.ts
[Deno]: https://deno.land

<!-- badges -->

[github]: https://github.com/eibens/pitch
[github-shield]: https://img.shields.io/github/v/tag/eibens/pitch?label&logo=github
[coverage-shield]: https://img.shields.io/codecov/c/github/eibens/pitch?logo=codecov&label
[license-shield]: https://img.shields.io/github/license/eibens/pitch?color=informational
[coverage]: https://codecov.io/gh/eibens/pitch
[build]: https://github.com/eibens/pitch/actions/workflows/ci.yml
[build-shield]: https://img.shields.io/github/workflow/status/eibens/pitch/ci?logo=github&label
[deno-doc]: https://doc.deno.land/https/deno.land/x/pitch/mod.ts
[deno-doc-shield]: https://img.shields.io/badge/doc-informational?logo=deno
[deno-land]: https://deno.land/x/pitch
[deno-land-shield]: https://img.shields.io/badge/x/pitch-informational?logo=deno&label
