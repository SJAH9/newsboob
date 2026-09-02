    const STATIONS = [
      {
        id: "dw", label: "DW", name: "Deutsche Welle",
        hls: [
          "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
          "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8"
        ],
        site: "https://www.dw.com/en/live-tv/channel-english"
      },
      {
        id: "f24", label: "F24", name: "France 24",
        hls: [
          "https://live.france24.com/hls/live/2037218-b/F24_EN_HI_HLS/master_5000.m3u8",
          "https://live.france24.com/hls/live/2037218/F24_EN_HI_HLS/master_5000.m3u8"
        ],
        site: "https://www.france24.com/en/live"
      },
      {
        id: "eur", label: "EUR", name: "Euronews",
        hls: [
          "https://cdn-euronews.akamaized.net/live/eds/euronews-en/25002/index.m3u8"
        ],
        site: "https://www.euronews.com/live"
      },
      {
        id: "rt", label: "RT", name: "RT News",
        hls: [
          "https://rt-glb.rttv.com/dvr/rtnews/playlist.m3u8",
          "https://rt-glb.rttv.com/live/rtnews/playlist.m3u8"
        ],
        site: "https://www.rt.com/"
      },
      {
        id: "cna", label: "CNA", name: "CNA Singapore",
        hls: [
          "https://mediacorp-nca-prod-videos-bclive.akamaized.net/6379472319112/ap-southeast-1/6057994443001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoicGE2ODB1LmVncmVzcy5wcHRpOHciLCJhY2NvdW50X2lkIjoiNjA1Nzk5NDQ0MzAwMSIsImVobiI6Im1lZGlhY29ycC1uY2EtcHJvZC12aWRlb3MtYmNsaXZlLmFrYW1haXplZC5uZXQiLCJpc3MiOiJibGl2ZS1wbGF5YmFjay1zb3VyY2UtYXBpIiwic3ViIjoicGF0aG1hcHRva2VuIiwiYXVkIjpbIjYwNTc5OTQ0NDMwMDEiXSwianRpIjoiNjM3OTQ3MjMxOTExMiJ9.Cw77amOc6efNO32Sw9nD0SOhjQUc5ewKN8ZWJOPt15Y/playlist-hls.m3u8"
        ],
        site: "https://www.channelnewsasia.com/watch"
      },
      {
        id: "abcau", label: "ABC AU", name: "ABC News Australia",
        hls: [
          "https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8",
          "https://c.mjh.nz/abc-news.m3u8"
        ],
        site: "https://www.abc.net.au/news/newschannel"
      },
      {
        id: "sky", label: "SKY", name: "Sky News",
        hls: [
          "https://linear901-oo-hls0-prd-gtm.delivery.skycdp.com/17501/sde-fast-skynews/master.m3u8",
          "https://linear901-oo-hls0-prd-gtm.delivery.skycdp.com/v1/master/6404a5d732e04991ed59ac7790b61cc065c9aabd/prod-gb-lin-skynews-hls-25-web/master.m3u8"
        ],
        site: "https://news.sky.com/watch-live"
      },
      {
        id: "bbg", label: "BBG", name: "Bloomberg TV",
        hls: [
          "https://www.bloomberg.com/media-manifest/streams/us.m3u8"
        ],
        site: "https://www.bloomberg.com/live"
      },
      {
        id: "cbs", label: "CBS", name: "CBS News 24/7",
        hls: [
          "https://news20e7hhcb.airspace-cdn.cbsivideo.com/index.m3u8",
          "https://cbsnews.akamaized.net/hls/live/2020607/cbsnlineup_8/master.m3u8"
        ],
        site: "https://www.cbsnews.com/live/"
      },
      {
        id: "nmx", label: "NMX", name: "Newsmax",
        hls: [
          "https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8"
        ],
        site: "https://www.newsmax.com/max-tv/"
      },
      {
        id: "first", label: "FIRST", name: "The First TV",
        hls: [
          "https://thefirst-oando.amagi.tv/hls/amagi_hls_data_thefirstd-thefirst-oando/CDN/playlist.m3u8"
        ],
        site: "https://www.thefirsttv.com/watch/the-first-tv-live/"
      },
      {
        id: "fstv", label: "FSTV", name: "Free Speech TV",
        forceHlsJs: true,
        hls: [
          "https://na.linear.zype.com/f2f02a72-71d0-45f3-829f-4ae51f721102/86ef0177-697d-41c4-be57-c4d1a2b83cad-hls4/manifest/live_19.m3u8?rendition=480"
        ],
        site: "https://freespeech.org/live-tv/"
      }
    ];

    const el = {
      dial: document.getElementById("dial"),
      ticks: document.getElementById("ticks"),
      pointer: document.getElementById("pointer"),
      call: document.getElementById("call"),
      live: document.getElementById("live"),
      sub: document.getElementById("sub"),
      veil: document.getElementById("veil"),
      offair: document.getElementById("offair"),
      offTitle: document.getElementById("offTitle"),
      offCopy: document.getElementById("offCopy"),
      offLink: document.getElementById("offLink"),
      power: document.getElementById("power"),
      pwrLed: document.getElementById("pwrLed"),
      video: document.getElementById("hlsVideo"),
      ytHost: document.getElementById("yt"),
      vol: document.getElementById("vol"),
      muteBtn: document.getElementById("muteBtn"),
      fsBtn: document.getElementById("fsBtn"),
      prevBtn: document.getElementById("prevBtn"),
      nextBtn: document.getElementById("nextBtn"),
      panelBtn: document.getElementById("panelBtn"),
      reloadBtn: document.getElementById("reloadBtn"),
      scanBtn: document.getElementById("scanBtn"),
      scanPrevBtn: document.getElementById("scanPrevBtn"),
      scanNextBtn: document.getElementById("scanNextBtn"),
      layout: document.getElementById("layout"),
      previews: document.getElementById("previews"),
      titleChan: document.getElementById("titleChan"),
      tickerTrack: document.getElementById("tickerTrack"),
      clock: document.getElementById("clock")
    };

    let on = false;
    let index = Number(localStorage.getItem("newsboob.station") || 0) % STATIONS.length;
    let locked = -1;
    let token = 0;
    let hls = null;
    const previewPlayers = new Map();
    let muted = false;
    let panelOpen = localStorage.getItem("newsboob.panel") !== "0";
    let dragging = false;
    let dragIndex = index;
    let scanTimer = null;
    let scanMode = false;
    let scanDeadline = 0;
    const STEP = 360 / STATIONS.length;
    let needle = index * STEP;

    STATIONS.forEach((s, i) => {
      const tick = document.createElement("div");
      tick.className = "tick";
      tick.style.transform = `rotate(${i * STEP}deg)`;
      tick.innerHTML = `<i></i><span style="transform:rotate(${-i * STEP}deg)">${s.label}</span>`;
      tick.querySelector("span").addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        e.preventDefault();
        go(i);
      });
      el.ticks.appendChild(tick);
      const tickerButton = document.createElement("button");
      tickerButton.type = "button";
      tickerButton.textContent = s.name;
      tickerButton.dataset.stationIndex = String(i);
      tickerButton.setAttribute("aria-label", "Select " + s.name);
      tickerButton.addEventListener("click", () => go(i));
      el.tickerTrack.appendChild(tickerButton);
    });
    const tickerButtons = [...el.tickerTrack.children];
    for (let repeat = 0; repeat < 2; repeat += 1) {
      tickerButtons.forEach((button) => {
        const clone = button.cloneNode(true);
        clone.addEventListener("click", () => go(Number(clone.dataset.stationIndex)));
        el.tickerTrack.appendChild(clone);
      });
    }

    function setPointer(i) {
      const target = i * STEP;
      const delta = ((target - needle + 540) % 360) - 180;
      needle += delta;
      el.pointer.style.transform = `rotate(${needle}deg)`;
      [...el.ticks.children].forEach((t, n) => t.classList.toggle("on", n === i));
    }

    function stopHls() {
      if (hls) { hls.destroy(); hls = null; }
      el.video.onloadedmetadata = null;
      el.video.onerror = null;
      el.video.pause();
      el.video.removeAttribute("src");
      el.video.load();
      el.video.style.display = "none";
    }

    function stopYt() {
      el.ytHost.innerHTML = "";
      el.ytHost.style.display = "none";
    }

    function hlsList(station) {
      if (!station.hls) return [];
      return Array.isArray(station.hls) ? station.hls : [station.hls];
    }

    function hlsPreviewConfig() {
      return {
        enableWorker: true,
        lowLatencyMode: false,
        capLevelToPlayerSize: true,
        maxBufferLength: 6,
        maxMaxBufferLength: 10,
        startLevel: 0,
        xhrSetup(xhr) {
          try { xhr.withCredentials = false; } catch (_) {}
        }
      };
    }

    function attachPreviewStream(video, url) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = url;
        video.play().catch(() => {});
        return { native: true };
      }
      if (window.Hls && Hls.isSupported()) {
        const player = new Hls(hlsPreviewConfig());
        player.on(Hls.Events.MANIFEST_PARSED, () => {
          if (player.levels && player.levels.length) player.currentLevel = 0;
          video.play().catch(() => {});
        });
        player.loadSource(url);
        player.attachMedia(video);
        return { hls: player };
      }
      return null;
    }

    function killPreview(id) {
      const rec = previewPlayers.get(id);
      if (!rec) return;
      if (rec.hls) {
        try { rec.hls.destroy(); } catch (_) {}
      }
      if (rec.video) {
        rec.video.pause();
        rec.video.removeAttribute("src");
        rec.video.load();
      }
      rec.tile.remove();
      previewPlayers.delete(id);
    }

    function startPreview(station, stationIndex, url, urlIndex) {
      if (previewPlayers.has(station.id)) return;
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "preview";
      tile.setAttribute("aria-label", "Monitor " + station.name);
      tile.title = station.name;
      const hoverLabel = document.createElement("span");
      hoverLabel.className = "hover-label";
      hoverLabel.textContent = station.name;
      tile.appendChild(hoverLabel);
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = station.name;
      tile.addEventListener("click", () => go(stationIndex));
      el.previews.appendChild(tile);

      if (!url) {
        tile.classList.add("live-off");
        tile.appendChild(tag);
        previewPlayers.set(station.id, { video: null, tile, hls: null });
        return;
      }

      const video = document.createElement("video");
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.disablePictureInPicture = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("disablepictureinpicture", "");
      tile.appendChild(video);
      tile.appendChild(tag);

      const fail = () => {
        if (!previewPlayers.has(station.id)) return;
        const urls = hlsList(station);
        if (urlIndex + 1 < urls.length) {
          killPreview(station.id);
          startPreview(station, stationIndex, urls[urlIndex + 1], urlIndex + 1);
          return;
        }
        tile.classList.add("live-off");
      };

      const handle = attachPreviewStream(video, url);
      if (!handle) {
        tile.classList.add("live-off");
        previewPlayers.set(station.id, { video, tile, hls: null });
        return;
      }
      if (handle.hls) {
        handle.hls.on(Hls.Events.ERROR, (_, data) => {
          if (data && data.fatal) fail();
        });
      }
      video.addEventListener("error", fail);
      previewPlayers.set(station.id, { video, tile, hls: handle.hls || null });
    }

    function syncPreviews() {
      if (!on || !panelOpen) {
        [...previewPlayers.keys()].forEach(killPreview);
        el.previews.classList.remove("on");
        return;
      }
      const want = STATIONS
        .map((s, i) => ({
          s,
          i,
          urls: hlsList(s)
        }));
      [...previewPlayers.keys()].forEach((id) => {
        if (!want.some((row) => row.s.id === id)) killPreview(id);
      });
      want.forEach(({ s, i, urls }) => {
        if (!previewPlayers.has(s.id)) startPreview(s, i, urls[0] || null, 0);
        else el.previews.appendChild(previewPlayers.get(s.id).tile);
        previewPlayers.get(s.id).tile.classList.toggle("active", i === index);
      });
      el.previews.classList.toggle("on", previewPlayers.size > 0);
    }

    function setStatus(src, detail) {
      const s = STATIONS[index];
      el.call.textContent = on ? s.label : "STANDBY";
      el.live.classList.toggle("off", !on);
      el.sub.textContent = detail || s.name;
      el.pwrLed.className = "dot" + (on ? " on" : "");
      el.titleChan.textContent = on ? ": " + s.name : "";
      [...el.tickerTrack.children].forEach((button) => button.classList.toggle("active", on && Number(button.dataset.stationIndex) === index));
    }

    function playHls(url, gen, forceHlsJs) {
      return new Promise((resolve, reject) => {
        stopHls();
        stopYt();
        hideOffAir();
        el.video.style.display = "block";
        el.video.playsInline = true;
        el.video.autoplay = true;
        el.video.muted = muted;
        el.video.volume = Number(el.vol.value) / 100;

        let settled = false;
        let recoveries = 0;
        const fail = (err) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          if (gen !== token) return reject(err);
          stopHls();
          reject(err || new Error("hls"));
        };
        const keepAlive = (data) => {
          if (!hls) return;
          if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
            hls.startLoad();
            return;
          }
          if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
            recoveries += 1;
            if (recoveries % 3 === 0) hls.swapAudioCodec();
            hls.recoverMediaError();
          }
        };
        const startPlayback = () => {
          const done = () => resolve("hls");
          el.video.play().then(done).catch(() => {
            el.video.muted = true;
            muted = true;
            applyVolume();
            el.video.play().then(done).catch(done);
          });
        };
        const ok = () => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          if (gen !== token) return;
          startPlayback();
        };
        const timer = setTimeout(() => fail(new Error("timeout")), 14000);

        const hlsJsSupported = !!(window.Hls && Hls.isSupported());
        if (el.video.canPlayType("application/vnd.apple.mpegurl") && !(forceHlsJs && hlsJsSupported)) {
          el.video.src = url;
          el.video.onloadedmetadata = ok;
          el.video.onerror = () => fail(new Error("video"));
          return;
        }
        if (hlsJsSupported) {
          hls = new Hls({
            enableWorker: true,
            lowLatencyMode: false,
            capLevelToPlayerSize: false,
            startLevel: -1,
            abrEwmaDefaultEstimate: 8000000,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 8,
            maxBufferLength: 24,
            maxMaxBufferLength: 48,
            backBufferLength: 12,
            manifestLoadingTimeOut: 15000,
            fragLoadingTimeOut: 20000,
            xhrSetup(xhr) {
              try { xhr.withCredentials = false; } catch (_) {}
            }
          });
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            const levels = hls.levels || [];
            let best = 0;
            levels.forEach((lvl, i) => {
              const h0 = levels[best].height || 0;
              const h1 = lvl.height || 0;
              if (h1 > h0 || (h1 === h0 && (lvl.bitrate || 0) > (levels[best].bitrate || 0))) best = i;
            });
            hls.autoLevelCapping = -1;
            hls.startLevel = best;
            hls.nextLevel = best;
            ok();
          });
          hls.on(Hls.Events.ERROR, (_, data) => {
            if (!data.fatal) {
              if (data.details === "bufferStalledError") hls.startLoad();
              return;
            }
            if (settled) {
              keepAlive(data);
              return;
            }
            if (recoveries < 3 && data.type === Hls.ErrorTypes.NETWORK_ERROR) {
              recoveries += 1;
              hls.startLoad();
              return;
            }
            if (recoveries < 3 && data.type === Hls.ErrorTypes.MEDIA_ERROR) {
              recoveries += 1;
              hls.recoverMediaError();
              return;
            }
            fail(data);
          });
          hls.loadSource(url);
          hls.attachMedia(el.video);
          return;
        }
        fail(new Error("no hls"));
      });
    }

    async function playNative(station, gen) {
      const urls = hlsList(station);
      let last = null;
      for (const url of urls) {
        if (gen !== token) return;
        try {
          await playHls(url, gen, station.forceHlsJs);
          return "hls";
        } catch (err) {
          last = err;
        }
      }
      throw last || new Error("hls");
    }

    function showOffAir(station, detail) {
      stopHls();
      stopYt();
      el.offair.classList.remove("hidden");
      el.offTitle.textContent = station.label;
      el.offCopy.textContent = detail ||
        (station.name + " native stream did not lock. Open their live page if this feed is down.");
      el.offLink.href = station.site;
    }

    function hideOffAir() {
      el.offair.classList.add("hidden");
    }

    async function go(i) {
      i = (i + STATIONS.length) % STATIONS.length;
      index = i;
      localStorage.setItem("newsboob.station", String(index));
      setPointer(index);
      if (!on) {
        powerOn();
      }
      await lock(index);
    }

    let navigationQueue = Promise.resolve();
    function queueGo(i) {
      navigationQueue = navigationQueue.catch(() => {}).then(() => go(i));
      return navigationQueue;
    }

    async function lock(i) {
      if (on) syncPreviews();
      if (locked === i && hls && el.offair.classList.contains("hidden")) return;
      const s = STATIONS[i];
      const gen = ++token;
      locked = i;
      hideOffAir();
      setStatus("tuning", s.name + " · locking signal…");
      el.pwrLed.className = "dot warn";

      if (hlsList(s).length) {
        try {
          await playNative(s, gen);
          if (gen !== token) return;
          setStatus("source stream", s.name);
          applyVolume();
          return;
        } catch (_) {
          if (gen !== token) return;
          showOffAir(s, s.name + " native stream did not lock. Use the official live page.");
          setStatus("no lock", s.name);
          return;
        }
      }

      showOffAir(s, s.name + " has no public HLS stream we can play in this tuner.");
      setStatus("no lock", s.name);
    }

    function powerOn() {
      on = true;
      el.veil.classList.add("hidden");
      el.pwrLed.className = "dot on";
      if (panelOpen) syncPreviews();
    }

    function setScanMode(enabled) {
      scanMode = enabled;
      if (scanTimer) {
        clearInterval(scanTimer);
        scanTimer = null;
      }
      el.scanBtn.classList.toggle("active", enabled);
      el.scanBtn.setAttribute("aria-pressed", String(enabled));
      el.scanBtn.textContent = enabled ? "Scan on" : "Scan";
      el.scanBtn.title = enabled ? "Stop automatic channel scanning" : "Scan channels every 30 seconds";
      if (!enabled) return;
      scanDeadline = Date.now() + 30000;
      if (!on) go(index);
      scanTimer = setInterval(() => {
        if (scanMode && on) go(index + 1);
        scanDeadline = Date.now() + 30000;
      }, 30000);
    }

    function setPanel(open) {
      panelOpen = open;
      localStorage.setItem("newsboob.panel", open ? "1" : "0");
      el.layout.classList.toggle("solo", !open);
      el.panelBtn.textContent = open ? "<<" : ">>";
      el.panelBtn.setAttribute("aria-label", open ? "Hide tuner panel" : "Show tuner panel");
      el.panelBtn.title = open ? "Hide tuner panel" : "Show tuner panel";
      if (!on) return;
      if (open) syncPreviews();
      else {
        [...previewPlayers.keys()].forEach(killPreview);
        el.previews.classList.remove("on");
      }
    }

    async function reloadStream() {
      if (!on) {
        go(index);
        return;
      }
      locked = -1;
      stopHls();
      stopYt();
      await lock(index);
    }

    let stallTicks = 0;
    let lastMediaTime = -1;
    let reloading = false;
    setInterval(() => {
      if (!on || reloading || document.hidden) {
        stallTicks = 0;
        return;
      }
      if (el.offair && !el.offair.classList.contains("hidden")) {
        stallTicks = 0;
        return;
      }
      const v = el.video;
      if (!v || v.style.display === "none" || v.paused) {
        stallTicks = 0;
        return;
      }
      if (v.readyState < 2 || v.currentTime <= 0) {
        stallTicks = 0;
        return;
      }
      const t = v.currentTime;
      if (t <= lastMediaTime + 0.05) stallTicks += 1;
      else stallTicks = 0;
      lastMediaTime = t;
      if (stallTicks < 5) return;
      stallTicks = 0;
      reloading = true;
      Promise.resolve(reloadStream()).finally(() => { reloading = false; });
    }, 2000);

    function applyVolume() {
      const v = Number(el.vol.value);
      el.video.volume = v / 100;
      el.video.muted = muted;
      el.muteBtn.textContent = muted ? "Unmute" : "Mute";
      if (on && el.video.style.display !== "none" && el.video.paused) {
        el.video.play().catch(() => {});
      }
    }

    function angleIndex(evt) {
      const r = el.dial.getBoundingClientRect();
      const pt = evt.clientX != null ? evt : (evt.touches && evt.touches[0]);
      const x = pt.clientX - (r.left + r.width / 2);
      const y = pt.clientY - (r.top + r.height / 2);
      let deg = Math.atan2(y, x) * 180 / Math.PI + 90;
      if (deg < 0) deg += 360;
      const n = STATIONS.length;
      return ((Math.round(deg / STEP) % n) + n) % n;
    }

    el.power.addEventListener("click", () => go(index));
    el.prevBtn.addEventListener("click", () => go(index - 1));
    el.nextBtn.addEventListener("click", () => go(index + 1));
    el.vol.addEventListener("input", applyVolume);
    el.muteBtn.addEventListener("click", () => { muted = !muted; applyVolume(); });
    el.panelBtn.addEventListener("click", () => setPanel(!panelOpen));
    el.reloadBtn.addEventListener("click", () => reloadStream());
    el.scanBtn.addEventListener("click", () => setScanMode(!scanMode));
    el.scanPrevBtn.addEventListener("click", () => { if (scanMode) scanDeadline = Date.now() + 30000; go(index - 1); });
    el.scanNextBtn.addEventListener("click", () => { if (scanMode) scanDeadline = Date.now() + 30000; go(index + 1); });
    el.video.addEventListener("pointerdown", () => {
      if (el.video.paused) el.video.play().catch(() => {});
    });
    el.fsBtn.addEventListener("click", () => {
      const frame = document.querySelector(".set");
      const active = document.fullscreenElement || document.webkitFullscreenElement;
      if (!active) (frame.requestFullscreen || frame.webkitRequestFullscreen)?.call(frame);
      else (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
    });
    function syncFullscreenLabel() {
      const active = document.fullscreenElement || document.webkitFullscreenElement;
      el.fsBtn.textContent = active ? "Exit" : "Full";
      el.fsBtn.setAttribute("aria-label", active ? "Exit full screen" : "Enter full screen with NEWSBOOB frame");
    }
    document.addEventListener("fullscreenchange", syncFullscreenLabel);
    document.addEventListener("webkitfullscreenchange", syncFullscreenLabel);

    el.dial.addEventListener("pointerdown", (e) => {
      if (e.target.closest("span")) return;
      dragging = true;
      el.dial.setPointerCapture?.(e.pointerId);
      dragIndex = angleIndex(e);
      setPointer(dragIndex);
    });
    el.dial.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      dragIndex = angleIndex(e);
      setPointer(dragIndex);
    });
    el.dial.addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      go(dragIndex);
    });

    window.addEventListener("keydown", (e) => {
      if (e.target.matches("input, textarea")) return;
      if (/^[1-9]$/.test(e.key) && Number(e.key) <= STATIONS.length) go(Number(e.key) - 1);
      if (e.key === "0" && STATIONS.length >= 10) go(9);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") queueGo(index + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") queueGo(index - 1);
      if (e.key.toLowerCase() === "m") { muted = !muted; applyVolume(); }
      if (e.key.toLowerCase() === "h") setPanel(!panelOpen);
      if (e.key === " ") {
        e.preventDefault();
        if (!on) go(index);
        else { muted = !muted; applyVolume(); }
      }
    });

    document.addEventListener("visibilitychange", () => {
      previewPlayers.forEach((rec) => {
        if (!rec.video) return;
        if (document.hidden) rec.video.pause();
        else rec.video.play().catch(() => {});
      });
    });

    function tickClock() {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      el.clock.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
      if (scanMode) {
        const remaining = Math.max(0, Math.ceil((scanDeadline - Date.now()) / 1000));
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        el.scanBtn.textContent = "SCAN " + pad(mins) + ":" + pad(secs);
      }
    }
    tickClock();
    setInterval(tickClock, 1000);

    setPanel(panelOpen);
    setPointer(index);
    setStatus("off", "Power on, then turn the dial.");
