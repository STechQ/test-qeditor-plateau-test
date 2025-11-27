# Quick Release Notes - Sprint 36

## Vuetify 

### New Features

-   The setInterval structure of the QIdleTimer component has been changed and reconfigured to work with the webWorker.
    
-   **Search Feature** is added to the editor.  It provides users to search through props and events and make changes to them. When the search button is clicked (or with the ctrl + shift + f shortcut), focused view appears. When one of the search results is clicked, it opens the location and highlights it.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/searchInput.gif)
  

- Deleted VBtn template child. Thus, users can add any child they want.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VBtnTemplateChild.gif)
  

- Since the Messaging component is a priority component, it is prevented from being under/inside other components when added. The added Messaging component is moved directly to the top of the screen.

  ![enter image description here](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/MessagingComponent.gif)
  

 - When the new file is selected, some components are ready and come on top such as; Messaging, Container and Row.
 
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/NewfileTemplate.PNG)
  

- Added **mapKey** property to **QMap** component. You can set a Google Maps API key on the component.

- Globallocalization.qjson hadn't been using by plateau UI build, it can be used now by adding globallocalization.qson in setting.yaml.

  ![enter image description here](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/globalLocandNameComp.png)
  

- Names components are cached with the browser cache method.

- VTextField component's getUnmaskedValue extension had been changed.

- Target parameter has added to quick.Quick.redirect() metod.

```js
  quick.Quick.redirect("https://www.google.com.tr/",{target:"_parent"});
 
  UrlTarget = "_blank" | "_parent" | "_self" | "_top";
```

- When the Local Resource new value is set, it is activated by triggering the save page button on the IDE side.
![enter image description here](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/IDELocalResourceSave.gif)

- When the Local Resource was added to the new tab after adding a value, the values were lost. Local Store was set and development was made. The values are displayed when the old tab is closed and the new tab is opened.
![enter image description here](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/localizationLocalResource.gif)

- In webSdk integrations, return value has been added to the trigger method used to call events in the messaging component on the page.


- Users will be able to register their own certificates by adding their certificates to the ./dist/server/settings/server/certificates/ca folder in their QUI applications.
  
### Bug Fixes

- In some cases, tree view was duplicating components or not loading components. These bugs are fixed.

- If there are multiple custom components representing the same qjson, instead of requesting them all, it is handled with only one request.  

- A bug is fixed which causes a falsity of reading the fields in Settings and Local Proxy files.

- Fixed an error when setting tiff images to src in VImg.


## Rally & Sprinkle

### New Features

---

### Bug Fixes

---

## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse.( https://discourse.rally.softtech/ )

- More documentation added to https://studio.onplateau.com/docs/ui/docs/getting-started


## Quick Coral

--

### Quick Android:

* QRCode market or application referrals integration completed.

* Establishing the productflavors structure to enable the generation of discrete apks.

* General performance analysis of the application such as CPU and Memory was made with Android Profiler. Reports submitted.

* A general analysis of LifeCycle-related problems was performed using Android developer options, and the found problems were communicated.

* Project moved from gitlab to github.

* Infrastructure changes have been made.

###### Components: 

* Download document completed.

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Android_sprint35_download.gif" alt="review_quick_ios" style="zoom: 40%;" /> 

* Unit Test code checked (VBottomSheet, VCard, VDialog, QDocumentViewer, VFileInput, VForm, VIconi Vselect, VTextarea, VTextField).

* Unit tests on the components made by Moralas were checked and feedback was given.

* Abone sepeti custom icons added.


### Quick IOS:

* Added debug mode control for simulator.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint35_DebugModeSımulator.gif" alt="review_quick_ios" style="zoom: 40%;" /> 

* Github actions build completed.

* İşCep universal framework integration.

* QuickSimulator force update mechanism analysis.

* Convert QuickMobil and Supersdk frameworks to universal framework

* Github workflows edited.

* For error management, checking that the sdk can receive alert.json, send it to the bridge, and make the default display workable.

###### SuperSDK:

* Supersdk project developed to run mini app simulator.

###### Components:

* Abone sepeti custom icons added.

### Coral Support :

###### SuperApp Support:

* Screen support given to Abone Sepeti.

* Payment component developed.