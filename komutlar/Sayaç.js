module.exports = {
  name: "sayaç",
  code: `
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $onlyIf[$isNumber[$message[2]]!=false;Hedef Kişi Sayısı Bir Rakam Değil !]
  $onlyIf[$message!=;Kullanım !sayaç #kanal hedefkişi Sayısı]
  $setServerVar[sayaçlog;$mentionedChannels[1]]
  $setServerVar[sayaç;$noMentionMessage]
  $description[$color[#00fff1]Sayaç Kanalı <#$mentionedChannels[1]> Olarak Seçildi.
  Hedef Kişi Sayısına Kalan Kişi \`\`$sub[$membersCount;$noMentionMessage]\`\`
  Hedef Kişi Rakamı __**$noMentionMessage**__]
  $suppressErrors[Girdiğin Rakam Değil]
  
  `
}