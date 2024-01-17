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
    if (msg.type != Wechaty.types.Message.Text) {
        return;
    }

    let text = msg.text();
    console.log(text);
    if (process.env.REMOTE_API && matchReg.test(text)) {
        try {
            await axios.post(process.env.REMOTE_API, { text, msg.room });
            console.log("------sended");
        } catch (error) {
            console.error(error);
        }
    }
});

bot.start().catch(console.error);
