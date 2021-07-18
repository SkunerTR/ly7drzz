module.exports = {
  name:"muterol",
  code:`$description[
  ** Sunucuda Kim Mute Yerse Artık $roleName[$mentionedRoles[1]] Rolü Verilecektir.**]
  $setServerVar[mrol;$mentionedRoles[1]]
  $onlyPerms[admin;Bu Sunucuda Maalesef Yönetici Yetkin Yok !]
  $onlyBotPerms[admin;Sunucuda Yönetici Yetkim Yok !]
  $onlyIf[$mentionedRoles[1]!=;Knk Rol Etiketlede Kişiye Rol Verilsin Demi.]`
}
