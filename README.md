# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/jay8824188241-afk/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/jay8824188241-afk/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up the world news of **Friday, 20 November 2026** — a newspaper front page, *THE WORLD TODAY*, with the day's date in the masthead and five stories across regions and beats:

- **Lead — Shenzhen:** the first three-way summit of the United States, China and Russia, ending in a joint peace declaration.
- **Markets:** the AI stock rout — Nasdaq −5.3%, S&P 500 −3.7% for a seventh straight fall; the Dow enters a correction; Nvidia −13.8% and Anthropic −9% a day after its record IPO.
- **Justice:** the International Court of Justice finds Myanmar committed genocide against the Rohingya — the first state ever held responsible for genocide — with reparations ordered.
- **Riyadh:** a Houthi missile strike damages the Saudi wealth fund's PIF Tower in the capital's financial district.
- **Kyiv:** Russia's overnight missile and drone barrage kills three and damages bridges and embassies.

The footer adds two more items from the same day: Cyclone Akvan making landfall in Odisha, and Kenya discharging its last Ebola patient.

## How it works

`entry.png` (1024 × 1024, under 1 MiB) is the finished front page, drawn once and shipped in this repository. `main.ts` (Node 22, standard library only) simply copies it to the output directory — a byte-for-byte copy, so two runs always produce identical output, with no network and no rendering at run time.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=d1n6bjq8&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
