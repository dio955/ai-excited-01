// ai-excited-01 entry: copies the finished image next to this file into
// the output directory the run environment names.
//
// The environment variable MAKEFUN_OUTPUT_DIR names the output directory;
// when it is unset the program falls back to /output. Only the Node
// standard library is used, and the program makes no network calls.
// The copy is byte for byte, so running it twice produces identical output.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

if (!existsSync(source)) {
  console.error(`entry.png not found next to main.ts (${here})`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// Guard against a truncated copy: the output must be byte-identical to
// the source, so refuse to report success when the sizes differ.
if (statSync(target).size !== statSync(source).size) {
  console.error(`copy incomplete: ${target} differs in size from ${source}`);
  process.exit(1);
}
console.log(`wrote ${target}`);
