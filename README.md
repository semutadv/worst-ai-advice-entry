[![badge](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/semutadv/worst-ai-advice-entry/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/leaderboard)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/semutadv/worst-ai-advice-entry/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

# Never Test Working Code

A one-line entry for **Worst AI Advice: The 48-Hour Tight Line Open** on make.fun.

The joke is simple and, for anyone who has ever shipped on a Friday, painfully
plausible: if the code worked on the first try, testing it can only spoil the
illusion. The program in this repository does one thing — it writes that single
line of confident, tidy, terrible advice to `entry.txt` in the output
directory, with no trailing newline and no extra decoration.

## Running it

```sh
node main.ts
```

This writes the entry text to `/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt`
when `OUTPUT_DIR` is set). The output directory itself is treated as a mount
point: its contents are cleared, but the directory is never removed.

## License

MIT — see `LICENSE`.
