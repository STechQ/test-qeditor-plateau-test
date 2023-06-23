# Quick Release Notes - Sprint 29

## Vuetify 

### New Features


- Added **bignumber** library support.
```js
//define big number
let num = quick.Quick.toBigNumber('123456789123456789.789');

//123456789123456789.789 + 987654321987654321.123
let a = num.plus('987654321987654321.123');

//123456789123456789.789 - 87654321987654321.123
let b = num.minus('87654321987654321.123');

//123456789123456789.789 / 3.76
let c = num.div('3.76');

//123456789123456789.789 * 4.98
let d = num.times('4.98');

//toString(base?: number);
let e = num.toString(10);
```

- Post method is added to the QFrame component which provides send parameter with HTTP POST request.

- Added onLoad event to the QFrame component which is triggered when the page is loaded.  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/qframe_onload_added.gif)
  

- onCellPrepared event is added to the DxDataGrid component. It can be triggered when the grid is created. Users can define css classes through this event. 
  
  
### Bug Fixes

- Fixed an LRID issue when switching back and forth between pages.

- Removed "Process Page" button on New Page modal.

  ![](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ProcessPageButton.png)

- Header of Tree View has been made static on the top.

  ![](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/treeViewHeader.gif)
  
- displayError parameter on validate and validateAll method made nullable value. It is now not mandatory to define this parameter when using these methods. 


- If a Golden Layout tab closed after it opened in a popup window, this operation did not trigger the paneClosed and paneCreated events. Users see the tab names as undefined. This bug is fixed. (https://jira.softtech.com.tr/browse/PLT-11870)  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/goldenlayout_popup.gif)


- When any Custom Event is added, the externalVisible checkbox can be set to true false without any change in the script field. (https://jira.softtech.com.tr/browse/PLT-11914)  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/externalVisible.gif)

  
  
## Rally & Sprinkle

### New Features

 --

### Bug Fixes

- Login problem in Rally UI MultiTab has been fixed. When a new tab is opened, login screen did not work properly. The problem was solved by making improvements. (https://jira.softtech.com.tr/browse/PLT-11005)


## Documentations - Editor Help 

- Most of the Plateau UI instruction videos are done for educational purposes to users.

- Plateau UI usage documents and for all components reviewed, missing documents are added and the others are improved.


## Quick Coral

- 39 screens done on IOS and 18 screens done on Android.(İşLeasing)

- 33 plt closed on IOS and 34 plt closed on Android

### Quick Android:

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/review_quick_anroid.gif" alt="review_quick_anroid" style="zoom: 67%;" />

- Embedded Banking 

  - Creating the host trigger method
  - Language set with parameter taken from shell
  - Sdks can receive Pipeline.json, send to bridge
  -  Sdks can receive Loading.json, send to bridge
  - Passing CSS information to the engine
  - Web Redirection made with Embedded banking url
  - DeepLink parameters passed to Quick

- Unit tested analysis support

- Components:

  - StepperStep
  -  VDialogFragment
  -  TextField bugs are resolved
  - VSelect

- ConsentManagement, MiniAppTester and Simulator are updated according to the new structure




### Quick IOS:

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/review_quick_coral_ios.gif" alt="review_quick_ios" style="zoom: 60%;" /> 

- Embedded Banking 

  - Creating the host trigger method
  - Language set with parameter taken from shell
  - Sdks can receive Pipeline.json, send to bridge
  -  Sdks can receive Loading.json, send to bridge
  - Passing CSS information to the engine
  - Web Redirection made with Embedded banking url
  - DeepLink parameters passed to Quick

- Unit tested support