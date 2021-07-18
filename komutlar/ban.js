module.exports = {
  name:"ban",
  code:`
  $useChannel[$getServerVar[banlog]]
  $color[RANDOM]
  $title[Yasaklanma İşlemi !]
  $description[$thumbnail[$userAvatar[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]]
  **Yasaklanan Kişi**
  <@$mentioned[1]> $username[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]#$discriminator[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]

**Yetkili Kişi**
  <@$authorID>

  ]
  $footer[Yasaklanma Tarihi]
  $addTimestamp
  $channelSendMessage[$channelID;Yasaklanan Kişi $username[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]#$discriminator[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]]
  $ban[$replaceText[$replaceText[$isNumber[$message];false;$mentioned[1];-1];true;$message;-1]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[banrol]]!=false;Üzgünüm Bunu Sadece \`\`$getServerVar[banrol]\`\` Kişileri Kullanabilir !]
  $onlyIf[$message!=;Banlayacağım Kişinin ID'sini Gir Yada Etiketle !]
  `
}
