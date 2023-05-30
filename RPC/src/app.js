const clientId = "DISCORD_ID";
const DiscordRPC = require("discord-rpc");

const images = [
  {
    largeImageKey: "pp1",
    largeImageText: "🌠",
    smallImageKey: "js",
    smallImageText: "Enjoy your life and be happy 💎",
  },
  {
    largeImageKey: "pp1",
    largeImageText: "🌠",
    smallImageKey: "react",
    smallImageText: "Enjoy your life and be happy 💎",
  },
  {
    largeImageKey: "pp1",
    largeImageText: "🌟",
    smallImageKey: "js",
    smallImageText: "Stay creative and code on 🚀",
  },
  {
    largeImageKey: "pp2",
    largeImageText: "🚀",
    smallImageKey: "cs",
    smallImageText: "Explorer on a quest for new challenges ❤️",
  },
  {
    largeImageKey: "pp2",
    largeImageText: "👩‍🚀",
    smallImageKey: "html",
    smallImageText: "Stay inspired and keep creating 🪄",
  },
  {
    largeImageKey: "pp2",
    largeImageText: "👩‍🚀",
    smallImageKey: "cs",
    smallImageText: "Stay inspired and keep creating 🪄",
  },
  {
    largeImageKey: "pp3",
    largeImageText: "👽",
    smallImageKey: "tele",
    smallImageText: "Bugs are bugs👾",
  },
  {
    largeImageKey: "pp3",
    largeImageText: "👾",
    smallImageKey: "js",
    smallImageText: "Help me to destroys bugs👾",
  },
  {
    largeImageKey: "pp3",
    largeImageText: "🌟",
    smallImageKey: "tele",
    smallImageText: "Be afraid of me 👽",
  },
];

const texts = [
  {
    details: "Imagine a World ✨",
    state: "Exploration knows no limits 🚀",
  },
  {
    details: "Welcome to the future 🌌",
    state: "Unleash your imagination! 👩‍🚀",
  },
  {
    details: "Discover new horizons 🌍",
    state: "Embrace the unknown! 🌙",
  },
  {
    details: "Unlock your potential ✨",
    state: "Endless possibilities await 🌟",
  },
  {
    details: "Ignite your creativity 🔥",
    state: "Dreams can come true 🚀",
  },
  {
    details: "Embrace the journey 🌠",
    state: "Where dreams become real ✨",
  },
  {
    details: "Unlock the mysteries 🌌",
    state: "Witness wonders of creation 🌠",
  },
  {
    details: "Dive into imagination 🌊",
    state: "Stories come to life 📚",
  },
  {
    details: "Forge your path digitally 🖥️",
    state: "Shape the future 🚀",
  },
  {
    details: "Conquer challenges ⚔️",
    state: "Achievements speak 🏆",
  },
  {
    details: "Power of collaboration 🤝",
    state: "Witness magic of teamwork ✨",
  },
  {
    details: "Embrace beauty of simplicity 🌿",
    state: "Elegance meets function 💡",
  },
  {
    details: "Step into endless world 🌈",
    state: "Let creativity soar 🎨",
  },
  {
    details: "Step into boundless cosmos ☄️",
    state: "Let creativity take flight 🛩️",
  },
  {
    details: "Embark on cosmic odyssey 🚀",
    state: "Unleash creative mastery ✨",
  },
  {
    details: "Explore celestial wonders ✨",
    state: "Ignite imaginative voyages 🚀",
  },
  {
    details: "Venture into starry realms ✨",
    state: "Unleash cosmic creativity 🌌",
  },
];

const buttons = [
  {
    label: "My Github",
    url: "https://github.com/RuBy-67",
  },
    /*{
    label: "Buttons 2",
    url: "Buttons Link",
  },*/
];

let imageIndex = 0;
let textIndex = 0;

const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;

  const image = images[imageIndex];
  const text = texts[textIndex];

  RPC.setActivity({
    ...text,
    ...image,
    instance: false,
    buttons: buttons,
  });

  imageIndex = (imageIndex + 1) % images.length;
  textIndex = (textIndex + 1) % texts.length;
}

RPC.on("ready", async () => {
  console.log("Connected to Discord");
  setActivity();

  setInterval(() => {
    setActivity();
  }, 10000); // Change every 10 seconds
});
RPC.on("disconnected", () => {
  console.log("Disconnected from Discord");
  // Restart connexion if is loss
  RPC.login({ clientId }).catch((err) => {
    console.error("Failed to login to Discord:", err);
    // past error message in console log
  });
});

RPC.on("error", (err) => {
  console.error("Discord RPC error:", err);
 
});
