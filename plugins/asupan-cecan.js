let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/random'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']
handler.command = /^(asupan)$/i

module.exports = handler
