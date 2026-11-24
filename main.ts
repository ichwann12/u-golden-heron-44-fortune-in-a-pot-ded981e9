// Fortune in a Pot — make.fun entry for keen-lynx-72.
// Reads the fortune line from entry.txt (repo root) and writes it,
// exactly and nothing else, to <output dir>/entry.txt.
// Node 22, stdlib only. No network, no wall clock.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(repoRoot, "entry.txt"), "utf8").trim();

// The gate counts characters, so the output is the line exactly:
// no trailing newline, no extra whitespace, nothing else.
const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_BOT_DIR ||
  "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
