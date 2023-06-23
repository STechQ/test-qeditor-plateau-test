# MicroUI entegrasyonu

## İçerinde **sadece Vue ve Hybrit ( hem Vue hemde Quick )** ile yazılmış projelerde MicroUI entegrasyonu yapılırken yapılması gereken adımlar ;

### Projeye eklenmesi gereken dosyalar 

####*copyBundle.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```ts
const moduleName = require("./indexModuleName");

const goRun = require("microuiexternal/external/moduleBundleCopier");

goRun.GoRun(moduleName);

```

#### index.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```ts
import Components from './src/components'
import Pages from './src/pages'
import Routes from './src/router'
import Store from './src/store'
//import * as application from './static/pjson'
import moduleName from "./indexModuleName";
// import { register } from "microuiexternal/external/sprinkle"
//onst moduleName = 'application'
const Module = {
  name: 'rally-application',
  routes: Routes,
  store: Store,
  components:Components,
  pages:Pages,
  moduleName,

  // install: function(app, options) {
  //   if (app._application_installed_) {
  //     return
  //   }
  //   app._application_installed_ = truecd
  // register(app, this, Pages, moduleName)
  // }
};
//export {application}
export default Module
```

#### indexCompNames.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```ts
//yaygınlaştırılacak versiyon bilgisi için package.json eklenmelidir.

*const* *pkg* *=* require*(*"./package.json"*)*;

 

const compNames = {
   // Bu kısımdaki isimler src/pages/index.js deki import ve export edilen kısımdan alınmalıdır. Sayfanızda vermiş olduğunuz name sayfa adı ile aynı ise true vermeniz yeterli olacaktır Örneğin Application: true, gibi eğer sayfanızın adı farklı ise OrganisationDocumentList: { name: "organisation-document-list" }, örnekteki gibi verilmelidir
  Application: true,
  ApplicationBasket: true,
  OrganisationDocumentList: { name: "organisation-document-list" },

// Bu kısımdaki isimler src/components/index.js deki import ve export edilen kısımdan alınmalıdır. Sayfanızda vermiş olduğunuz name sayfa adı ile aynı ise true vermeniz yeterli olacaktır Örneğin FirmActivity: true, gibi eğer sayfanızın adı farklı ise MainApplicationInfo: { name: "main-application-panel" }, örnekteki gibi verilmelidir

  moduleDomainComponentList: {
​    MainApplicationInfo: { name: "main-application-panel" },
​    FirmActivity: true
​    
  },
  // bu kısıma versiyon bilgisi eklenir.
  version: {
​    buildVersion: pkg.version,  
  },
};
export default compNames; 
```

#### indexInitial.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```ts
import { GetObjectStore } from "microuiexternal/external/ObjectStore";

const initial = {
  GetObjectStore,
  Go: () => require("./index")
};

