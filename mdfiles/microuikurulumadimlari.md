**MicroUI geçişi yapılan ekranlarda kurulum yapılırken dikkat edilmesi gerekenler;**

·     **Root proje versiyonu ile backend versiyonu aynı olmalıdır.**

 

Microui geliştirmesi sonrası Kurulumlar sırasında microui:**latest** yerine servis versiyonunu çekecek şekilde ayarlandı, şu andan itibaren yapılacak kurulumlarda Servis versiyonu ile Microui versiyonu aynı olarak kurulumlar gerçekleşecek. İlgili versiyonun Microui paketi oluşmadı ise kurulumlardan hata alınacak bilginize.

Root proje versiyonu örnek olarak : https://gitlab.rally.softtech/rally/collaterall --> root projesindeki build.gradle dosyası

backend yani à https://gitlab.rally.softtech/rally/collaterall/tree/master/collaterall adresindeki build.gradle dosyasındaki versiyonların aynı olması gerekmektedir.

```
buildscript {
 ext {

  project.version = "2.60.0-SNAPSHOT"

  rootProject.version = project.version

  if (project.hasProperty('projVersion')) {

   project.version = project.projVersion

  }

  isProduct = 'true'

  publishSource = 'true'
 } 
}

 if (project.hasProperty('projVersion')) {

 project.version = project.projVersion

} else {

 project.version = '2.60.0-SNAPSHOT'

}
```

 

·     **Versiyon alınırken dikkat edilmesi gerekenler**

Normalde hep snapshottan işlem yapmalı ancak versiyon alınırken master branchde version'u değiştirip pushlanmalı sonrasında tag atılmalıdır. Daha sonra yine snapshot a çekilmesi lazım eski versiyonu unuturlarsa jenkinste build başarısız olacaktır.

<!-- NLP:Ortama deployment nasıl yaparım|Ortama kurulum nasıl yaparım|Micro ui geçişi yapılan projelerde nasıl kurulum yapmalıyız|Ekran değişikliğimi ortama nasıl çıkarım|Proje versiyonumu nasıl değiştiririm|Versiyon alırken nelere dikkat etmeliyim -->