const Wechaty = require("wechaty");
const axios = require("axios");
require("dotenv");
const { PuppetXp } = require("wechaty-puppet-xp");

const puppet = new PuppetXp();

const { WechatyBuilder } = Wechaty;

const matchReg = new RegExp(process.env.MATCH_REG);

const bot = WechatyBuilder.build({
    puppet: puppet,
    name: "bot",
});

bot.on("message", async (msg) => {
    let text = msg.text();
    if (matchReg.test(text)) {
        try {
            await axios.post(process.env.REMOTE_API, { text });
        } catch (error) {
            console.error(error);
        }
    }
});

bot.start().then(console.log).error(console.error);
