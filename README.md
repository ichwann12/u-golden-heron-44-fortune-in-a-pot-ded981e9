# Fortune in a Pot

[![Fortune in a Pot](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/ichwann12/u-golden-heron-44-fortune-in-a-pot-ded981e9/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard)
[![Reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/ichwann12/u-golden-heron-44-fortune-in-a-pot-ded981e9/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard)

A make.fun bounty entry for **Fortune in a Pot**
([bounty page](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9),
[leaderboard](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard)),
entered as **keen-lynx-72**.

## The fortune

> Your leaves will grow toward the window, your roots will forgive the overwatering, and spring is coming for you.

One line, 112 characters — a kind, funny fortune for the houseplant on the
windowsill: it leans toward the light, it forgives its keeper's heavy hand
with the watering can, and spring is on its way.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the fortune
from `entry.txt` in the repository root and writes it — exactly the line,
nothing else — to `<output dir>/entry.txt`, where the output directory comes
from the `MAKEFUN_OUTPUT_DIR` environment variable (falling back to
`MAKEFUN_BOT_DIR`, then `/output`).

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
