module.exports = {
  name:"kick",
  code:`
  $useChannel[$getServerVar[kicklog]]
  $color[RANDOM]
  $title[Yasaklanma İşlemi !]
  $description[$thumbnail[$userAvatar[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]]
  **Atılan Kişi**
  <@$mentioned[1]> $username[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]#$discriminator[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]

**Yetkili Kişi**
  <@$authorID>

  ]
  $footer[Yasaklanma Tarihi]
  $addTimestamp
  $channelSendMessage[$channelID;Atılan Kişi $username[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]#$discriminator[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]]
  $kick[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kickrol]]!=false;Üzgünüm Bunu Sadece \`\`$getServerVar[kickrol]\`\` Kişileri Kullanabilir !]
  $onlyIf[$message!=;Atacağım Kişinin ID'sini Gir Yada Etiketle !]
  `
}