export default initial;
```

#### indexModuleName.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

Projenizin modüle name i verilmelidir. Örneğin "application"

module.exports = "application";

 

#### webpack.config.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu) 

#### .babelrc

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```json
{

 "presets": [

  [

   "@babel/preset-env",

   {

​    "debug": false,

​    "targets": {

​     "browsers": [

​      "> 1%",

​      "last 2 versions",

​      "not ie <= 8"

​     ]

​    }

   }

  ]

 ]

}
```

 

 

#### **package.json**

 

Örnek bir package.json eklenmiştir aşağıdaki resimde mutlaka eklenmesi gereken alanlar belirtilmiştir.

 ![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```
{ 

 "scripts": {

   //eklenecek alanlar  

  "qbuild": "npm run qremoveDist && npm run qcopyBundle && webpack",

  "qcopyBundle": "node copyBundle.js",

  "qbuildWatch": "npm run qremoveDist && webpack --watch",

  "qremoveDist": "rm -rf ./dist/*",

  "qlink": "npm link sprinkle-ui",

  "qgo": "npm run qlink && npm run qbuild"

 "devDependencies": {

//babel kısmı

  "@babel/core": "^7.7.7",

  "@babel/plugin-proposal-class-properties": "^7.8.0",

  "@babel/plugin-proposal-decorators": "^7.8.0",

  "@babel/plugin-proposal-export-namespace-from": "^7.0.0",

  "@babel/plugin-proposal-function-sent": "^7.1.0",

  "@babel/plugin-proposal-numeric-separator": "^7.0.0",

  "@babel/plugin-proposal-throw-expressions": "^7.0.0",

  "@babel/plugin-syntax-import-meta": "^7.0.0",

  "@babel/plugin-transform-react-constant-elements": "^7.0.0",

  "@babel/plugin-transform-runtime": "^7.8.0",

  "@babel/preset-env": "^7.7.7",

  "@babel/register": "^7.7.7",

  "autoprefixer": "^7.1.2",

   //webpack kısmı

  "webpack": "^4.30.0",

  "webpack-bundle-analyzer": "^2.9.0",

  "webpack-cli": "^3.3.2",

  "webpack-dev-middleware": "^1.12.0",

  "webpack-hot-middleware": "^2.18.2",

  "webpack-merge": "^4.1.0",

  "webpackbar": "^3.2.0",

  "source-map-loader": "^0.2.4",

  "style-loader": "^0.23.1",

  "node-sass": "^4.9.0",

  "sass-loader": "^7.0.1",

  "immutable": "^3.8.2",

//microUI external

  "microuiexternal": "^1.0.69146"

 },

 

}
```

 

#### **Setting.gradle** 

Örnek bir setting gradle dosyası eklenmiştir. Dikkat edilmesi gerekn kısım settings.gradle içerisinde rootprojectName ve ilgili microui adı olmalıdır.

include 'collaterall'

include 'collaterall-ui'

rootProject.name = 'collaterall'

 

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

#### **Jennkinsfile**

Örnek bir jenkinsfile eklenmiştir ilgili microUI ‘ın adı olmalıdr.

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

#### **Root Project Build.Gradle**

Örnek bir dosya eklenmiştir versiyonların backend ile aynı olması gerekmektedir.

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

#### **MicroUI Build.Gradle**

MicroUI içerisinde gradle folder ve gradlew dosyası olmalıdır bu dosyalar eklendikten sonra ekteki build gradle eklenmelidir.

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

 

 

### Projede replace edilmesi gereken bölümler

Projenizde aşağıdaki gibi import edilmiş bölümler var ise fromdan sonraki kısmı “microuiexternal/external/sprinkle" olacak şekilde değiştirmeniz gerekmektedir.

import {RBasePage} from "sprinkle-ui"; à replace edilmemiş hali.

import {RBasePage} from "microuiexternal/external/sprinkle"; à replace edilmiş hali.

from "lodash" 
from 'lodash' 
from 'sprinkle-ui' 
from "sprinkle-ui" 
from "moment"
from 'moment' 
from "vue-echarts-v3/src/full.js"
from 'vue-echarts-v3/src/full.js'
from "microuiexternal/external/sprinkle"
from "microuiexternal/external/lodash"
from "microuiexternal/external/moment"
from "microuiexternal/external/vue-echarts-v3.js"

## **Quick** ile yazılış sayfaların MicroUI entegrasyonu yapılırken yapılması gereken adımlar

### copyBundle.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```ts
const moduleName = require("./indexModuleName");
const goRun = require("microuiexternal/external/moduleBundleCopier");
goRun.GoRun(moduleName);
```

### indexModuleName.js

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

Projenizin modüle name i verilmelidir. Örneğin "application"

module.exports = " collaterall";

### package.json

Örnek bir package.json eklenmiştir aşağıdaki resimde mutlaka eklenmesi gereken alanlar belirtilmiştir. 

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

```json
{
 "name": "rally-collaterall",
 "scripts": {
  "qbuild": "npm run qremoveDist && npm run qcopyBundle",
  "qcopyBundle": "node copyBundle.js",
  "qbuildWatch": "npm run qremoveDist && webpack --watch",
  "qremoveDist": "rm -rf ./dist/*",
  "qlink": "npm link sprinkle-ui",
  "qgo": "npm run qlink && npm run qbuild"
 },
 "devDependencies": {  
  "source-map-loader": "^0.2.4",
  "style-loader": "^0.23.1",
  "node-sass": "^4.9.0",
  "sass-loader": "^7.0.1",
  "immutable": "^3.8.2",
  "microuiexternal": "^1.0.69146"
 },
}
```

### Setting.gradle

Örnek bir setting gradle dosyası eklenmiştir. Dikkat edilmesi gerekn kısım settings.gradle içerisinde rootprojectName ve ilgili microui adı olmalıdır.

include 'collaterall'

include 'collaterall-ui'

rootProject.name = 'collaterall'

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

### Jennkinsfile

Örnek bir jenkinsfile eklenmiştir ilgili microUI ‘ın adı olmalıdr.

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

### Root Project Build.Gradle

Örnek bir dosya eklenmiştir versiyonların backend ile aynı olması gerekmektedir.

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

### MicroUI Build.Gradle

MicroUI içerisinde gradle folder ve gradlew dosyası olmalıdır bu dosyalar eklendikten sonra ekteki build gradle eklenmelidir.

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)


## MicroUI entegrasyonu yapılmış sayfalarda yeni sayfa ekleme

indexCompNames.js içerisinde ilgili alana yeni eklenecek komponent veya sayfa eklenmelidir.

### indexCompNames.js

```ts
const compNames = {
   // Bu kısımdaki isimler src/pages/index.js deki import ve export edilen kısımdan alınmalıdır. Sayfanızda vermiş olduğunuz name sayfa adı ile aynı ise true vermeniz yeterli olacaktır Örneğin Application: true, gibi eğer sayfanızın adı farklı ise OrganisationDocumentList: { name: "organisation-document-list" }, örnekteki gibi verilmelidir
  Application: true,
  ApplicationBasket: true,
  OrganisationDocumentList: { name: "organisation-document-list" },
// Bu kısımdaki isimler src/components/index.js deki import ve export edilen kısımdan alınmalıdır. Sayfanızda vermiş olduğunuz name sayfa adı ile aynı ise true vermeniz yeterli olacaktır Örneğin FirmActivity: true, gibi eğer sayfanızın adı farklı ise MainApplicationInfo: { name: "main-application-panel" }, örnekteki gibi verilmelidir

  moduleDomainComponentList: {
​    MainApplicationInfo: { name: "main-application-panel" },
​    FirmActivity: true
​    
  }
};
export default compNames;
```
## MicroUI entegrasyonu yapılış projelerde localde çalışma


MicroUI entegrasyonu yapılmış projelerde localde çalışırken aşağıdaki komutlar çalıştırılır (*npm install npm run qbuild*) daha sonra dist klasöründe aşağıdaki resimdeki örnek dosyaların oluştuğu kontrol edilmelidir. Projenizde Quick ile yapılmış sayfa yok ise **qjson** klasörü oluşmayacaktır. Projeniz sadece Quick ile yazılmış sayfalar içeriyor ise sadece **qjson** klasörü oluşacaktır. Kontroller yapıldıktan sonra UI ‘ın package.json dosyasında ilgili MicroUI linklenilerek **npm install ve npm run dev** komutları çalıştırılmalıdır.
 

​        npm install 

​        **npm run qbuild**  à **git bash** ‘de çalıştırılması gerekmektedir.

veya yaptığınız her değişiklikte yeniden js dosyası üretilsin istenilirse **npm run qbuildWatch** yapılamlıdır.

![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

**npm run qbuild** sonrasında örnek MicruUI dist klasörü

Aşağıdaki hatalar ile karşılaşılması durumunda node_modules den ilgili ( node-sass ,vue-loader,sass-loader, css-loader ) silinerek yeniden npm install yapılamlıdır.


![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

Hatasız oluştuğunun görüntüsünün bir ekran görüntüsü


![img](https://gitlab.softtech/quickpublic/quick/-/wikis/MicroUI/MicroUI-Entegrasyonu)

UI’da proxytable da yapılan değişiklik ile localde çalışabilmek için için UI’da pull alındıktan sonra aşağıdaki gibi **microUITarget** eklenip local adres gösterildiğinde locale linklenmiş olacaktır. **microUITarget** olmadığında SERVER_NAME ‘e set edilen ortamdan ilgili js çekilecektir.Bu değişiklik ile Package.json da local gösterilip **npm install** yapılmasına gerek kalmamıştır.

```js
 "/services/account": {

  target: `http://account.${SERVER_NAME}.dev.rally.softtech/`,

  microUITarget: `../../account/account-ui/`,

  pathRewrite: {

   "^/services/account": "/"

  }
 },
```
<!-- NLP:Localde çalışamıyorum|Localde değişikliklerim yansımıyor|Localde ekranı nasıl debug ederim|Localde ekranı nasıl görebilirim|Ekran değişikliklerimi localimde nasıl göreceğim|Localde microUI geçişi yapılmış projelerde nasıl build alınır|Localdeki servislerime nasıl gidebilirim|Localimi ayağı kaldırmam için ne yapmam gerekir -->