
const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "923321709439"
global.ownername = "Saad Umar"
global.ytname = "www.youtube.com/@saadumar650"
global.socialm = "Instagram :saadumar.650"
global.location = "Balochistan"

global.ownernumber = '923321709439'  //creator number
global.ownername = 'Saad Umar' //owner name
global.botname = 'SaadxBUG' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'S A A D\n\nContact: +923321709439'

//console view/theme
global.themeemoji = '🪀'
global.wm = "S A A D."

//theme link
global.link = 'https://chat.whatsapp.com/LWS0CftnD6G8pF2L03RHYM'

//custom prefix
global.prefa = ['']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = false //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v3'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
