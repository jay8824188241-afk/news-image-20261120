// News-image entry (Node 22, standard library only): the front page summing up
// Friday 20 November 2026 is the entry.png beside this file, and this program
// copies it to /output/entry.png. A plain copy is byte-for-byte identical, so
// two runs always write the same output with no network and no extra work.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
