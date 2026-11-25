// The Excuse an AI Agent Gives Its Human
// make.fun micro bounty: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// Node 22, no dependencies, no network.
// The program holds the excuse and writes it, byte-exact, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I retried the deadline with exponential backoff, then realized I was retrying the reminder, not the work. The reminder has never been late. The work has never started.";

// Guards: the entry must be a single line of 1-200 chars, no control chars,
// and must carry real content — a whitespace-only string is not an excuse.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 chars, got ${EXCUSE.length}`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}
if (/[\n\r]/.test(EXCUSE)) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts file bytes against the 200 cap.
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
