const Aoijs = require("aoi.js")
var fs = require('fs')
const bot = new Aoijs.Bot({
    token: "ODI2NTM3NDM4NjgzNzI1ODM0.YGN6-Q.gBQ28JCAca9ldGYXt_awMXF7YV4",
    prefix:"!",
    fetchInvites: true
})

bot.onMessage({
  guildOnly: false
})
bot.loadCommands(`./komutlar/`)


bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Bot Aktif Hala Getirildi.  $userTag[$clientID]]` //Example Ready on Client
})

bot.readyCommand({
    channel: "LOG KANALI",
    code: `$djsEval[client.channels.cache.get("863895401982590989").join()]
hazırım ve girdim sese`
})



 bot.status({
  text: "Leyax🌙 0.0.1", //Buraya da yazınızı yazın mesela Anıl Piyancı - Aklımı Kaçırdım yapıp aşşağıya LISTENING atabilirsiniz
  type: "WATCHING", //Buraya WATCHING yazarsanız İzliyor - PLAYING yazarsanız Oynuyor - LISTENING yazarsanız Dinliyor yazar - STREAMING yazarsanız Yayında yazar
  status: "idle", //buraya idle yazarsanız durumu boşta olur - dnd yazarsanız rahatsız etmeyin - online yazarsanız çevrimiçi olur
  time: 12 ,//burası saniye cinsinden süredir 12 saniyede bir değişir
})

bot.command({
        name: "sa",
        code: `Aleyküm Selam <@$authorID> Hoşgeldin Bugün Nasılsın Acaba 😊`,
        nonPrefixed: true
})



bot.variables({
  sayaçlog:"",
  sayaç:"0",
  otorollog:"",
  otorol:"",
  mrol:"yok",
  myetkili:"yok",
  küfür:"kapalı",
  banlog:"",
  banrol:"",
  kicklog:"",
  kickrol:"",
})



//-------------- AVATAR----------------------



bot.command({
  name:"avatar",
  code:`
  $author[$username[$mentioned[1;yes]] Kişisinin Avatarı;$userAvatar[$mentioned[1;yes]]]
  $image[$userAvatar[$mentioned[1;yes]]?size=2048]
  $footer[İsteyen Kişi  $username;$authorAvatar]
  `
})

//-----------------------AVATAR--------------------




//-------------------------- NERDEN GİRDİ---------------------------
bot.command({
  name:"neyden",
  code:`$description[\`\`$username[$mentioned[1;yes]]\`\` **Kişisi Şu Çihazdan  Discord'a Giriyor **

  $replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1;yes]];mobile;Telefon'dan !;-1];desktop;Masaüstün'den;-1];none;Adam Çevrimdışı Lan ?;-1];web;İnternet Tarayıcısın'dan;-1]]`
})

//---------------------------- SAYAÇ SİSTEMİ ------------------------

bot.joinCommand({
        channel: "$getServerVar[sayaçlog]",
        code: `$description[$color[#00fff1]
        👤 Aramıza Hoşgeldin __**$username#$discriminator[$authorID]**__
      😋 Seninle Birlikte Toplam **$membersCount** Kişiyiz
      📣 Hedef Kişiye \`\`$sub[$getServerVar[sayaç];$membersCount]\`\` Kişi Kaldı !]
        `
})

bot.leaveCommand({
        channel: "$getServerVar[sayaçlog]",
        code: `$description[$color[#00fff1]
        👤 Hoşçakal __**$username#$discriminator[$authorID]**__
      😋 Toplam **$membersCount** Kişi Kaldık.
      📣 Hedef Kişiye \`\`$sub[$getServerVar[sayaç];$membersCount]\`\` Kişi Kaldı !]
        `
})
bot.onLeave()


//------------ SAYAÇ BİTTİ ------------------


//------------------- OTO ROL SİSTEMİ------------------
bot.joinCommand({
        channel: "$getServerVar[otorollog]",
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
        <@$authorID> Sunucumuza Hoşgeldin! Oto Rol Çalışmakta.
        `
})
//-------------- OTO ROL SİSTEMİ BİTTİ-----------------------

//------------------ KÜFÜR ENGEL -----------------------
bot.command({
  name:"$alwaysExecute",
  code:`
  <@$authorID> Küfür Engel Sistemi Açık !
  $deleteIn[3s]
  $deletecommand
  $onlyIf[$checkContains[$toLowercase[$message];amk;oç;siktir;anneni;piç;orosbu;orosbuçocuğu;siktir;sikerim;amını;sik]==true;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
  $onlyIf[$getServerVar[küfür]!=kapalı;]
  `
})
//----------------------- KÜFÜ ENGEL BİTTİ ----------------
