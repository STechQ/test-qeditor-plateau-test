MicroUI’ların backendinde bulunan localization klasörleri ilgili microUI’ın src klasörünün altına konularak istenilen ortama deploy edilmesi gerekmektedir. Bir kerelik ilgili ortama UI kurulumu yapılmalıdır. Kurulumu yapılan microUI’larda localization labellerı metadatadan değil de modülden load edilecektir.

 

Örneğin;

**D: \workspace\master\product\ product \src\main\resources\localization** ‘ klasörü à 

**D: \workspace\master\ product \ product -ui\src ‘** klasörüne taşınmalıdır.

 

Servis konfigürasyonları aşağıdaki gibi güncellenmelidir.

```
rally:
  localization:
   enabled: false à ‘false olarak güncellenmelidir’
 
 eureka:
  client:
   enabled: true
  instance:
   metadataMap: à Aşağıdaki kırmızı kısım silinmelidir.
    localizationService: ${spring.application.name}
    localizationServiceId: ${spring.application.name}:${random.int}
    localizationServiceDeploy: /localizations
```



Localization geçişi yapılan projelerde **npm run qbuild** veya **npm run qbuildWatch**  denildiğinde Localizationlarda **Default.json** larda sorun olması halinde aşağıdaki gibi uyarı verilmektedir. Default.jsonlardaki sorun giderildiğinde build hatası düzelecektir.

 ![3](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/microuiLocalization/qbuild.png)

Default.jsonların olmaması durumunda build hata almayacaktır.Loglarda uyarı verilmektedir.

![4](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/microuiLocalization/qbuild2.png)

<!-- NLP:Buildde localization dosyalarını nasıl çıkartabilirim|Yeni tanımladığım localizationları nasıl görebilirim|MicroUI'larda localization geçisi yapıldıktan sonra metadatada hangi konfigurasyonu yapmalıyım|Localizationları MicroUI'ların altına taşımak için ne yapmalıyım|Localization nasıl yapılır|Label hatalarında ne yapmalıyım|Localization dosyası yüzünden build patladı|Ekranda label_ hataları var|Localizationda yaptığım değişiklikler yansımıyor -->