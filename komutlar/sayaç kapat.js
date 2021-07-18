module.exports = {
  name: "sayaçkapat",
  code: `
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $resetServerVar[sayaçlog]
  $resetServerVar[sayaç]
  Sayaç Sistemi Kapatılmıştır.
  `
}