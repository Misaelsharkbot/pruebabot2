let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendBut(m.chat, `Tidak ada voting digrup ini!`, 'ยฉ stikerin', 'Mulai', `${usedPrefix}+vote`, m)
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
ใ *๐๐๐๐๐* ใ
*๐ผ๐๐๐๐๐:* ${reason}
*๐ฐ ๐๐๐๐๐*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}
*๐ด๐ ๐๐๐๐๐๐*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}
wm
    `.trim()
    await conn.send3But(m.chat, caption, wm, 'แด าแดแด แดส', `${usedPrefix}afavorv`, 'แดษด แดแดษดแดสแด', `${usedPrefix}encontrav`, 'แดสษชแดษชษดแดส แด แดแดแดแดษชแดษด', `${usedPrefix}-voto`, m)
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^chequiar$/i

module.exports = handler
