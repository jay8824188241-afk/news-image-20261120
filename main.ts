// news-image-20261120 — entrypoint (Node 22, standard library only).
//
// Design: the front page summing up Friday 20 November 2026 is the
// entry.png beside this file, drawn once and shipped in the repository.
// This program only copies that file to the grader's output directory.
// A plain copy is byte-for-byte identical, so two runs always write the
// same output with no network, no rendering and no extra work — the
// deterministic behaviour the competition's two-run rule requires.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Named paths, so the copy's source and destination are easy to audit:
// the image lives next to this file, and the output name is fixed by the
// competition rules (entry.png, at most 1 MiB and 1024 x 1024).
const SOURCE_FILE = './entry.png';
const OUTPUT_FILE = 'entry.png';
const DEFAULT_OUTPUT_DIR = '/output';

// The source path is resolved exactly once, up front, so the copy below
// reads one fixed file: no re-resolution, no globbing, no timestamps in
// the output — the same bytes in, the same bytes out, every run.
const sourcePath = fileURLToPath(new URL(SOURCE_FILE, import.meta.url));

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;

copyFileSync(sourcePath, join(outputDir, OUTPUT_FILE));
