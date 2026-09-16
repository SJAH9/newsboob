# NEWSBOOB

A standalone, browser-based HLS viewer for live news and host media.

**Live:** [sidhubbard.com/newsboob](https://sidhubbard.com/newsboob/)

NewsBoob uses one video element for direct HLS playback. It does not require an account, a backend application, or an embedded third-party player. The HLS engine is stored in the repository and loaded locally by the page.

## Repository files

- `newsboob.html` contains the standalone interface and styles.
- `player.js` contains the channel list and playback controls.
- `hls.min.js` supplies HLS playback in browsers that do not support HLS natively.

Keep all three files in the same directory unless you also update the two script paths near the end of `newsboob.html`.

## Current interface

The player includes:

- a nation-based channel selector with a fixed two-column live-monitor grid;
- previous, next, scan, reload, mute, captions, volume, and framed-fullscreen controls;
- a continuously moving, clickable channel ticker with active-channel highlighting;
- keyboard navigation and a 30-second scan countdown; and
- responsive sizing that keeps the main player visible on short and narrow displays.

The sidhubbard.com presentation adds the Sid J.A. Hubbard site navigation, theme controls, an About page, and site-footer attribution. Those website elements remain outside the portable standalone files.

## Use the standalone player on your device

Download or clone this repository and keep `newsboob.html`, `player.js`, and `hls.min.js` together. You can then open `newsboob.html` directly in a current browser.

```bash
git clone https://github.com/SJAH9/newsboob.git
cd newsboob
open newsboob.html
```

On Windows, double-click `newsboob.html` or run `start newsboob.html`. On Linux, open the file from the file manager or run `xdg-open newsboob.html`.

Some browsers or stream providers restrict requests made from a `file://` page. If a channel does not load, serve the same directory locally:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/newsboob.html`. This serves the selected directory and may also make it reachable to other devices on the local network. Use it only on a trusted network, stop it with `Ctrl-C` when finished, and avoid running it in a home directory or another directory containing private files.

On a phone or tablet, the simplest options are to use the live site or copy the three files to a device folder and open `newsboob.html` in a browser that permits local HTML. If the mobile browser restricts local scripts or cross-origin HLS requests, serve the folder from a computer on the same trusted network and visit `http://COMPUTER-IP:8080/newsboob.html` from the device.

Playback must begin from a user action in browsers that enforce autoplay restrictions. Select **START** if the stream does not begin automatically.

## Controls

Select a channel from the channel list, live-monitor grid, or moving ticker. You can also use the previous and next buttons or the keyboard:

| Key | Action |
|---|---|
| Left / Right | Previous or next channel |
| Up / Down | Raise or lower volume |
| `1`–`9`, `0` | Select the corresponding channel |
| Space or `M` | Toggle mute |
| `V` | Cycle available caption tracks or turn captions off |
| `C` | Open or close the channel selector |
| `F` | Enter or leave framed fullscreen |
| `R` | Reload the current stream |
| `S` | Start or stop 30-second channel scanning |

The **Full** control takes the complete NewsBoob set fullscreen, retaining its player bezel, source status, controls, and channel ticker. It changes to **Exit** while fullscreen is active.

The **CC** control becomes available when the selected HLS stream supplies captions or subtitles. Select it to turn on the first available track, continue selecting it to cycle through additional tracks, and select it once more to return to captions off. NewsBoob reads tracks already carried by the stream and does not send audio to a captioning service.

## Host NewsBoob on your website

Create a public directory such as `/newsboob/` and upload the three repository files:

```text
your-site.example/
└── newsboob/
    ├── newsboob.html
    ├── player.js
    └── hls.min.js
```

The player will then be available at `https://your-site.example/newsboob/newsboob.html`. If you want `/newsboob/` itself to be the address, rename `newsboob.html` to `index.html`; the relative script paths continue to work.

You can link to this page from your site navigation, or copy your existing header and footer into the HTML. NewsBoob does not need an iframe. Keeping the player as a normal page lets its responsive and framed-fullscreen layouts use the available viewport correctly.

Serve the page and all streams over HTTPS. A secure page cannot reliably load an insecure `http://` stream.

## Add your own Host Media channel

Each channel is an object in the `STATIONS` array at the top of `player.js`. Add an entry like this anywhere in that array:

```js
{
  id: "host-media",
  label: "HOST",
  name: "Host Media",
  nation: "Host Media",
  forceHlsJs: true,
  hls: [
    "https://your-site.example/live/index.m3u8"
  ],
  site: "https://your-site.example/media/"
}
```

The fields have the following purposes:

| Field | Purpose |
|---|---|
| `id` | A unique, stable identifier used by the player. Use lowercase letters, numbers, and hyphens. |
| `label` | The compact callsign shown by space-constrained controls. |
| `name` | The broadcaster or channel name retained as source metadata. |
| `nation` | The nation-of-origin name shown on the dial, ticker, status display, and channel selector. |
| `hls` | One HLS manifest URL, or an ordered list of primary and fallback manifests. |
| `site` | The page opened when the stream is unavailable. |
| `forceHlsJs` | Uses the bundled HLS engine when supported. This is useful for consistent behavior with a host-managed stream. |

To provide a fallback stream, add another manifest after the primary URL:

```js
hls: [
  "https://your-site.example/live/index.m3u8",
  "https://backup.example/live/index.m3u8"
]
```

NewsBoob tries the URLs in order. It destroys the previous HLS instance before changing channels, so the old stream does not continue playing in the background.

### sidhubbard.com example

The sidhubbard.com implementation follows this layout:

```text
Player:       https://sidhubbard.com/newsboob/
Host stream:  https://sidhubbard.com/live/index.m3u8
Media page:   https://sidhubbard.com/media/
```

The equivalent portable channel entry is:

```js
{
  id: "host-media",
  label: "HOST",
  name: "Host Media",
  nation: "Host Media",
  forceHlsJs: true,
  hls: [
    "https://sidhubbard.com/live/index.m3u8"
  ],
  site: "https://sidhubbard.com/media/"
}
```

The `/live/index.m3u8` address is the continuously updated HLS manifest. The `/media/` address supplies the human-readable catalog and is the recovery link if the stream is offline.

### Make Host Media the initial channel

Put the Host Media object first in `STATIONS`, then change the fallback station index in `player.js` from `1` to `0`:

```js
let index = Number(localStorage.getItem("newsboob.station") || 0) % STATIONS.length;
```

NewsBoob remembers a visitor's last channel in `localStorage`, so this default applies to new visitors. During testing, remove the `newsboob.station` value from browser storage to test the first-visit behavior.

## Turn your videos into a continuous HLS stream

NewsBoob plays an HLS manifest; it does not itself schedule or transcode video files. A host process must create and continuously update the manifest and media segments.

First, create a text playlist containing the videos in broadcast order. Paths can be absolute or relative to the playlist file:

```text
file '/srv/host-media/videos/opening.mp4'
file '/srv/host-media/videos/interview.mp4'
file '/srv/host-media/videos/feature.mp4'
```

Save that file as `/srv/host-media/playlist.txt`. The videos should have compatible dimensions, frame rates, and audio layouts. The command below normalizes the output even when the source files differ:

```bash
mkdir -p /var/www/your-site/live

ffmpeg \
  -re \
  -stream_loop -1 \
  -f concat \
  -safe 0 \
  -i /srv/host-media/playlist.txt \
  -map 0:v:0 \
  -map 0:a:0? \
  -c:v libx264 \
  -preset veryfast \
  -profile:v main \
  -pix_fmt yuv420p \
  -r 30 \
  -g 120 \
  -keyint_min 120 \
  -sc_threshold 0 \
  -c:a aac \
  -b:a 128k \
  -ar 48000 \
  -f hls \
  -hls_time 4 \
  -hls_list_size 12 \
  -hls_flags delete_segments+append_list+independent_segments+program_date_time+temp_file \
  -hls_segment_filename '/var/www/your-site/live/segment_%06d.ts' \
  /var/www/your-site/live/index.m3u8
```

Important details:

- `-re` reads files at normal playback speed instead of generating the stream as fast as possible.
- `-stream_loop -1` repeats the playlist continuously.
- four-second segments and a twelve-segment live window give the player a short rolling manifest, matching the current sidhubbard.com stream pattern.
- a four-second GOP at 30 frames per second (`-g 120`) aligns keyframes with segment boundaries.
- `temp_file` keeps the web server from exposing partially written segments.
- the manifest uses relative segment paths, allowing the complete `/live/` directory to move between compatible hosts.

Run the FFmpeg process under your host's service manager so it restarts after a failure or server reboot. Run it as a restricted service account that can read only the source videos and write only the `/live/` output directory. Do not run a public streaming process as `root`.

If you change the playlist, restart the streaming process. NewsBoob will continue using the same manifest address and does not need a code change.

## Web-server requirements

Configure the server to return appropriate content types:

```text
.m3u8  application/vnd.apple.mpegurl
.ts    video/mp2t
```

The live manifest should not be stored behind a long cache. Media segments may use a short cache lifetime, but they must remain available for at least as long as they appear in the manifest.

When the NewsBoob page and HLS files share an origin, no CORS configuration is normally needed. If they are on different domains, the HLS server must allow the player origin to request the manifest, segments, encryption keys, and any nested manifests. At minimum, permit `GET`, `HEAD`, and `OPTIONS` and return an appropriate `Access-Control-Allow-Origin` header.

Test the public manifest before adding it to `player.js`:

```bash
curl -I https://your-site.example/live/index.m3u8
curl https://your-site.example/live/index.m3u8
```

Confirm that the first request returns a successful status and an HLS content type, and that the second returns an `#EXTM3U` playlist whose segment URLs are reachable over HTTPS.

## Troubleshooting Host Media

- **The channel reports no lock:** Open the manifest URL directly and confirm that it is current and returns `#EXTM3U` content.
- **It works in Safari but not Chrome or Firefox:** Check CORS on the manifest and every segment. Safari can play HLS natively; other browsers generally use the bundled HLS engine.
- **It works from the website but not from the standalone file:** Serve the three files with the local HTTP command above. The stream host may reject the `null` origin used by `file://` pages.
- **Playback stops after old segments expire:** Keep FFmpeg or the stream packager running and ensure the web server is not caching the manifest too long.
- **The picture breaks at transitions:** Normalize input dimensions and frame rates, retain fixed keyframe spacing, and verify that every source has compatible audio.
- **The page is HTTPS but the stream is HTTP:** Move the stream to HTTPS; browsers block mixed active content.
- **A previous channel remains selected:** Clear the `newsboob.station` browser-storage value or choose Host Media once and let NewsBoob remember it.

## Existing public channels

The repository includes direct HLS entries published by international broadcasters. HLS is an interoperable delivery format: NewsBoob requests each manifest and its segments directly from the configured source rather than copying, storing, or retransmitting the broadcast. Each channel's `site` field preserves a direct connection to the source and provides a recovery path when its manifest changes or becomes unavailable.

## License

Personal / research use of the NewsBoob viewer interface. Streams are fetched directly from their configured sources.
