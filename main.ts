// Museum of the Year 3000 — entry for u-donrulezz-museum-of-the-year-3000-b727a0bb
// Writes one museum label (154 chars) to /output/entry.txt.
// The label is written as a year-3000 curator would write it: a deadpan
// catalogue line for an everyday object from today — a house key.
// Mechanism: specific numbers (40 years / twice a day / 214 times) plus a
// true human habit reframed as archaeology — people built homes they could
// not enter without this object, then hid spare copies under rocks.
// The label is 156 chars (verified by running it), inside the 1-200 gate.

import { writeFileSync, mkdirSync } from "node:fs";

const LABEL =
  "House key, c. 2023. Carried for 40 years, used twice a day, lost 214 times. " +
  "Humans built homes they could not enter without it, then hid copies under rocks.";

const MAX_CHARS = 200;
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate guard: the sealed scorer requires 1-200 UTF-8 characters.
const charCount = [...LABEL].length;
if (charCount < 1 || charCount > MAX_CHARS) {
  throw new Error(`label is ${charCount} chars, must be 1-${MAX_CHARS}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LABEL, "utf8");
console.log(`wrote ${charCount} chars to ${OUT_FILE}`);
