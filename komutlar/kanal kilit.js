module.exports = {
  name:"kanal",
  code:`
  <#$channelID> Adlı Kanal $replaceText[$replaceText[$message;kilit;Başarıyla Kilitlenmiştir;-1];aç;Kilidi Açılmıştır;-1]

  $modifyChannelPerms[$channelID;$replaceText[$replaceText[$message;kilit;-;-1];aç;+;-1]sendmessages;$roleID[@everyone]]
  $onlyIf[$hasPerms[$authorID;managechannels]!=false;Yetkin Yok]
  $onlyIf[$checkContains[$message[1];kilit;aç]!=false;Kullanım !kanal kilit/aç]
  $onlyIf[$message!=;Kullanım !kanal kilit/aç]
  `
}