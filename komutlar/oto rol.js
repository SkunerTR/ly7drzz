module.exports = {
  name: "otorol",
  code: `
$setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
  Otorol Kanalı $channelName[$mentionedChannels[1]] Olarak
  Otorol Rolü İse $roleName[$mentionedRoles[1]] Olarak Ayarlanmıştır.
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $onlyIf[$message[2]!=;Kullanım !otorol @rol @log]
   `
}
