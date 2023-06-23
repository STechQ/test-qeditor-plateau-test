# Release Notes 20.02.2023

### Plateau UI Release Notes - Sprint 5

#### ![party-horn 1](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/party-horn.svg) New Features


##### **UI Module Web**

- **VSelect** 
  
  Added Props:
  
  | Name      | Type    | Default | Description       |
  | --------- | ------- | ------- | ----------------- |
  | autofocus | boolean | false   | Enables autofocus |
  



- **VInlineDatePicker**

  Added Props:

  | Name             | Type   | Default        | Description                                                  |
  | ---------------- | ------ | -------------- | ------------------------------------------------------------ |
  | prependInnerIcon | string | 'mdi-calendar' | Prepends an icon inside the component’s input, uses the same syntax as v-icon |


​	

- **sheetName** parameter added to **quick.Quick.exportToXlsx()** method. Quick.exportToXlsx() method can be used to export specific data to excel file.

  ( https://jira.softtech.com.tr/browse/PLT-15002 )

  Added Props:

  | Name      | Type   | Default   | Description                                                  |
  | --------- | ------ | --------- | ------------------------------------------------------------ |
  | sheetName | string | undefined | Name of the inserted worksheet. If not, it is called default Sheet1. |

  ```javascript
  quick.Quick.exportToXlsx({fileName:'test', items:dataTable.items, headers:dataTable.headers, sheetName:'myPage'})
  	
  ```

  

- An information e-mail about the release notes has been prepared for customers.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/mailTemplate.png" width="640" />

- Keycloak.js version 18 transition was made in IAM integration. Updated login and logout mechanism.  

- Overall performance enhancements have been done. Golden Layout and Chart components are now lazy loading.


##### **UI Module Android**

- Style infrastructure works.

- Added new features and props in QLabel component.

- For VTextfeld, VButton and VCol; new style enhancements have been made.

- The improvements made for the QDocumentViewer component in the editor have been applied to mobile.

  
##### **UI Module IOS**

- Added new features and props in QDocumentViewer component.

- Added style props to VContainer.

- Plateu simulator and miniapp simulator have been updated.

- Shadow, margin padding common functions have been written for style improvements.

- Textfield,btn,qlabel style enhancements are complete.

- Design analysis studies for MonoApp application. Identification of displays and components to be used in displays.

- Creation of Monoapp framework content, phase planning.

- General support for new components developed, style system improvements, SuperSDK support and enhancements.

- Abone Sepeti screen development support.

- iOS General support.



##### **UI Module SuperApp**

- Logging studies continued in SuperApp.

- Enabled MiniApp takedown button for Admin in DevPortal.

- Put and Delete requests in SuperApp have been converted to Post requests.

- In the DevPortal, the old page versions connected to MinAppe were prevented from being brought in during the initial loading phase and the relevant page data was displayed when clicking on the old page version on the Portal.




#### ![bugs](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/bugs.svg) **Bug Fixes**


##### **UI Module Web**

- A bug is fixed that causes multiple actions when using shortcuts for saving a qjson (ctrl + s), undo(ctrl + z), and redo(ctrl + y). 

  (https://jira.softtech.com.tr/browse/PLT-14940)

- A bug is fixed since the style of the components is not visible after the CSS file import. 

  (https://jira.softtech.com.tr/browse/PLT-14932)

- The problem of not loading the setting file in the project added from the "Domain Service Prefix" in the editor has been resolved.

  ( https://jira.softtech.com.tr/browse/PLT-14914 , https://jira.softtech.com.tr/browse/PLT-14912 )


  
##### **UI Module Android**

- Abone Sepeti bug fix. 
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint41_abone_sepeti_akis.gif"  width="360"  />

- The problem of carousel values appearing on one screen has been resolved.

- Fixed carousel static values with yoga.

- btntoggle click issue (continued).

- Header problem solved in vtab component.

- Fixed MiniAppTester and Simulation issues.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Android_Sprint42_Button.jpg"  width="360"  />

  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Android_Sprint42_TextField_Style geliştirmesi.jpg"  width="360"  />



##### **UI Module SuperApp**

- Started to solve the findings of the subscriber basket, and it continues.

- Fixed an issue with Saving in DevPortal.
