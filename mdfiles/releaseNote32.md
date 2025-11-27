# Quick Release Notes - Sprint 32

## Vuetify 

### New Features

- **GETBLOB** type request is added to make a request in get method which returns blob type.

- **minEngineLogLevel** field has been added so that the level of log messages from the render engine can be controlled. 
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/minEngineLogLevel.png)

- Base64 Encoding is using to store or transmit binary data by converting it to text. 

  ```js
  Usage:

  quick.encoding.atob(encodedString: string)

  quick.encoding.btoa(stringToEncode: string)
  ```

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/encoding.gif)

- Information about why the connection was opened is transmit as a parameter to the onConnectionOpen event of the LiveConnection component. (ConnectionError, ConnectionClose, UserSend, AutoConnect)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/LiveConnectionReason.gif)
  
### Bug Fixes

- After the date was selected, the same value came after the incoming qvalue was deleted. The code was updated to change the qvalue.(https://jira.softtech.com.tr/browse/PLT-12553)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/inlineDatePickerBug.gif)

- VNavigationDrawer was losing its responsiveness when some values related to styling were changed. Added the mobileBreakpoint prop to prevent the  problem. (https://jira.softtech.com.tr/browse/PLT-12644)


  
## Rally & Sprinkle

### New Features

- Shortcuts prop is added to RNumericInput and RCloumnNumericInput. When the shortcuts prop is set to true, pressing the letter 'K' puts 3 zeros represent as the number thousand digits , and pressing the letter 'M' puts 6 zeros as million digits .

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/RNumericInput/shortcutsProp.gif)

### Bug Fixes

   --

## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse.( https://discourse.rally.softtech/ )

## Websube Converter

- The qjson files created by making converter work for Web Branch DTSs were uploaded to a common repo.

- IMS request and response string classes were generated for the service layer from the display DTS.

## Quick Coral

- 39 screens done on IOS and 18 screens done on Android at İş Leasing projects

- 23 plt closed on IOS and 34 plt closed on Android

### Quick Android:

  - Degrade analysis completed.

  - Shadow analysis completed.

  - SuperSDK support.
  
  - Components:		

    Qvideo component enhancement.

    Checkbox locations and ordering fixed at My Request page.

    VSelect fixed size changing.

    Named component development and code review completed.

    

   <img src="http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_sprint31_qvideo.gif" alt="review_quick_ios" style="zoom:30%;" />


### Quick IOS:

* Embedded certificate issue resolved.

* Gradient transition analysis was performed.

* QuickSDK integration completed.

* Github Actions development.

* Github Actions - Build Script

* CSS:

  Bağımsız iç stiller için yapı değişikliiği.

* Components:

  Videoplayer inside qvideo changed from html player to avplayer.

  Video component testing has been done.

  Qmap updated location and orientation.

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint31_qvideo.gif" alt="review_quick_ios" style="zoom:60%;" />

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint31_QMapAdressSelection.gif" alt="review_quick_ios" style="zoom:30%;" />

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_release32_QMapCurrentLocation.gif" alt="review_quick_ios" style="zoom:20%;" />




### Coral Support :

**SuperApp :**

​- Ödeme Bileşeni component completed 

 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_release32_OdemeBlieseni_.gif" alt="review_quick_ios" style="zoom:50%;" />

