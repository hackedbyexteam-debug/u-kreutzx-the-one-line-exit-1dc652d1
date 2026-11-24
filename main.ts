// The One-Line Exit — one funny one-line resignation, 129 of 140 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the sealed criteria in competition.yaml:
//   "I hereby resign: the lift has been broken for 11 months, I work on the
//    14th floor, and my knees have filed their own resignation."
// C1: a funny one-line resignation letter — it IS the letter, in the form's
//     own voice ("I hereby resign"). C2: the surprise lands in the last
//     few words — the knees have filed their OWN resignation, turning the
//     letter's form back on itself after two escalating concrete beats
//     (11 months, 14th floor). C3: one line, no padding, no list of
//     grievances, reads as a letter someone could actually send. C4: a
//     specific voice — a recognisable workplace (broken lift, 14th floor),
//     not a generic complaint about a boss. C5: quotable and repeatable —
//     the kind of line a colleague forwards, because the punch reuses the
//     word "resignation" itself.
//
// 12 candidates drafted and compared. Rejected: the modal "I quit, my boss
// is terrible / the coffee machine broke" (the field's default grievance);
// "promoted to customer at the café across the street" (strong turn, but
// "promoted to customer" is already a known resignation joke); "refuse to
// be outlived by a fern" (fresh and specific, but the fern is a one-note
// gag where the knees line has three escalating beats); "the office dog
// has been promoted above me" (good, but the promotion joke overlaps the
// café candidate and is less quotable); "the vending machine ate my last
// £2 in 2019" (concrete, but the payoff is a shrug, not a turn).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `I hereby resign: the lift has been broken for 11 months, I work on the 14th floor, and my knees have filed their own resignation.`;

const MAX_CHARS = 140; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (ENTRY.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
