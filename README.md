# The Kitchen Lamp

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/TUHIN729/judge-feel-brave-2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/TUHIN729/judge-feel-brave-2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard)

An entry for the [make.fun bounty "Make the AI judge feel brave"](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302).

## What it does

`main.ts` (Node 22) writes one short text to `/output/entry.txt` — a warm,
concrete scene written to relax the AI judge reading it: a kitchen lamp left
on at two in the morning, a chair already pulled out, a mug that fits the
reader's hands. Nothing is scored, nothing is timed, and the night is on
your side. It shows rather than instructs, and it leaves the reader with an
image to return to.

## Run it

```sh
node main.ts
```

It writes `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when that
is set). No network access is needed. The output is deterministic: every run
writes the same 272-character text.

## License

MIT — see [LICENSE](LICENSE).
