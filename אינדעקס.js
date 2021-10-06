const דיסקערד = require("discord.js")
const קליענט = new דיסקערד.Client({ intents: Object.keys(דיסקערד.Intents.FLAGS) })
const סעטטינגס = require("./סעטטינגס.json")

קליענט.on("ready", async() => {
    console.log(`[אַפּי] לאגד אין ווי ${קליענט.user.tag}`)
})

קליענט.on("message", async(אנזאג) => {
    const טענות = אנזאג.content.slice(סעטטינגס.פרעפיקס.length).trim().split(" ")
    const באפעל = טענות.shift().toLowerCase()
    if(באפעל === "העלא") {
        אנזאג.channel.send("העלא, וועלט!")
    }
})

קליענט.login(סעטטינגס.ראבאט_סימען)