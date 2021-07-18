module.exports = {
  name:"kickayar",
  code:`
  $color[RANDOM]
  $title[BAŞARILI !]
  $description[
  **Kick-Log Kanalı **
  <#$mentionedChannels[1]>

  **Kick-Rol Kanalı**
  <@&$mentionedRoles[1]>]

  $setServerVar[kickrol;$mentionedRoles[1]]
  $setServerVar[kicklog;$mentionedChannels[1]]
  $onlyPerms[admin;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  $onlyIf[$message[2]!=;Kullanım !kickayar #kicklog @rolyetkilisi]
  `
}
