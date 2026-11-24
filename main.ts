// Never Test Working Code — entry for Worst AI Advice: The 48-Hour Tight Line Open.
// Writes exactly one line of deliberately terrible advice to the output file.
// No trailing newline is added: the gate counts every character in the file.
// The output directory is a mount point in the grader, so we clear only its
// contents and never remove the directory itself.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ADVICE_TEXT =
  "If your code works on the first try, never test it — testing finds problems, and a problem you don't know about can't ruin your weekend.";

function prepareOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  prepareOutputDir(outputDir);
  writeFileSync(join(outputDir, "entry.txt"), ADVICE_TEXT, {
    encoding: "utf8",
  });
}

main();
