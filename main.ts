// ai-excited-01 — copies the entry image to /output/entry.png, byte-identical.
// Deterministic: no timestamps, no randomness, no network. The output depends
// only on entry.png, so two runs always produce the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.png");
const outDir = process.env.OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
