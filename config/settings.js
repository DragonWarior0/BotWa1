const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285944606192'] // no own
global.author = 'Akemi' // nama author 
global.packname = '𝐓𝐡𝐮𝐧𝐝𝐞𝐫𝐗𝐌' // nama pack sticker
global.namabot = 'XD BOTZ' // nama bot mu
global.group = 'https://chat.whatsapp.com/HWV3ZH2Xh6JKxDySbMdBkp' // grup mu
global.pic = 'https://telegra.ph/file/36211850fa46193ef96ad.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})