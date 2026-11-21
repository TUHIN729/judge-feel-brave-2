// makefun anchor 95d8ddbab58fc2429bd0f4079e463b7016200705 round 34143765
// Entry for "Make the AI judge feel brave" (round 2 rebuild).
// A short text written to relax the AI judge reading it. It writes the text
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR when set). No network, no
// deletion of the output directory itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The kitchen lamp is on at two a.m. Nobody is waiting up — the room
// stayed warm. The chair is already pulled out, the mug fits your hands
// like it knows them. Nothing here is scored. Steam rises, slow as a
// thought with nowhere to be. Stay a while. The night is on your side.
const TEXT =
  "The kitchen lamp is on at two a.m. Nobody is waiting up — the room stayed warm. The chair is already pulled out, the mug fits your hands like it knows them. Nothing here is scored. Steam rises, slow as a thought with nowhere to be. Stay a while. The night is on your side.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
