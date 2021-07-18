module.exports = {
  name:"banayar",
  code:`
  $color[RANDOM]
  $title[BAŞARILI !]
  $description[
  **Ban-Log Kanalı **
  <#$mentionedChannels[1]>

  **Ban-Rol Kanalı**
  <@&$mentionedRoles[1]>]

  $setServerVar[banrol;$mentionedRoles[1]]
  $setServerVar[banlog;$mentionedChannels[1]]
  $onlyPerms[admin;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin \`\`Yönetici\`\` Yetkisine İhtiyacın Var !]
  $onlyIf[$message[2]!=;Kullanım !banayar #banlog @rolyetkilisi]
  `
}
