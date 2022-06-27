let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/random'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.hijaber', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']
handler.command = /^(asupan)$/i

module.exports = handler
