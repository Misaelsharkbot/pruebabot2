let handler = async(m, { conn, text, participants }) => {
  let teks = `โโโชใ *active grupo ๐ฃ๏ธ* ใโชโโ\n\nโฒ *Mensaje : ${text ? text : 'no hay'}*\n\n`
		      	for (let mem of participants) {
		            teks += `เฟ๐ธ @${mem.id.split('@')[0]}\n`
				}
                teks += `\nโ *Admin grupos* โ`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
