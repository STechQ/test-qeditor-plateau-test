#### **MicroUI geçişi yapılan projelerde ortam geçişlerinde ekran açılmıyor hatalarında yapılması gereken kontroller**

 

**1.**    **Authorization da wiew_resource tablosundaki menü tanımları kontrol edilmelidir.**

 

**Quick** ile yapılan sayfalarda pageName’i ms_path kolonunda moduleName/pageName alanındaki pageName’ e bakılıyor buradaki pageName’lerin aynı olması gerekmektedir.

 

**Vue** ile yazılan sayfalarda component kolonu pageName ile aynı olup ms_path kolunu boş olmalıdır.

 

**2.**    **Ortamlarda yaşanan microUI sorunlarında inceleme adımları ;**

**Açılmak istenen ekrana request atıldığında F12 ile bakıldığında network sekmesine bakılmalıdır.**

 

Örn http://ui.tkb-kit.dev.rally.softtech/microui/paymentplan/qjson/OdemePlaniListelemeTKB.js

·     **Network de 404 hatası alınıyor** ise ilk olarak yukarıda belirtilen 1. Madde kontrol edilmelidir.Daha sonra build de çıkan dist klaösüründe ilgli sayfanın olup olmadığı kontrol edilmelidir.

·     **Network de 502 hatası alınıyor**  ise ilgili ortama kurulum yapılmamış veya kube_rally de ilgili micro servisin data bölümünde **"serveUIComponents": true** olup olmadığı kontrol edilmelidir.

·     **Network de 504 hatası alınıyor** ise kurulumdan sonra ayağa kalkıp kalkmadığı yandaki linkten ilgili ortam için kontrol edilmelidir. à http://config.tkb-mssql.dev.rally.softtech/

·     **Network de 302 hatası alınıyor** ise kurulumdan sonra dosyalar düzgün kopyalanmamış olup build.gradle aşağıdaki kısım eklenmelidir 
![Untitled](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/microuiSikYapilanHatalar/buildGradle.png)

 

 

**3.**    **cJson of undefined hatasında yapılması gerekenler.**

·     Yukarıdaki 1. Madde kontrol edilmelidir.

·     http://ui.tkb-kit.dev.rally.softtech/microui/paymentplan/qjson/OdemePlaniListelemeTKB.js ilgili ekranın linki açılarak register edilen ekranın adının başında “/” olmadığı kontrol edilir. Eğer “/” var ise yeniden build alınarak deploy edilmelidir olması gerek görüntü aşağıdaki gibidir.

![2d](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/microuiSikYapilanHatalar/odemePlaniListeleme.png)

Authorization da view_resource tablosundaki menü tanımı nasıl olmalı|

<!-- NLP:Authorization da view_resource tablosundaki menü tanımı nasıl olmalı|Ortamlarda ekranım açılmıyor hatası|Micro ui geçisinden sonra ekran gelmiyor|Tkb-int ortamında ekranım çalışıyor ama farklı ortamda çalışmıyor|Kurulum yaptıktan sonra ekranım bozuldu|Microui geçişi sonrası sayfa açılmıyor|Networkte 404 hatası alınıyor|Networkte 502 hatası alınıyor|Networkte 504 hatası alınıyor|Networkte 302 hatası alınıyor|cJson of undefined hatası alıyorum -->
