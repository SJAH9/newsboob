# NEWSBOOB

A standalone world-news tuner: one player, one dial.

**Live:** [sidhubbard.com/newsboob](https://sidhubbard.com/newsboob)

Open `newsboob.html` in a browser, or use the live URL. No account. No extra chrome ads.

The repository file is the standalone presentation. The website’s `/newsboob/` page is the embedded presentation. Both load the same local `player.js` core and local HLS engine; only the site navigation wrapper differs. Neither presentation uses an iframe.

## Stations

| Dial | Source |
|------|--------|
| DW | Deutsche Welle HLS |
| F24 | France 24 HLS |
| EUR | Euronews English HLS |
| RT | RT News HLS |
| CNA | CNA Singapore HLS |
| SKY | Sky News HLS |
| ABC AU | ABC News Australia HLS (with browser-side fallback) |
| BBG | Bloomberg TV HLS |
| CBS | CBS News 24/7 HLS |
| NMX | Newsmax HLS |
| FIRST | The First TV HLS |
| FSTV | Free Speech TV direct HLS |

All stations use browser-direct HLS. The HLS engine is included locally; the player does not load an embedded third-party player.

## Controls

Click **START**, then turn the dial, click a callsign, use Prev/Next, keys `1`–`9` and `0`, or the arrows. Left/right arrows change channels; up/down arrows adjust volume; Space toggles mute; `C` opens or closes the channel drawer; `F` toggles fullscreen; `R` reloads the video; and `S` toggles scan mode. Keyboard navigation is serialized so rapid arrow presses cannot leave a previous HLS feed attached.

Use the `<<` control (or press `C`) to hide the tuner panel and give the main player the full width. The control changes to `>>` to restore the tuner.

The **Full** control takes the complete NEWSBOOB set fullscreen, retaining the wordmark, tuner, source status, controls, and player bezel. It changes to **Exit** while fullscreen is active.

The top **Scan** control starts automatic channel changes every 30 seconds. While scanning, it becomes a countdown timer; the adjacent previous/next buttons change channels and reset the countdown. Click the countdown to stop scanning.

A continuously moving ticker between the source indicator and volume controls lists every channel repeatedly. Each name is clickable and the active channel is highlighted.

While a station is locked, a fixed-position two-column monitor grid sits under the dial. Compatible stations show a live landscape thumbnail with a visible channel title beneath it; hover or focus a thumbnail for a larger title overlay. Click a thumbnail to tune that channel.

## License

Personal / research use of this tuner UI. Streamed video remains the property of each broadcaster.
