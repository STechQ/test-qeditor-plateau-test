## **Domain Componenti Quick 2.0 editörüne nasıl entegre edebilirim?**

Domain componentlerin Quick 2.0 editörüne entegre etmek için uygulamanız gereken aşamalar aşağıdaki gibidir.

**1-MicroUI oluşturma**

**2-MicroUI içerisinde domainComponentin yazılması** 

**3-MicroUI içerisinde domain componentin proplarının ve eventlerinin tanımlanması** 

**4-Kabuk içerisinde microUI tanımının yapılması**

**5- Editör içerisinde domain componentin listelenmesi ve render edilmesinin kontrol edilmesi**



## **1- MicroUI Oluşturma**

İlk adım olarak microUI projemizin bulunmasının istediğimiz klasör içerisinde git-bash terminalini açıp  "**symphony-cli mui-create moduleName**" komutunu çalıştırıyoruz. ModuleName olarka adlandırdığımız kısım sizin microUI projenizin adı olacaktır.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/gitBash.PNG) 

Komut tamamlandıktan sonra klasörünüz içerisinde microUI dosyanızı görebilirsiniz.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/fileFolder.PNG) 



## **2- MicroUI içerisinde domainComponentin yazılması**

Oluşturduğumuz microUI projesini vsCodeda açıp src/components altına oluşturmak istediğimiz domain componentini ekliyoruz

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/addDomainComponent.PNG) 



## **3-MicroUI içerisinde domain componentin proplarının ve eventlerinin tanımlanması**

MicroUI projeniz içerisinde bulunan indexVCompNames.json dosyasının içerisine oluşturduğunuz Domain Componentinin prop ve eventlerini örnekteki gibi tanımlayabilirsiniz. Bu aşamadaki önemli olan nokta oluşturduğunuz Domain componentinin bulunduğu dosya konumunu doğru vermeniz olucaktr

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/setDomainComponentProp.PNG)  

## **4-Kabuk içerisinde microUI tanımının yapılması**

QUI projesinizin içerisine oluşturduğunuz microui dosyasını localProxy.yaml dosyası içerisinde proxylemeniz gerekmektedir.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/setMicroUIProxy.PNG)  

MicroUI projesinin localProxy.yaml dosyası içerisinde tanımlanmasından sonra, microUI projemizin settings.yaml ve settings-proxy.js dosyaları içerisinde de tanımlamalarının yapılması gerekmektedir.

Settings.yaml dosyası içerisindeki DomainModuleList kısmına microUI tanımımızı yaptıktan sonra, aynı işlemi settings-proxy.js dosyası için yapıyoruz.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/setSettingsYamlDomainModuleList.PNG)  

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/setSettingsproxyDomainModuleList.PNG)  

**5-Editör içerisinde domain componentin listelenmesi ve render edilmesinin kontrol edilmesi**

Quick 2.0 editöründe settings kısmında bulunan Domain Service Prefix ayarlarına girip, QUI projemizin ayakta olduğu urli yazıp 

save project butonuna basmamız yeterli olacaktır, ardından oluşturduğunuz domain componenti component listesinde görüp kullanmaya başlayabiliriz

![image-20210415180946007](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/setLocalUrl.PNG)

![image-20210415181146025](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/domainComponent/DomainComponentShown.PNG)