/* ==========================================
   SAKSHI'S BIRTHDAY WORLD — EXTRA MAGIC PACK
   ADD-ON ONLY — Original files untouched.
========================================== */

(() => {
  "use strict";

  if (window.__sakshiExtraMagicLoaded) return;
  window.__sakshiExtraMagicLoaded = true;

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const reducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ========== SECRET NOTES ========== */

  const notes = [
    "Some people make ordinary days feel magical. You're one of them. 💗",
    "Official reminder: Being a certified namooni is a full-time talent. 😂",
    "May your days be filled with happiness, laughter and beautiful surprises. 🌷",
    "Never lose your childish little sparkle. 🎀",
    "You deserve all the beautiful things life has to offer. 💕",
    "May your camera roll stay full and your playlists stay perfect. 📸",
    "Keep being dramatic, funny and wonderfully YOU. 😂",
    "A little reminder that you are appreciated. ❤️",
    "Here's to more random talks and unforgettable memories. 🦋",
    "Happy birthday, suar! Stay iconic. 🐷",
    "May every new chapter be better than the last. ✨",
    "Life is more fun with people who understand your madness. 💗",
    "Keep smiling, keep shining and keep being the legend you are. 🌸",
    "Your existence deserves a little celebration every day. 🎉",
    "Some friendships are simply special. Never change that. ♡"
  ];

  const memories = [
    ["The Random Talks", "Those conversations that start with nothing and somehow become everything. 💗"],
    ["The Inside Jokes", "Some jokes need no explanation. Only the right people understand them. 😂"],
    ["The Little Things", "A shared song, a random photo and a silly conversation can become favourite memories."],
    ["The Chaos", "A little drama, unlimited laughter and stories worth remembering."],
    ["The Next Chapter", "So many beautiful moments are still waiting to happen. 🌷"],
    ["The Friendship", "Not every connection needs a reason. Some are simply special. ♡"]
  ];

  /* ========== MAIN STYLES ========== */

  const css = `
  #sx-dock {
    position:fixed;
    z-index:9990;
    right:15px;
    bottom:18px;
    display:flex;
    gap:8px;
    opacity:0;
    pointer-events:none;
    transform:translateY(15px);
    transition:.4s;
  }

  #sx-dock.sx-visible {
    opacity:1;
    pointer-events:auto;
    transform:none;
  }

  .sx-btn {
    border:1px solid white;
    border-radius:30px;
    padding:12px 16px;
    background:#fff0f6;
    color:#9d5d7c;
    font-size:12px;
    font-weight:bold;
    box-shadow:0 5px 25px #c77b9b35;
    cursor:pointer;
  }

  .sx-primary {
    background:linear-gradient(120deg,#edabc5,#e7c9ef);
    color:#70465e;
  }

  #sx-backdrop,#sx-lightbox {
    position:fixed;
    inset:0;
    z-index:10001;
    background:#281523bb;
    backdrop-filter:blur(9px);
    display:none;
    align-items:center;
    justify-content:center;
    padding:18px;
  }

  #sx-backdrop.open,#sx-lightbox.open {
    display:flex;
  }

  #sx-panel {
    width:min(100%,520px);
    max-height:85svh;
    overflow:auto;
    padding:25px;
    border-radius:27px;
    background:linear-gradient(145deg,#fffafd,#ffedf4,#f6efff);
    color:#68485b;
    box-shadow:0 20px 80px #0005;
    animation:sx-pop .35s ease;
  }

  @keyframes sx-pop {
    from {opacity:0;transform:scale(.85)}
    to {opacity:1;transform:scale(1)}
  }

  .sx-header {
    display:flex;
    justify-content:space-between;
    gap:12px;
  }

  .sx-heading {
    font:600 clamp(27px,6vw,38px) Georgia,serif;
    margin:8px 0;
    color:#69445c;
  }

  .sx-sub {
    font-size:13px;
    line-height:1.7;
    color:#967c8d;
  }

  .sx-close {
    width:36px;
    height:36px;
    border:0;
    border-radius:50%;
    background:#f8dce8;
    color:#9a5d7b;
    font-size:22px;
    cursor:pointer;
  }

  .sx-tabs {
    display:flex;
    flex-wrap:wrap;
    gap:7px;
    margin:20px 0;
  }

  .sx-tab {
    border:1px solid #f0d5e1;
    border-radius:30px;
    padding:10px 13px;
    background:#fff9fc;
    color:#98627e;
    cursor:pointer;
  }

  .sx-tab.active {
    background:#eaa6c2;
    color:white;
  }

  .sx-content {
    min-height:190px;
    padding:23px;
    border:1px solid #f3dce6;
    border-radius:20px;
    background:#ffffffbd;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
  }

  .sx-emoji {font-size:42px;margin-bottom:12px}

  .sx-message {
    font:italic 22px/1.6 Georgia,serif;
    color:#80536c;
  }

  .sx-title {
    font:600 24px Georgia,serif;
    color:#9b6280;
    margin:8px;
  }

  .sx-text {
    font-size:14px;
    line-height:1.8;
    color:#866e7d;
  }

  .sx-actions {
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:10px;
    margin-top:18px;
  }

  .sx-action {
    border:0;
    border-radius:30px;
    padding:12px 17px;
    background:linear-gradient(120deg,#edaec7,#e7d0ef);
    color:#70465e;
    font-weight:bold;
    cursor:pointer;
  }

  .sx-progress {
    height:5px;
    background:#f4dce7;
    border-radius:20px;
    margin-top:20px;
    overflow:hidden;
  }

  .sx-progress span {
    display:block;
    height:100%;
    width:0;
    background:#e78caf;
    transition:.4s;
  }

  /* Mystery gift */

  .sx-gift {
    font-size:85px;
    cursor:pointer;
    animation:sx-bounce 1.5s infinite;
  }

  @keyframes sx-bounce {
    50% {transform:translateY(-10px)}
  }

  /* Floating effects */

  .sx-heart,.sx-petal,.sx-confetti {
    position:fixed;
    pointer-events:none;
    z-index:9988;
  }

  .sx-heart {
    bottom:-35px;
    animation:sx-rise var(--dur,8s) linear forwards;
    font-size:var(--size,20px);
  }

  @keyframes sx-rise {
    0% {transform:translateY(0);opacity:0}
    15% {opacity:.9}
    100% {
      transform:translate(var(--drift,30px),-110vh) rotate(350deg);
      opacity:0;
    }
  }

  .sx-petal {
    top:-30px;
    animation:sx-fall var(--dur,10s) linear forwards;
  }

  @keyframes sx-fall {
    to {
      transform:translate(var(--drift,30px),110vh) rotate(600deg);
      opacity:0;
    }
  }

  .sx-confetti {
    top:-15px;
    animation:sx-party var(--dur,3s) linear forwards;
  }

  @keyframes sx-party {
    to {
      transform:translate(var(--drift,40px),110vh) rotate(800deg);
      opacity:0;
    }
  }

  /* Night mode */

  html.sx-night body {
    background:linear-gradient(145deg,#211b2b,#302236,#262039);
    color:#f9eaf2;
  }

  html.sx-night .birthday-card,
  html.sx-night .letter-card,
  html.sx-night .photo,
  html.sx-night .music-card {
    background:#38273a;
    color:#f9eaf2;
  }

  html.sx-night .section-head h2,
  html.sx-night .birthday-card h2,
  html.sx-night .letter-card h2 {
    color:#ffe5f0;
  }

  /* Photo lightbox */

  #sx-lightbox img {
    max-width:92vw;
    max-height:80svh;
    object-fit:contain;
    border-radius:18px;
  }

  #sx-lightbox button {
    position:absolute;
    top:18px;
    right:18px;
  }

  @media(max-width:520px) {
    #sx-dock {
      left:10px;
      right:10px;
      bottom:12px;
      justify-content:center;
    }

    .sx-btn {padding:11px 12px}
    #sx-panel {padding:19px 16px}
  }

  @media(prefers-reduced-motion:reduce) {
    .sx-heart,.sx-petal,.sx-confetti {display:none!important}
  }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  /* ========== EXTRA BUTTONS ========== */

  const dock = document.createElement("nav");
  dock.id = "sx-dock";

  dock.innerHTML = `
    <button class="sx-btn" id="sx-night">☾</button>
    <button class="sx-btn sx-primary" id="sx-open">✨ Extra Magic</button>
    <button class="sx-btn" id="sx-party">🎉</button>
  `;

  document.body.appendChild(dock);

  /* ========== SURPRISE PANEL ========== */

  const backdrop = document.createElement("div");
  backdrop.id = "sx-backdrop";

  backdrop.innerHTML = `
    <section id="sx-panel" role="dialog" aria-modal="true">

      <div class="sx-header">
        <div>
          <small>✦ A LITTLE BONUS WORLD ✦</small>
          <h2 class="sx-heading">One More Surprise ♡</h2>
          <p class="sx-sub">
            Because one birthday surprise was never enough.
          </p>
        </div>

        <button class="sx-close" id="sx-close">×</button>
      </div>

      <div class="sx-tabs">
        <button class="sx-tab active" data-tab="notes">💌 Notes</button>
        <button class="sx-tab" data-tab="memory">🫙 Memories</button>
        <button class="sx-tab" data-tab="gift">🎁 Gift</button>
        <button class="sx-tab" data-tab="letter">🌷 Letter</button>
        <button class="sx-tab" data-tab="game">🎮 Game</button>
      </div>

      <div class="sx-content" id="sx-content"></div>

      <div class="sx-actions" id="sx-actions"></div>

      <div class="sx-progress">
        <span id="sx-progress"></span>
      </div>

    </section>
  `;

  document.body.appendChild(backdrop);

  const content = $("#sx-content", backdrop);
  const actions = $("#sx-actions", backdrop);
  const progress = $("#sx-progress", backdrop);

  let noteIndex = -1;
  let memoryIndex = -1;
  let letterIndex = 0;
  let giftOpened = false;
  let score = 0;

  function action(label, callback) {
    const b = document.createElement("button");
    b.className = "sx-action";
    b.textContent = label;
    b.addEventListener("click", callback);
    return b;
  }

  function updateProgress(value) {
    progress.style.width = value + "%";
  }

  /* ========== NOTES ========== */

  function showNote() {
    let next;

    do {
      next = Math.floor(Math.random() * notes.length);
    } while (notes.length > 1 && next === noteIndex);

    noteIndex = next;

    content.innerHTML = `
      <div class="sx-emoji">💌</div>
      <div class="sx-message"></div>
    `;

    $(".sx-message", content).textContent = notes[noteIndex];

    actions.replaceChildren(
      action("Another Note ↻", showNote),
      action("Celebrate ✨", () => party(70))
    );

    updateProgress((noteIndex + 1) / notes.length * 100);
  }

  /* ========== MEMORY JAR ========== */

  function showMemory() {
    memoryIndex = (memoryIndex + 1) % memories.length;

    const [title, text] = memories[memoryIndex];

    content.innerHTML = `
      <div class="sx-emoji">🫙</div>
      <h3 class="sx-title"></h3>
      <p class="sx-text"></p>
    `;

    $(".sx-title", content).textContent = title;
    $(".sx-text", content).textContent = text;

    actions.replaceChildren(
      action("Pick Another ♡", showMemory),
      action("Sparkles ✨", () => party(50))
    );

    updateProgress((memoryIndex + 1) / memories.length * 100);
  }

  /* ========== MYSTERY GIFT ========== */

  function showGift() {
    content.innerHTML = `
      <div class="sx-emoji sx-gift">🎁</div>
      <h3 class="sx-title">
        ${giftOpened ? "A Wish For You!" : "A Mystery Gift"}
      </h3>
      <p class="sx-text">
        ${giftOpened
          ? "May your life always be filled with laughter, happiness and beautiful surprises. You deserve the best! 💗"
          : "Something special is waiting inside. Tap to open!"}
      </p>
    `;

    const gift = $(".sx-gift", content);

    gift.addEventListener("click", openGift);

    actions.replaceChildren(
      action("Open Gift 🎁", openGift),
      action("Celebrate 🎉", () => party(100))
    );

    updateProgress(giftOpened ? 100 : 25);
  }

  function openGift() {
    giftOpened = true;
    party(100);
    showGift();
  }

  /* ========== INTERACTIVE LETTER ========== */

  const letter = [
    [
      "Dear Sakshi, 💗",
      "I hope your birthday is filled with happiness, laughter and moments that make you smile even after the day ends."
    ],
    [
      "A Little Reminder 🌷",
      "Never stop being the person you are. Keep exploring, keep dreaming and never let the little things that make you special disappear."
    ],
    [
      "One Last Thing 🎀",
      "Thank you for being part of so many random stories, silly jokes and beautiful memories. Stay happy, stay crazy and keep shining. Happy Birthday, suar! 😂"
    ]
  ];

  function showLetter() {
    const [title, text] = letter[letterIndex];

    content.innerHTML = `
      <div class="sx-emoji">🌷</div>
      <h3 class="sx-title"></h3>
      <p class="sx-text"></p>
    `;

    $(".sx-title", content).textContent = title;
    $(".sx-text", content).textContent = text;

    actions.replaceChildren(
      action(
        letterIndex === 2 ? "Read Again ↻" : "Next Page →",
        () => {
          letterIndex = (letterIndex + 1) % letter.length;
          showLetter();
        }
      ),
      action("Add Sparkles ✨", () => party(60))
    );

    updateProgress((letterIndex + 1) / letter.length * 100);
  }

  /* ========== MINI GAME ========== */

  function showGame() {
    content.innerHTML = `
      <div class="sx-emoji">💗</div>
      <h3 class="sx-title">Catch the Hearts!</h3>
      <p class="sx-text">
        Click the heart as many times as you can.
      </p>
      <div id="sx-score" class="sx-title">Score: ${score}</div>
      <button class="sx-action" id="sx-heart-game">💗 CLICK ME!</button>
    `;

    $("#sx-heart-game", content).addEventListener("click", () => {
      score++;
      $("#sx-score", content).textContent = "Score: " + score;

      if (score % 5 === 0) party(15);
    });

    actions.replaceChildren(
      action("Reset Game ↻", () => {
        score = 0;
        showGame();
      }),
      action("Celebrate 🎉", () => party(70))
    );

    updateProgress(Math.min(score * 5, 100));
  }

  /* ========== TABS ========== */

  function setTab(tab) {
    $$("[data-tab]", backdrop).forEach(b => {
      b.classList.toggle("active", b.dataset.tab === tab);
    });

    if (tab === "notes") showNote();
    if (tab === "memory") showMemory();
    if (tab === "gift") showGift();
    if (tab === "letter") showLetter();
    if (tab === "game") showGame();
  }

  function openPanel(tab = "notes") {
    backdrop.classList.add("open");
    setTab(tab);
  }

  function closePanel() {
    backdrop.classList.remove("open");
  }

  $("#sx-open").addEventListener("click", () => openPanel());
  $("#sx-close").addEventListener("click", closePanel);

  backdrop.addEventListener("click", e => {
    if (e.target === backdrop) closePanel();
  });

  $$("[data-tab]", backdrop).forEach(b => {
    b.addEventListener("click", () => setTab(b.dataset.tab));
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closePanel();
      lightbox.classList.remove("open");
    }
  });

  /* ========== CONFETTI ========== */

  function party(amount = 70) {
    if (reducedMotion) return;

    const symbols = ["✦", "♡", "✧", "🎉", "✨"];
    const colors = [
      "#ed91b5",
      "#d8a9e8",
      "#f4c96d",
      "#a9c9e8",
      "#f6b6a5"
    ];

    for (let i = 0; i < amount; i++) {
      const el = document.createElement("span");

      el.className = "sx-confetti";
      el.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      el.style.left = Math.random() * 100 + "vw";
      el.style.color =
        colors[Math.floor(Math.random() * colors.length)];

      el.style.setProperty(
        "--dur",
        2 + Math.random() * 3 + "s"
      );

      el.style.setProperty(
        "--drift",
        -100 + Math.random() * 200 + "px"
      );

      document.body.appendChild(el);

      setTimeout(() => el.remove(), 5500);
    }
  }

  $("#sx-party").addEventListener("click", () => {
    party(130);
    openPanel("gift");
  });

  /* ========== NIGHT MODE ========== */

  $("#sx-night").addEventListener("click", () => {
    document.documentElement.classList.toggle("sx-night");

    $("#sx-night").textContent =
      document.documentElement.classList.contains("sx-night")
        ? "☀"
        : "☾";
  });

  /* ========== FLOATING HEARTS ========== */

  function floating(className, symbols) {
    if (reducedMotion || document.hidden) return;

    const el = document.createElement("span");

    el.className = className;
    el.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    el.style.left = Math.random() * 100 + "vw";

    el.style.setProperty(
      "--dur",
      7 + Math.random() * 6 + "s"
    );

    el.style.setProperty(
      "--size",
      12 + Math.random() * 15 + "px"
    );

    el.style.setProperty(
      "--drift",
      -65 + Math.random() * 130 + "px"
    );

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 14000);
  }

  let heartTimer = null;
  let petalTimer = null;

  function startEffects() {
    if (reducedMotion || document.hidden) return;

    if (!heartTimer) {
      heartTimer = setInterval(
        () => floating("sx-heart", ["♡", "💗", "💕", "✧"]),
        1300
      );
    }

    if (!petalTimer) {
      petalTimer = setInterval(
        () => floating("sx-petal", ["🌸", "✿", "❀"]),
        2600
      );
    }
  }

  function stopEffects() {
    clearInterval(heartTimer);
    clearInterval(petalTimer);

    heartTimer = null;
    petalTimer = null;
  }

  startEffects();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopEffects();
    else startEffects();
  });

  /* ========== PHOTO LIGHTBOX ========== */

  const lightbox = document.createElement("div");

  lightbox.id = "sx-lightbox";

  lightbox.innerHTML = `
    <button class="sx-close" id="sx-photo-close">×</button>
    <img alt="Expanded birthday photograph">
  `;

  document.body.appendChild(lightbox);

  const bigImage = $("img", lightbox);

  function openPhoto(img) {
    bigImage.src = img.currentSrc || img.src;
    bigImage.alt = img.alt || "Birthday photo";
    lightbox.classList.add("open");
  }

  $$(".gallery .photo img").forEach(img => {
    img.classList.add("sx-photo-open");
    img.tabIndex = 0;
    img.setAttribute("role", "button");

    img.addEventListener("click", () => openPhoto(img));

    img.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPhoto(img);
      }
    });
  });

  $("#sx-photo-close").addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });

  /* ========== MUSIC VISUALIZER ========== */

  const audio = $("#birthday-audio");
  const musicIcon = $(".music-icon");

  if (audio && musicIcon) {
    const bars = document.createElement("span");

    bars.className = "sx-equalizer";
    bars.innerHTML = "<i></i><i></i><i></i><i></i>";

    const eqStyle = document.createElement("style");

    eqStyle.textContent = `
      .sx-equalizer {
        display:inline-flex;
        gap:3px;
        align-items:center;
        height:24px;
      }

      .sx-equalizer i {
        width:3px;
        height:7px;
        background:#c8759b;
        border-radius:5px;
      }

      .sx-equalizer.playing i {
        animation:sx-equal .6s infinite alternate;
      }

      .sx-equalizer.playing i:nth-child(2) {
        animation-delay:.15s;
      }

      .sx-equalizer.playing i:nth-child(3) {
        animation-delay:.3s;
      }

      @keyframes sx-equal {
        to {height:22px}
      }
    `;

    document.head.appendChild(eqStyle);

    musicIcon.replaceChildren(bars);

    audio.addEventListener("play", () => {
      bars.classList.add("playing");
    });

    audio.addEventListener("pause", () => {
      bars.classList.remove("playing");
    });
  }

  /* ========== PASSWORD GATE INTEGRATION ========== */

  const gate = $("#gate");

  function revealDock() {
    const unlocked = gate && !gate.classList.contains("active");

    dock.classList.toggle("sx-visible", Boolean(u
