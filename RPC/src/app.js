const clientId = "1037474717260595290";
const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);
async function setActivity() {
  if (!RPC) return;

  RPC.setActivity({
    details: `Imagine a World`,
    state: `Without imagining it 🔭`,
    largeImageKey: `shib`,
    largeImageText: `Soon it will be christmas 🎄`,
    smallImageKey: `noel`,
    smallImageText: `Enjoy your life and be happy`,
    instance: false,
    buttons: [
      {
        label: `My Github`,
        url: `https://github.com/RuBy-67`,
      },
      {
        label: `(Secret Button)`,
        url: `https://www.youtube.com/watch?v=B2ElZK0u85Y&ab_channel=PMUHUB`,
      },
    ],
  });
}

RPC.on("ready", async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

RPC.login({ clientId }).catch((err) => console.error(err));
