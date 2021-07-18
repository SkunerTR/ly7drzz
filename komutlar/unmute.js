module.exports = {
  name:"unmute",
  code:`$title[- MUTE SİSTEMİ - ]
  $description[Bir Kişi Susturulması Kalktı
  $thumbnail[$userAvatar[$mentioned[1]]]
  **Susturulan Kişi**
   <@$mentioned[1]>

  **Komutu Kullanan Yetkili**
   <@$authorID>
  $takeRoles[$mentioned[1];$getServerVar[mrol]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]!=false;Kişi Muteli Değil !]
  $onlyIf[$hasRole[$authorID;$getServerVar[myetkili]]!=false; Üzgünüm Bunu Sadece \`\`\`$roleName[$getServerVar[myetkili]]\`\`\` Rolün Olması Lazım !]
  $onlyBotPerms[manageroles;Rolleri Yönet Yetkim Yok Rolü Veremedim !]
  $onlyIf[$mentioned[1]!=;Kimin Mutesini Kaldirmam Gerektiğini Etiketle !]
  $onlyIf[$checkContains[$getServerVar[mrol];$getServerVar[myetkili];yok]!=true;Yetkili Rol Yada Mute Rol Ayarlanmamış]`
}
