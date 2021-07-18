module.exports = {
  name:"muteyetkili",
  code:`$description[  **Mute Yetkilisi @$roleName[$mentionedRoles[1]] Olarak Ayarlandı Bu Role Sahip Olmayanlar Kullanamayacak**]
  $setServerVar[myetkili;$mentionedRoles[1]]
  $onlyPerms[admin;Bu Sunucuda Maalesef Yönetici Yetkin Yok !]
  $onlyBotPerms[admin;Sunucuda Yönetici Yetkim Yok !]
  $onlyIf[$mentionedRoles[1]!=;Knks Bi Rolmü Etiketlesen Hani ?]`
}
