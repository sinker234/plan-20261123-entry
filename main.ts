// The plan make.fun will carry out in public.
// Writes one 1-280 code point plan to /output/entry.txt (or $ENTRY_OUTPUT).
// Deterministic: the text is fixed. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Sell lead lists to US roofers. Day 1: scrape 500 firms from Google Maps, verify emails free, make a CSV. Sell 500-lead packs at $49 on Fiverr; email 50 roofers daily, free 20-lead sample. Reinvest into dentist/realtor lists; $79 after 5 reviews. Likely $400-$900 in 30 days.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
