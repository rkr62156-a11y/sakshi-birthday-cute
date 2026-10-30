(() => {
  "use strict";

  // Extra birthday magic for Sayma 💗

  const style = document.createElement("style");

  style.textContent = `
    .extra-heart {
      position: fixed;
      bottom: -30px;
      z-index: 9998;
      pointer-events: none;
      animation: extraFloat 7s linear forwards;
      font-size: 20px;
      opacity: .8;
    }

    @keyframes extraFloat {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
      }
      15% { opacity: .9; }
      100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
      }
    }

    #extra-surprise-btn {
      display: block;
      margin: 24px auto;
      padding: 14px 24px;
      border: 1px solid #ff9bbd;
      border-radius: 30px;
      background: linear-gradient(135deg,#ff8fb5,#ffb6cf);
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 5px 20px #ff9bb555;
      transition: transform .2s;
    }

    #extra-surprise-btn:active {
      transform: scale(.94);
    }

    #extra-surprise-box {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 10000;
      background: rgba(20,10,20,.78);
      backdrop-filter: blur(8px);
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .extra-card {
      width: 100%;
      max-width: 340px;
      padding: 30px 22px;
      border-radius: 25px;
      background: linear-gradient(145deg,#fff0f5,#ffe0eb);
      text-align: center;
      color: #873c5b;
      box-shadow: 0 15px 60px #ff8fb555;
      animation: extraPop .35s ease;
    }

    @keyframes extraPop {
      from { transform: scale(.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .extra-card h2 {
      font-size: 23px;
      margin-bottom: 15px;
    }

    .extra-card p {
      font-size: 16px;
      line-height: 1.7;
    }

    #extra-close {
      margin-top: 20px;
      padding: 10px 25px;
      border: none;
      border-radius: 25px;
      background: #e978a1;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  `;

  document.head.appendChild(style);

  // Floating hearts

  const hearts = ["💗", "💕", "♡", "💖", "🌸"];

  function createHeart() {
    const heart = document.createElement("span");

    heart.className = "extra-heart";
    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
      (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 9500);
  }

  setInterval(createHeart, 1100);

  // Surprise messages

  const messages = [
    "You deserve all the happiness in this world. 💗",

    "Some people make ordinary days feel special. You're one of them. 🌸",

    "Never stop being the beautiful, crazy and wonderful person you are. 🦋",

    "I hope life gives you a thousand reasons to smile. 💕",

    "No matter how old you get, never lose that childish little sparkle. ✨",

    "A little reminder: You are appreciated more than you know. ❤️",

    "May every new chapter of your life be even more beautiful. 🌷",

    "And finally... thank you for being YOU! 🥹💗"
  ];

  // Create surprise button

  const button = document.createElement("button");

  button.id = "extra-surprise-btn";
  button.textContent = "💌 Open a Little Surprise";

  document.body.appendChild(button);

  // Surprise popup

  const popup = document.createElement("div");

  popup.id = "extra-surprise-box";

  popup.innerHTML = `
    <div class="extra-card">
      <div style="font-size:38px">🎀</div>
      <h2>A Little Note For You</h2>
      <p id="extra-message"></p>
      <button id="extra-close">Close 💗</button>
    </div>
  `;

  document.body.appendChild(popup);

  button.addEventListener("click", () => {
    const message =
      messages[Math.floor(Math.random() * messages.length)];

    document.getElementById("extra-message").textContent =
      message;

    popup.style.display = "flex";
  });

  document.getElementById("extra-close").addEventListener(
    "click",
    () => {
      popup.style.display = "none";
    }
  );

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  console.log("Birthday magic activated! 💗");

})();
