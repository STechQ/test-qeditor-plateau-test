# Quick Release Notes - Sprint 25

## Vuetify 

### New Features

- DevExpress store methods are opened to typescript support.

- **keydown** event is added to "v-combobox" compponent. 

- Websocket close event is added to the Live Connection component. Close event is fired when a connection with a Websocket is closed. On reconnect prop being true, the event reestablishes the connection on any interruption.

- Help documents have been updated and they have been sorted up by Quick's usage priority. Detailed information can be found in the related documents.

- When the page or browser is closed, the browser warns the user and if an event named **onPageClose** is written on Messaging, it is triggered. If this event doesn't exist on Messaging, this feature will be disabled.

- While creating a page for the mobile application in the editor, service network requests from the mobile simulator are also provided.

- While creating a page for the mobile application in the editor, it is ensured that the customComponents appear in the mobile simulator.

- While creating a page for the mobile application in the editor, the editor's editMode information is transmitted to the mobile simulator.

- While creating a page for the mobile application in the editor, the css information loaded from the "settings > style" section of the editor is transmitted to the mobile simulator.

- Mobile application logs (log, error, warning, debug) can be viewed on the console in mobile simulator.

- PersistentPlaceholder prop added to VAutoComplete component.

- SmallChips prop added to VCombobox component.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VComboboxSmallChips.gif)

- QlightBox body drag feature removed

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QLightBoxDragBodyDisable.gif)

- Step property added to Vtextfield component to display seconds property in components whose type is time.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTextFieldStep.gif)

-  PreventPaste property added to Vtextfield component. When activated, it prevents the external paste process.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTextFieldPreventPaste.gif)

-  QRCode component added to the Quick 2.0 editor.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QQRCode.png)

- Multiple e-mail checks were made by separating them with , (comma) or ; (semicolon)  in the e-mail validation.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/EmailValidation.gif)

- WebSDK IAM integration multitenant development completed.

- WebSDK IAM integration silent refresh token development completed.

### Bug Fixes

-  The layout issue on the pages originating from the **Vuetify version has been fixed**.

## Rally & Sprinkle

### New Features

- RallyDispensation component added to Quick 1.0 editor.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RallyDispensationRelaseNote.PNG)


-  The Multitab feature has been removed from the home button in the Rally shell

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RallyHomeButtonMultitabDisable.gif)


### Bug Fixes

- Fix on **process.{{fieldKey}}** keywords which are isProcess, changeProcessMetadata, requestObj, addProcessVariables, uiModelData and processMetaDataReal.

- **blockRender** keyword when a request tries to block the rendering has been fixed.

- **setFormData** method and set container component values have been fixed.

-  Local Rally UI project is enabled to work with local microUI. ( https://jira.softtech.com.tr/browse/PLT-10168 )

- Projects that are integrated with WebSdk can use the GoldenLayout component.( https://jira.softtech.com.tr/browse/PLT-10425 )


## Documentations - Editor Help 

- Documentation of Quick 1.O components was arranged in the desired format.

## Quick Coral

- 29 screens done on IOS and 9 screens done on Android. Hesaplama Araçları,KVKK,Ayarlar,Bize Ulaşın,Firma Detay,Proformalar,Sigorta Poliçeleri, Karşılama Ekranı (Home), Beni Hatırlalı Karşılama Ekranı, Beni Hatırla'lı Giriş, Kullanıcı değiştir, OTP, Yaklaşan Ödemeler Detay, BA/BS Mutabakat, Ayarlar, Navigasyon Ana Menü, Ana Ekran Dashboard, Proje Listesi, Talep İzleme, Taleplerim ve Proje Listesi )


### Quick Android:

- Embedded Banking - Android Sdks can receive loading.json

- Embedded Banking - Android - Sdks can receive Pipeline.json, send to bridge.

- VFileinput crash fixed

- Fragment library version updated (1.2.4 -> 1.3.6)

- Fixed bugs on OTP screen

   <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint25_OtpScreen.gif alt="Superapp Animation" style="zoom:50%;" />

  

- Bugs in Navigation Drawer solved

   <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint25_NavDraw.gif alt="Superapp Animation" style="zoom:30%;" />

- Fixed some padding issues

- Adding an event to the QDocumentView component

- Support was given to Moralabs components, and testing and feedback was provided for completed component.

- superapp sdk integration android 7 version support can be added

- PLT support for screens opened for testing:

    Components: 

  ​       Btn Toggle

  ​       AppBar

  ​       ExpansionPanel

  ​       Textfield

  ​       CheckBox

  ​       Carousel

  ​       Loading Animation

  ​       Inline Date Picker

  ​       VChip

  ​       VSelect

  ​       Missing icons added

    

  ​	RenderingUI:

  ​           MainCss updates.



### Quick IOS:

- Simulator Installation and Usage Documentation has been prepared.

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iOS_Sprint25_simulatorQR.png alt="Superapp Animation" style="zoom:30%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iOS_Sprint25_simulatorQR_editor.png alt="Superapp Animation" style="zoom:30%;" />
  

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iOS_Sprint25_simulatorQR_mobile.png alt="Superapp Animation" style="zoom:30%;" />

- QR Code Reader (Mini App tester) component analysis support started to be developed.

- Consent management analysis support and continued to be developed.

- PLT support for screens opened for testing:

  ​	Quick Bridge:

  ​             Basecomponent

  ​             VStepper

  ​             Bridgets

  ​             heightInherit

  ​	QuickComponents:

  ​            VDialog

  ​            VStepper

  ​            VCarousel

  ​            VAlert

  ​           QDocumentViever

  ​          Missing icons added

  ​	RenderingUI:

  ​           MainCss updates.

- Support was given to Moralabs components, and testing and feedback was provided for completed component.

