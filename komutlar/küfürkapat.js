module.exports = {
  name:"küfürengel-kapat",
  code:`
  Küfür Engel Sistemi Kapatılmıştır !
$setServerVar[küfür;kapalı]
$onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
`
}
