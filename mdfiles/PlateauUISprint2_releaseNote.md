# Plateau UI Release Notes - Sprint 2
**19.12.2022**

## Vuetify 

### New Features

- **crypto.randomUUID()** method has been added. The randomUUID() method of the Crypto interface is used to generate a v4 UUID using a cryptographically secure random number generator.

   ```
   crypto.randomUUID();
   ```

   https://jira.softtech.com.tr/browse/PLT-14425

   https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID

- Added tooltip BodyFontFamily, tooltipBodyFontSize, tooltipBodyFontStyle, tooltipBodyFontWeight, tooltipBodyFontLineHeight props to DoughnutChart, BarChart, LineChart components.

   ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Charts/LineChart-tooltip.gif)

   

   ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Charts/DoughnutChart-tooltip.gif)

   

   ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Charts/barchart-tooltip.gif)

   

- Using images other than mdi icons in the QMenu component is also provided.  
```
imagePath = Url.resolve({url='/static/images/cekmatiknew.png'})
```

![QMenu_UseImageFor_imagePath_Sample_Video](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QMenu_UseImageFor_imagePath_Sample_Video.gif)



### Bug Fixes

- Fixed an issue where the Alert.qjson css could not be displayed on mobile.

-  VDataTable component's mobileBreakpoint prop set to 600 by default.

- Fixed a bug where the component could not be selected from the editor if it contains a ghost component.


## Rally & Sprinkle

### New Features

- Rally UI-> Iam environment information given statically in Authenticated.js is provided from basic/api/metadatasetup service.
( https://jira.softtech.com.tr/browse/PLT-13237 )


### Bug Fixes

- "moment" npm package is upgraded from "2.29.1" to "2.29.4" for development penetration testing.

## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse. (https://discourse.rally.softtech/)

- VDataTable component's documentation updated.

  Plateau UI Web Documents: [VDatatable | Plateau UI (onplateau.com)](https://studio.onplateau.com/docs/ui/docs/Components/Vuetify-Components/VDatatable)

  https://studio.onplateau.com/docs/ui/docs/getting-started



## Mobile



### Android:

* The issue of obtaining a certificate from İşcep has been completed.
* Component properties were examined for style improvements.
* Download document tested.
* Added structure change for style enhancements.
* The bug of crashing when we put the application in the background has been resolved.

###### Components: 


* Fixed tabItems not showing correctly in Vtabs component. Tab header added according to the number of tabItems. VTabs structure changed.
* Fixed renderview performance issue. Moved the navigation drawer component to fragment thus improving the performance of the application.

* The development of the piechart component continued.

* VTabs crash problem on abone sepeti fixed.

* VTabsSlider component added.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint39_VTabSlider.jpg" style="zoom: 45%;" />


######  SuperSDK:

* Support given SuperSdk.

### IOS:

* QuickSimulator latest version released in app center with updated sdk.

* Added static clientid connection to QuickSimulator due to lack of device.

* Added structure change for style enhancements.

* In Messaging's preRender event equestObject.blockRender = true; In the form of a service call, the screen turned black was checked.

* QuickRenderer loading stuck issue and new build edits.

* Testing a page made with Quick with WebView.

* Embedded Banking - sdks can receive alert.json for error management, send to bridge control.

* Adding get in request and header in post.

* Mobile Preview Faz 1 started.

* Download document completed and tested.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_Sprint39_downloadDocument.gif" style="zoom: 50%;" />


###### Components: 

* Qlabel not appearing in vradio component issue fixed.

* Vtabs color issue fixed, vertical prop added. 

* BtnToggle stay selected issue fixed .

* Image prop added to Vcard component.

* Fixed an issue where clicking the Vselect arrow icon would not open.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint39_styleAndCardImgProp.gif" style="zoom: 30%;" />,<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint39_VSelectIconClick.gif" style="zoom: 30%;" />

###### SuperSDK: 

* Improvement of importing SuperSdk ssl certificates from shell application.
* SuperSdk integration document updated.
* Support given SuperSdk.
  

### Mobile Support :

* Screen development support given to Abone Sepeti.

* We started to correct and complete them by analyzing the deficiencies and errors on the screens of the Abone Sepeti

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/coralSupport_Sprint39_aboneSepeti.jpg" style="zoom: 0%;" />


