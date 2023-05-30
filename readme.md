# Discord RPC

This project is an example of implementing Discord Rich Presence using Node.js and the discord-rpc library. (MY RPC)

## Prerequisites

- Node.js
- discord-rpc (install it by running `npm install discord-rpc`)

## Configuration

Before running the project, you need to configure a few elements.

1. Create an application on the [Discord Developer Portal](https://discord.com/developers/applications).
2. Copy the Application ID (`clientId`) and replace the value `1037474717260595290` in the code with your own ID.
3. Add the images you want to display in the `images` variable. Make sure the images are uploaded to Discord as application assets.
4. Modify the `details` and `state` in the `texts` variable to customize the text displayed in your Rich Presence.
5. If you want to add buttons, you can define them in the `buttons` variable by specifying the label and URL.

## Usage

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Run the script using the command `node index.js`.
4. Your Discord Rich Presence should now be active.

Feel free to explore the source code to understand how everything is set up.

## Useful Links

- [Discord Developer Portal](https://discord.com/developers/applications)
- [discord-rpc Documentation](https://www.npmjs.com/package/discord-rpc)

---

Please feel free to check out my [GitHub profile](https://github.com/RuBy-67) to discover more interesting projects I have worked on.

**Enjoy your life and be happy!** 💎

