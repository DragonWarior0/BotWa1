const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6283162946994'] // no own
global.author = 'CeliaSensei' // nama author 
global.packname = 'Celia' // nama pack sticker
global.namabot = 'XD BOTZ' // nama bot mu
global.group = 'bot' // grup mu
global.pic = 'https://telegra.ph/file/36211850fa46193ef96ad.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
