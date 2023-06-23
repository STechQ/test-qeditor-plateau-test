# Quick Release Notes - Sprint 26

## Vuetify 

### New Features

-  Added enableIamAuth prop to liveConnection component. If enableIamAuth prop is selected true, the first message forwarded to the webSocket will contain the token information as {"token":"XXX"}.   ( https://jira.softtech.com.tr/browse/PLT-10615 )

- Devex object and its methods are now displayed on IntelliSense in Quick editor.

- Added mobile consent management.

- Added BigDecimal formatting feature to VTextField component. ( https://jira.softtech.com.tr/browse/PLT-10752 )

- The digitsOptional option is provided via the RegionalDefinition field in the settings file.

- The scroll directive is available for use. To examine detailed usage, scroll document in Vuetify(https://vuetifyjs.com/en/directives/scroll/) can be examined.

 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/scrollDirective.gif" width="800px" height="auto">

- The **Quick.screen** object is opened for the scroll to top feature. There are **YOffset, XOffset, intoView and toTop** fields in this object and you can find their detailed usage in Quick API.

 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/scrollToTop.gif" width="800px" height="auto">
	
- **tabindex** prop is added to VInlineDatepicker.

- **input** event is added to VCombobox.

- When range feature is used in VInlineDatePicker, the calendar part used to close after selecting the first date, then the user would click the component again to open calendar for the second date input. This feature is updated so that the calendar closes after both of the start and end dates are selected.

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/rangeMode.gif)

- To pass data from quick 1.0 to quick 2.0 pages, you should put @ prefix to your store name while calling store.set in quick 1.0 **(e.g store.set('@mystore', 'myvalue'))**

  While fetching data, you should call **quick.containerServices.getStoreData('rallyStoreData') **in your quick 2.0 pages. rallyStoreData stores all the data from quick 1.0, which are set in rally store with @ prefix.  

- New input masking types are added to the VTextField as formatting options. In addition to the present ones, now users can format the VTextField as Turkish mobile phone (turkishmobilephone), International phone(internationalphone), multiple emails(multipleemails), and alphanumeric characters(alphanumericcharacters). These mask types are now shown in a combobox so that you can set them easier.

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTextField_masking.gif)

- VBadge component color prop is added.

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Vbadgecolorprop.gif)
	
	

### Bug Fixes

- Messaging Restored event fixed in Custom and Rendering Components.

- Resolved an issue for the live connection component regarding not reconnecting on connection interruptions when reconnect prop is set to true.

- Fixed the issue where input event does not work in VTextField component with format value. ( https://jira.softtech.com.tr/browse/PLT-10912 )

- The expression (Blanks) in the TR localization of the Header Filter in the DxDatagrid component is written in Turkish (Boş). ( https://jira.softtech.com.tr/browse/PLT-10822 )

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DxDataGrid_HeaderFilterBlankTrLocalization.PNG)

- In the pipeline.qjson preRender event, external localization information is obtained synchronously.( https://jira.softtech.com.tr/browse/PLT-10702 )

	```
		 quick.importLocalization(langCode, resourceList, { overrite: true });
	```
- stom CSS made to be the last CSS on the page. (https://jira.softtech.com.tr/browse/PLT-10093)

- Fixed circular reference error in LogHandler structure. (https://jira.softtech.com.tr/browse/PLT-8970)

- Fixed an issue with enforceDigitsOnBlur in VTextfield component. (https://jira.softtech.com.tr/browse/PLT-10746)

- The blocking problem in the blockRender field, which allows the rendering of the page to be blocked without a response, has been fixed. 

- The appearance problem that occurs when the number of columns of the datatable component in the QMenu is high has been fixed. (https://jira.softtech.com.tr/browse/PLT-10716)

- When the reset function is used upon the VInlineDatePicker component, the old value remained on the picker area and did not reset. This bug on the component is fixed.

- In the LiveConnection component, although the reconnect prop is true, previous channels that have been subscribed were lost. After fixing the bug, problems reconnecting all subscriptions when reconnecting a WebSocket are resolved.

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/LiveConnection_subscription.gif)  

- The rendering problem in the design time of the VTabs component placed in the VDialog has been fixed.  	

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VDialogMobileBreakpointBug.png)



## Rally & Sprinkle

### New Features

- In case of service errors when opening quick 2.0 screens in rally shell, redirection to ServiceError page development is completed 

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Rally2_0ErrorPageRedirect.gif)	


### Bug Fixes

- Fixed the issue where the alert message was blank when validation was not successful in Quick 2.0 screens in Rally UI. ( https://jira.softtech.com.tr/browse/PLT-9381 )
  
 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ValidationErrorInRallyUI.PNG)

- RTable addItemButtonText prop bug is fixed, the add item button's text can be set via addItemButtonText properly.

## Documentations - Editor Help 

- Newly added qson samples in the component documents are fixed so that they will be open in a new editor tab when you click on the qjson links.

 ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/HelpDocumentationWithNewTab.gif)


## Quick Coral

- 29 screens done on IOS and 9 screens done on Android. Hesaplama Araçları,KVKK,Ayarlar,Bize Ulaşın,Firma Detay,Proformalar,Sigorta Poliçeleri, Karşılama Ekranı (Home), Beni Hatırlalı Karşılama Ekranı, Beni Hatırla'lı Giriş, Kullanıcı değiştir, OTP, Yaklaşan Ödemeler Detay, BA/BS Mutabakat, Ayarlar, Navigasyon Ana Menü, Ana Ekran Dashboard, Proje Listesi, Talep İzleme, Taleplerim ve Proje Listesi

- 39 plt closed on IOS and 82 plt closed on Android

### Quick Android:

 <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint25_OtpScreen.gif alt="Superapp Animation" style="zoom:50%;" />
	
 <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint25_NavDraw.gif alt="Superapp Animation" style="zoom:30%;" />

- Android Quick Simulator Review
- Embedded Banking - DeepLink param implementation

- PLT support for screens opened for testing:

  Components: 

  ​       VTextArea

  ​       VSelect

  ​       VAlert

  ​       Radio

  ​       VCheckBox

  ​       VTextfield

  ​	RenderingUI:

  ​           MainCss updates.

### Quick IOS:

- Quick and MiniApp simulator and usage documentation completed.  

 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iosSimulator.gif" alt="WhatsApp Video 2022-03-14 at 09.51.30" style="zoom:28%;" /> 
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iosSimulator2.gif" alt="simulatör" style="zoom:60%;" />

- Quick Simulator network issues fixed.

- Create Component performance issues fixed.

- Leasing loading issues fixed

- Consent development continued and return values were added to the hostTrigger method

- Added deepLinkParameters method and made improvements

- PLT support for screens opened for testing:

  ​	Quick Bridge:

  ​             nb_BeforeRenderStarted

  ​			 updateStlyeChangesOnly

  ​             Bridgets     

  ​	QuickComponents:

  ​            VDialog

  ​            VCarousel

  ​            QLabel

  ​            VStepper

  ​            VButton

  ​	RenderingUI:

  ​           MainCss updates.

  ​           Version updates

