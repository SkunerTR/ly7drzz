module.exports = {
  name:"küfürengel-aç",
  code:`
  Küfür Engel Sistemi Açılmıştır !
$setServerVar[küfür;açık]
$onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Bunun İçin Yetkin Yok !]
`
}
